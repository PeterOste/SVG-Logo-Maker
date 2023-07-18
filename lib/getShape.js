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
    switch (shape) {
      case 'circle':
        return new Circle();
      case 'triangle':
        return new Triangle();
      case 'square':
        return new Square();
      default:
        throw new error('Invalid shape');
    }
}
  
module.exports = {
    getShapeEl,
    Cirlce,
    Triangle,
    Square,
};