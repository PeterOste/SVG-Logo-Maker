// Required for shape class.
const Shape = require('./shape');

// Added the item to Shape.
class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.color}"/>`;
  }
}

// Added the item to Shape.
class Triangle extends Shape {
  render() {
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" transform="translate(50, 35)"/>`;
  }
}

// Added the item to Shape.
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}

// Determines what shape is selected via user input and converts in to lowercase automatically.
function getShapeEl(shape) {
  const shapeLowerCase = shape.toLowerCase();

  if (shapeLowerCase === 'circle') {
    return new Circle();
  } else if (shapeLowerCase === 'triangle') {
    return new Triangle();
  } else if (shapeLowerCase === 'square') {
    return new Square();
  } else {
    throw new Error('Invalid shape');
  }
}
  
// Exporting necessary content.
module.exports = {
    getShapeEl,
    Circle,
    Triangle,
    Square,
};