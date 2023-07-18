const fs = require('fs');
const readline = require('readline');
const { getShapeEl, Circle, Triangle, Square } = require('./getShape');

function generateLogo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Used readline package to prompt user on logo.svg creation.
  rl.question('Enter text (up to 3 characters): ', (text) => {
    rl.question('Enter text color (color keyword or hexadecimal number): ', (textColor) => {
      rl.question('Enter shape (circle, triangle, square): ', (shape) => {
        rl.question('Enter shape color (color keyword or hexadecimal number): ', (shapeColor) => {
          const shapeElement = getShapeEl(shape);
          shapeElement.setColor(shapeColor);

          // Svg markup string is created with a template literal.
          const svg = `<svg width="200" height="200">
            <g fill="${shapeElement.color}">
              ${shapeElement.render()}
              </g>
              <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
          </svg>`;

          fs.writeFileSync('logo.svg', svg);

          console.log('Generated logo.svg');

          rl.close();
        });
      });
    });
  });
}

// Exporting necessary content.
module.exports = generateLogo;
