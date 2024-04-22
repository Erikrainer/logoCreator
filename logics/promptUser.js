const inquirer = require("inquirer");

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
            message: 'What is the name for the logo (max 3 characters)',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'nameColor',
            message: 'Choose the text color (keyword or hexadecimal)',
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
            message: 'Choose the shape color (keyword or hexadecimal)',
            validate: validateColor
        },
    ]);
};

module.exports = promptUser;
