// Import the parent class
const Circle = require("../shapes/circle");//Importing the Circle class from the file
const Square = require("../shapes/square");//Importing the Square class from the file
const Triangle = require("../shapes/triangle");//Importing the Triangle class from the file

// Create a new instance of the BaseLogo class

const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

// Test case for Triangle class
describe("Triangle Test", () => {
    it('Test Triangle class', () => {
    // Call the triangle class with sample parameters
    const triangleFunctionTest = triangle.generateSvg("TestName", "blue", "red");

    // Define the expected output
    const triangleOutputExpected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,20 260,180 40,180" fill="red"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="blue">TestName</text>
        </svg>`;
    
    // Remove whitespace from the rendered shape and expected output
    const triangleResultNoSpaces = triangleFunctionTest.replace(/\s/g, '');
    const triangleOutputNoSpaces = triangleOutputExpected.replace(/\s/g, '');
    
    // Check if the rendered shape matches the expected output
    expect(triangleResultNoSpaces).toEqual(triangleOutputNoSpaces);
});
})

// Test case for Circle class
describe("Circle Test", () => {
    it('Test Circle class', () => {
    // Call the circle class with sample parameters
    const circleFunctionTest = circle.generateSvg("TestName", "blue", "red");

    // Define the expected output
    const circleOutputExpected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">TestName</text>
        </svg>`;
    
    // Remove whitespace from the rendered shape and expected output
    const circleResultNoSpaces = circleFunctionTest.replace(/\s/g, '');
    const circleOutputNoSpaces = circleOutputExpected.replace(/\s/g, '');
    
    // Check if the rendered shape matches the expected output
    expect(circleResultNoSpaces).toEqual(circleOutputNoSpaces);
});
})

// Test case for Square class
describe("Square Test", () => {
it('Test Square class', () => {
    // Call the Square class with sample parameters
    const squareFunctionTest = square.generateSvg("TestName", "blue", "red");

    // Define the expected output
    const squareOutputExpected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="60" y="60" width="180" height="180" fill="red"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">TestName</text>
        </svg>`;
    
    // Remove whitespace from the rendered shape and expected output
    const squareResultNoSpaces = squareFunctionTest.replace(/\s/g, '');
    const squareOutputNoSpaces = squareOutputExpected.replace(/\s/g, '');
    
    // Check if the rendered shape matches the expected output
    expect(squareResultNoSpaces).toEqual(squareOutputNoSpaces);
});
})
