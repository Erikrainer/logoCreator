const BaseLogo = require("../logics/BaseLogo");

class TriangleShape extends BaseLogo {
    constructor() {
        super();
    }

    // Function to generate SVG for triangle shape
    generateSvg(name, nameColor, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.triangleInfo} fill="${shapeColor}"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>`;
    }
}



module.exports = TriangleShape;