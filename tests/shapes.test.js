// Import the parent class
const BaseLogo = require('../index'); // Assuming your BaseLogo class is in a separate file

// Create a new instance of the BaseLogo class
const logo = new BaseLogo();

// Test case for triangleShape method
test('Test triangleShape method', () => {
    // Call the triangleShape method with sample parameters
    const triangleFunctionTest = logo.triangleShape("TestName", "blue", "triangle", "red");

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

// Test case for circleShape method
test('Test circleShape method', () => {
    // Call the circleShape method with sample parameters
    const circleFunctionTest = logo.circleShape("TestName", "blue", "circle", "red");

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

// Test case for squareShape method
test('Test squareShape method', () => {
    // Call the squareShape method with sample parameters
    const squareFunctionTest = logo.squareShape("TestName", "blue", "square", "red");

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
