function getShapeElement(shape) {
    const shapeEl = {
      circle: '<circle cx="100" cy="100" r="50"/>',
      triangle: '<polygon points="150,20 250,180 50,180"/>',
      square: '<rect x="50" y="50" width="200" height="100"/>',
    };
  
    if (shape in shapeEl) {
      return shapeEl[shape];
    } else {
      throw new Error('Invalid shape');
    }
  }
  
  module.exports = {
    getShapeElement,
  };