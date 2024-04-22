// Import necessary modules
const { writeFile } = require('fs').promises;
const BaseLogo = require("./BaseLogo");
const promptUser = require("./promptUser"); // Import the user input function

// Define the BaseLogo class
class baseLogo extends BaseLogo {
    constructor() {
        super();
    }

    // Function to generate SVG for circle shape
    circleShape(name, nameColor, shape, shapeColor){
        const circleInfo = this.circleInfo;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${circleInfo} fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
        </svg>`;
    }
    
    // Function to generate SVG for square shape
    squareShape(name, nameColor, shape, shapeColor){
        const squareInfo = this.squareInfo;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${squareInfo} fill="${shapeColor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>`;
    }
    
    // Function to generate SVG for triangle shape
    triangleShape(name, nameColor, shape, shapeColor){
        const triangleInfo = this.triangleInfo;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${triangleInfo} fill="${shapeColor}"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>`;
    }

    // Function to create a file with the generated SVG content
    async fileCreator(){
        const userInput = await promptUser(); // Get user input
        const { name, nameColor, shape, shapeColor } = userInput; // Destructure user input

        const svgContent = this.shapeSelector(name, nameColor, shape, shapeColor); // Call shapeSelector with user input

        await writeFile("logo.svg", svgContent); // Write SVG content to file
        console.log('Successfully wrote to logo.svg');
    };

    // Function to select the appropriate shape and generate SVG accordingly
    shapeSelector(name, nameColor, shape, shapeColor){
        if(shape === "Circle"){
            return this.circleShape(name, nameColor, shape, shapeColor);
        } else if(shape === "Square"){
            return this.squareShape(name, nameColor, shape, shapeColor);
        } else {
            return this.triangleShape(name, nameColor, shape, shapeColor);
        }
    }
}

// Create an instance of the BaseLogo class
const logo = new baseLogo();

// Call the fileCreator method to generate and save the logo SVG
logo.fileCreator();

// Export the BaseLogo class
module.exports = baseLogo;
