// Define the BaseLogo class
class BaseLogo {
    constructor() {}

    // Getter method to return SVG information for triangle shape
    get triangleInfo() {
        return `polygon points="150,20 260,180 40,180"`;
    }

    // Getter method to return SVG information for square shape
    get squareInfo() {
        return `rect x="60" y="60" width="180" height="180"`;
    }

    // Getter method to return SVG information for circle shape
    get circleInfo() {
        return `circle cx="150" cy="100" r="80"`;
    }

    // Method to create a file, throws an error as it's meant to be overridden by subclasses
    fileCreator(){
        throw new Error("Impossible to create a file without a logo defined.");
    }

}

// Export the BaseLogo class
module.exports = BaseLogo;
