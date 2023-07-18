const { prompt } = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square, getShapeEl } = require('./getShape');

async function generateLogo() {
    const inquirer = await import('inquirer');

    const questions = [
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

    const { text, textColor, shape, shapeColor } = await prompt(questions);
 
    const shapeElement = getShapeEl(shape);
    shapeElement.setColor(shapeColor);

    const svg = `<svg width="300" height="200">
        <text x="10" y="30" fill="${textColor}">${text}</text>
        <g fill="${getShape.getShapeEl(shapeColor)}">
            ${getShape.getShapeEl(shape)}
        </g>
    </svg>`;
  
    fs.writeFileSync('logo.svg', svg);
  
    console.log('Generated logo.svg');
}
  
module.exports = generateLogo;