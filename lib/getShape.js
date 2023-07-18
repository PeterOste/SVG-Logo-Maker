const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" transform="translate(50, 35)"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}

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
  
module.exports = {
    getShapeEl,
    Circle,
    Triangle,
    Square,
};