#!/usr/bin/env node
'use strict';

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

async function cropImage(inputFile, outputFile) {
    const ext = path.extname(inputFile).toLowerCase();
    if (ext !== '.png') {
        console.error(`Invalid file format. Expected .png, got ${ext}`);
        return;
    }

    const image = await Jimp.read(inputFile);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const {a} = Jimp.intToRGBA(image.getPixelColor(x, y));
            if (a !== 0) {
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }
    }

    if (minX === width && minY === height) {
        console.log(`Image "${inputFile}" is all void pixels, skipping crop`);
        return;
    }

    image.crop(minX, minY, maxX - minX + 1, maxY - minY + 1);
    await image.writeAsync(outputFile);
    console.log(`Image cropped successfully: "${inputFile}" => "${outputFile}"`);
}

async function processFileOrFolder(inputPath, outputFolder) {
    if (!fs.existsSync(inputPath)) {
        console.error(`File or directory not found: ${inputPath}`);
        return;
    }

    const inputStat = fs.lstatSync(inputPath);

    if (inputStat.isDirectory()) {
        if (!outputFolder) {
            outputFolder = inputPath;
        }
        fs.mkdirSync(outputFolder, { recursive: true });
        const files = fs.readdirSync(inputPath);
        for (const file of files) {
            const inputFile = path.join(inputPath, file);
            const outputFile = path.join(outputFolder, `${path.parse(file).name}_cropped.png`);
            await cropImage(inputFile, outputFile);
        }
    } else {
        if (!outputFolder) {
            outputFolder = path.dirname(inputPath);
        }
        const outputFile = `${path.parse(inputPath).name}_cropped.png`;
        const outputPath = path.join(outputFolder, outputFile);
        await cropImage(inputPath, outputPath);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Is it a single image or a folder? (Enter 's' or 'f'): ", function (inputType) {
    if (inputType === 's' || inputType === 'f') {
        rl.question("Enter input path: ", async function (inputPath) {
            if (inputType === 's') {
                if (!fs.existsSync(inputPath)) {
                    console.error("Invalid file path, please try again.");
                    rl.close();
                    return;
                }
                rl.question("Enter output folder name (leave blank to use input folder): ", async function (outputFolder) {
                    await processFileOrFolder(inputPath, outputFolder);
                    console.log("Done.");
                    rl.close();
                });
            } else {
                if (!fs.existsSync(inputPath)) {
                    console.error("Invalid folder path, please try again");
                } else {
                    rl.question("Enter output folder name (leave blank to use input folder): ", async function (outputFolder) {
                        await processFileOrFolder(inputPath, outputFolder);
                        console.log("Done.");
                        rl.close();
                    });
                }
            }
        });
    } else {
        console.error("Invalid input, please enter either 's' or 'f'.");
        rl.close();
    }
});      
