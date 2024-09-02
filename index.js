const inquirer = require('inquirer');
const shape = require('./lib/shapes.js')
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What text would like in your logo? (Note: only three characters, please)',
        name: 'text',
    },
    {
        type: 'list',
        message: 'What color would you like your text to be?',
        name: 'textColor',
        choices: ["red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white", "grey"]
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        name: 'shape',
        choices: ["circle", "oval", "triangle", "square", "rectangle", "pentagon", "hexagon", "octogon", "diamond"]
    },
    {
        type: 'list',
        message: 'What color do you want your shape to be?',
        name: 'shapeColor',
        choices: ["red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white", "grey"]
    },
]

function generateSVG(response) {
    if (response.shape === "circle") {
        const image = new shape.Circle(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "oval") {
        const image = new shape.Oval(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "triangle") {
        const image = new shape.Triangle(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "square") {
        const image = new shape.Square(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "rectangle") {
        const image = new shape.Rectangle(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "pentagon") {
        const image = new shape.Pentagon(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "hexagon") {
        const image = new shape.Hexagon(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "octogon") {
        const image = new shape.Octogon(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    } else if (response.shape === "diamond") {
        const image = new shape.Diamond(response.text, response.textColor, response.shape, response.shapeColor)
        fs.writeFileSync(`${response.text}.svg`, image.startLogo(), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderShape(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.renderText(response), (err) => err && console.error(err))
        fs.appendFileSync(`${response.text}.svg`, image.finishLogo(), (err) => err && console.error(err))
    }
}

function decideLength(response) {
    if (response.text.length > 3) {
        throw new Error('Please enter only 3 characters when entering text!');
        // console.error("Please enter only 3 characters when entering text!")
    } else {
        generateSVG(response);
        console.log(`${response.text}.svg created!`)
    }
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        decideLength(response);
    })
}

init();

module.exports = decideLength
