const fs = require('fs');

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Oval extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="150" cy="100" rx="80" ry="50" fill="${response.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,190 20,190" style="fill:${response.shapeColor}"/>
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="10" width="180" height="180" fill="${response.shapeColor}"></rect>
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="10" width="240" height="180" fill="${response.shapeColor}"></rect>
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Pentagon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon xmlns="http://www.w3.org/2000/svg" points="150,10 260,75 210,190 90,190 40,75" style="fill:${response.shapeColor}"/>
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Hexagon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon xmlns="http://www.w3.org/2000/svg" points="90,10 210,10 260,100 210,190 90,190 40,100" style="fill:${response.shapeColor}"/>
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Octogon extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon xmlns="http://www.w3.org/2000/svg" points="95,10 200,10 260,65 260,135 210,190 95,190 40,135 40,65" style="fill:${response.shapeColor}"/>
  <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
    }
}

class Diamond extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(response) {
        fs.writeFile(`${response.text}.svg`, 

`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,100 150,190 20,100" style="fill:${response.shapeColor}"/>
  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`,
            
    (err) => err && console.error(err))
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