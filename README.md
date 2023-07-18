# SVG Logo Maker

## Description
This repository contains a command-line application that allows you to generate custom logos in SVG format based on user input. The application prompts you for text, text color, shape, and shape color, and then creates an SVG file named logo.svg that matches the specified criteria. Additionally, it prints the output message "Generated logo.svg" in the command line for confirmation.

## Usage
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install any dependencies.
4. Run `node index.js` to run the command-line application.
5. Answer the prompts to create your desired logo.
6. The command line will print out a confirmation message and the file `logo.svg` will be created.

## Dependencies
The SVG Logo Maker relies on the following dependencies:

- inquirer: ^9.2.8
- jest: ^29.6.1

## Demo
https://drive.google.com/file/d/1A2ohLR7hkLo6jEPiSbKEnkjZzMgK83Xy/view

## Example
The following example will generate a logo with the text "Yes" in red within a blue circle:

- Enter text (up to 3 characters): **Yes**
- Enter text color (color keyword or hexadecimal number): **Red**
- Enter shape (circle, triangle, square): **Circle**
- Enter shape color (color keyword or hexadecimal number): **Blue**

The command line will display "Generated logo.svg", and the logo.svg file will be created with the specified logo.

## License
This project is licensed under the MIT license.
