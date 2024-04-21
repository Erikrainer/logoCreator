const inquirer = require("inquirer");

const { writeFile } = require('fs').promises;

const BaseLogo = require("./BaseLogo");

function validateColor(input) {

    const hexRegex = /^#?([0-9A-F]{3}){1,2}$/i;

    const colorKeywords = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'white'];

    if (hexRegex.test(input) || colorKeywords.includes(input.toLowerCase())) {
        return true;
    } else {
        return "Please enter a valid color keyword or hexadecimal color code.";
    }
}


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'maxlength-input',
            name: 'name',
            message: 'What is the name for the logo(max 3 characters)',
            maxLength: 3
          },
          {
          type: 'input',
          name: 'nameColor',
          message: 'Choose the text color(keyword or hexadecimal)',
          validate: validateColor
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape for your logo',
            choices: ["Circle", "Square", "Triangle"]
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the shape color(keyword or hexadecimal)',
            validate: validateColor
          },
        ]);
};

class baseLogo extends BaseLogo {
    circleShape(name, nameColor, shape, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
        </svg>
        `;
    }
    squareShape(name, nameColor, shape, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="60" y="60" width="180" height="180" fill="${shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>
      `;
    }
    triangleShape(name, nameColor, shape, shapeColor){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,20 260,180 40,180" fill="${shapeColor}" />
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
      </svg>
      `;
    }

    fileCreator(){
        promptUser()
        .then((answers) => writeFile("logo.svg", shapeSelector(answers)))
        .then(() => console.log('Successfully wrote to logo.svg'))
        .catch((err) => console.error(err));
    };
}

const logo = new baseLogo();

function shapeSelector(answers){
    const { name, nameColor, shape, shapeColor } = answers;
    if(answers.shape === "Circle"){
        return logo.circleShape(name, nameColor, shape, shapeColor);
    }else if(answers.shape === "Square"){
        return logo.squareShape(name, nameColor, shape, shapeColor);
    }else{
        return logo.triangleShape(name, nameColor, shape, shapeColor)
    }
}

logo.fileCreator();
