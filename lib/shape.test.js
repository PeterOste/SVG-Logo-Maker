const { Circle } = require('./getShape');
const { Triangle } = require('./getShape');
const { Square } = require('./getShape');

test('Circle render method returns valid SVG string', () => {
  const circle = new Circle();
  circle.setColor('blue');
  
  const expectedSVG = '<circle cx="100" cy="100" r="50" fill="blue"/>';
  const actualSVG = circle.render();
  
  expect(actualSVG).toEqual(expectedSVG);
});

test('Triangle render method returns valid SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    
    const expectedSVG = '<polygon points="50 15, 100 100, 0 100" fill="green" transform="translate(50, 35)"/>';
    const actualSVG = triangle.render();
    
    expect(actualSVG).toEqual(expectedSVG);
});

test('Square render method returns valid SVG string', () => {
    const square = new Square();
    square.setColor('red');
    
    const expectedSVG = '<rect x="50" y="50" width="100" height="100" fill="red"/>';
    const actualSVG = square.render();
    
    expect(actualSVG).toEqual(expectedSVG);
});