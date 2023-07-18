const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,20 250,180 50,180" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}"/>`;
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