const BaseLogo = require("../BaseLogo");

class SquareShape extends BaseLogo {
    constructor() {
        super();
    }

    // Function to generate SVG for square shape
    generateSvg(name, nameColor, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.squareInfo} fill="${shapeColor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>`;
    }
}


module.exports = SquareShape;