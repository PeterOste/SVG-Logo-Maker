// Required dependencies
const fs = require('fs');
const inquirer = require(inquirer);

function generateLogo() {
    const Questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to 3 characters):',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal number):',
        },
    ];
}

function getShape() {

}

// Function call
generateLogo();