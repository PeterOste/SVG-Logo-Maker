const fs = require('fs');
const readline = require('readline');
const { getShapeEl, Circle, Triangle, Square } = require('./getShape');

function generateLogo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter text (up to 3 characters): ', (text) => {
    rl.question('Enter text color (color keyword or hexadecimal number): ', (textColor) => {
      rl.question('Enter shape (circle, triangle, square): ', (shape) => {
        rl.question('Enter shape color (color keyword or hexadecimal number): ', (shapeColor) => {
          const shapeElement = getShapeEl(shape);
          shapeElement.setColor(shapeColor);

          const svg = `<svg width="300" height="200">
            <g fill="${shapeElement.color}">
              ${shapeElement.render()}
              <text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>
            </g>
          </svg>`;

          fs.writeFileSync('logo.svg', svg);

          console.log('Generated logo.svg');

          rl.close();
        });
      });
    });
  });
}

module.exports = generateLogo;
