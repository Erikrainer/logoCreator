// Import necessary modules
const { writeFile } = require('fs').promises;
const BaseLogo = require("./logics/BaseLogo");
const promptUser = require("./logics/promptUser"); // Import the user input function
const Circle = require("./shapes/circle");
const Square = require("./shapes/square");
const Triangle = require("./shapes/triangle");

// Define the baseLogo class extending BaseLogo
class baseLogo extends BaseLogo {
    constructor() {
        super();
    }

    // Function to create a file with the generated SVG content
    async fileCreator(){
        const userInput = await promptUser(); // Get user input
        const { name, nameColor, shape, shapeColor } = userInput; // Destructure user input

        const shapeClass = this.shapeSelector(shape);
        const shapeSvg = shapeClass.generateSvg(name, nameColor, shapeColor); // Call shapeSelector with user input

        await writeFile("./examples/logo.svg", shapeSvg); // Write SVG content to file
        console.log('Successfully wrote to logo.svg');
    };

    // Function to select the appropriate shape class
    shapeSelector(shape){
        if(shape === "Circle"){
            return new Circle();
        } else if(shape === "Square"){
            return new Square();
        } else {
            return new Triangle();
        }
    }
}

// Create an instance of the baseLogo class
const logo = new baseLogo();

// Call the fileCreator method to generate and save the logo SVG
logo.fileCreator();

// Export the baseLogo class
module.exports = baseLogo;
