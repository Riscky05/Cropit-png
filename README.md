
# Cropit-png

Cropit-png is a command-line tool for cropping PNG images. With PNG Crop, you can quickly and easily crop images to remove transparent borders and improve image quality.

## Installation

Install Cropit-png with npm, inside your project

```bash
  npm i cropit-png
```
    
## Usage/Examples

Cropit-png can be used to crop a single image or a folder of images. To use it, open your command prompt or terminal and run the following command:

```
    cropit-png
```
This will launch a prompt that asks if you want to crop a single image or a folder of images. Once you have made your selection, you will be prompted to enter the path to the image or folder you want to crop.

Enter 's' if you want to crop a single image, or 'f' if you want to crop a folder of images.

If you choose to crop a single image, simply enter the path to the image file.

If you choose to crop a folder of images, enter the path to the folder containing the images.

You can also specify an output folder by entering the path to the folder where you want to save the cropped images. If you do not specify an output folder, Cropit-png will use the same folder as the input path.

Here are some examples of how to use Cropit-png:

Crop a single image:

```
cropit-png
> Do you want to crop a single image or a folder? (Enter 's' or 'f'): s
> Enter the path to the image: world.png

```
Crop a folder of images:
```
cropit-png
> Do you want to crop a single image or a folder? (Enter 's' or 'f'): f
> Enter the path to the folder: assets/

```
Crop a single image and save to a specific folder:
```
cropit-png
> Do you want to crop a single image or a folder? (Enter 's' or 'f'): s
> Enter the path to the image: world.png
> Enter the path to the output folder (leave blank to use input folder):

```


## Dependencies
PNG Crop relies on the following libraries:

Jimp: https://www.npmjs.com/package/jimp

## Github
    https://github.com/Riscky05

## License

MIT License

Copyright (c) [2023] [Ayoub Mansouri]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

