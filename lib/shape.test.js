// Bringing over all of the necessary files.
const { Circle } = require('./getShape');
const { Triangle } = require('./getShape');
const { Square } = require('./getShape');

// Checking whether the render method generates the correct SVG string.
// Done by creating an instance of each shape and comparing it to the rendered version.
// If true, then they will pass the test when running `npm test`.
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