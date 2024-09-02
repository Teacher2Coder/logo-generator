class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    startLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
    finishLogo() {
        return `\n</svg>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) { 
        return `\n<circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Oval extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<ellipse cx="150" cy="100" rx="80" ry="50" fill="${response.shapeColor}" />`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,190 20,190" style="fill:${response.shapeColor}"/>`
    }
    renderText(response) {
        return `\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<rect x="60" y="10" width="180" height="180" fill="${response.shapeColor}"></rect>`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<rect x="30" y="10" width="240" height="180" fill="${response.shapeColor}"></rect>`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Pentagon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 260,75 210,190 90,190 40,75" style="fill:${response.shapeColor}"/>`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Hexagon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<polygon xmlns="http://www.w3.org/2000/svg" points="90,10 210,10 260,100 210,190 90,190 40,100" style="fill:${response.shapeColor}"/>`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Octogon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<polygon xmlns="http://www.w3.org/2000/svg" points="95,10 200,10 260,55 260,140 210,190 95,190 40,140 40,55" style="fill:${response.shapeColor}"/>`
    }
    renderText(response) {
        return `\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

class Diamond extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    renderShape(response) {
        return `\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,100 150,190 20,100" style="fill:${response.shapeColor}"/>`
    }
    renderText(response) {
        return `\n<text x="150" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`
    }
}

module.exports = {
    Circle : Circle,
    Oval : Oval,
    Triangle : Triangle,
    Square : Square,
    Rectangle : Rectangle,
    Pentagon : Pentagon,
    Hexagon : Hexagon,
    Octogon : Octogon,
    Diamond : Diamond
}