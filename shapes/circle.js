const BaseLogo = require("../logics/BaseLogo");

// Define CircleShape class extending BaseLogo
class CircleShape extends BaseLogo {
    constructor() {
        super();
    }

    // Function to generate SVG for circle shape
    generateSvg(name, nameColor, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.circleInfo} fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
        </svg>`;
    }
}

module.exports = CircleShape;