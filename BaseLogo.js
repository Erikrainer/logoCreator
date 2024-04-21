class BaseLogo {
    constructor() {}
    fileCreator(){
        throw new Error("Impossible to create a file without a logo defined.");
    }
    circleShape(){
        throw new Error("Circle shape not defined");
    }
    squareShape(){
        throw new Error("Square shape not defined");
    }
    triangleShape(){
        throw new Error("Triangle shape not defined");
    }
}

module.exports = BaseLogo;