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

function getShape(shape) {
    const shapeEl = {
        circle: '<circle cx="100" cy="100" r="50"/>',
        triangle: '<polygon points="150,20 250,180 50,180/>',
        square: '<rect x="50" y="50" width="200" height="100"/>',
    };

    if (shape in shapeEl) {
        return shapeEl[shape];
    } else {
        throw new Error('Invalid shape')
    }
}

// Function call
generateLogo();