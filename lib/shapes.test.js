const shapes = require('./shapes');


describe("Shape rendering", () => {
    it("Creates a red cicle", () => {
        const circle = new shapes.Circle("Cir","white", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(circle.renderShape(response)).toEqual(`\n<circle cx="150" cy="100" r="80" fill="red" />`);
    });

    it("Creates a orange oval", () => {
        const oval = new shapes.Oval("Ovl","white", "oval", "orange");
        const response = {
            text: "Ovl",
            textColor: "white",
            shape: "oval",
            shapeColor: "orange",
        }
        expect(oval.renderShape(response)).toEqual(`\n<ellipse cx="150" cy="100" rx="80" ry="50" fill="orange" />`);
    });

    it("Creates a yellow triangle", () => {
        const triangle = new shapes.Triangle("Tri","white", "triangle", "yellow");
        const response = {
            text: "Tri",
            textColor: "white",
            shape: "triangle",
            shapeColor: "yellow",
        }
        expect(triangle.renderShape(response)).toEqual('\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,190 20,190" style="fill:yellow"/>');
    });

    it("Creates a green square", () => {
        const square = new shapes.Square("Sqr","white", "square", "green");
        const response = {
            text: "Sqr",
            textColor: "white",
            shape: "square",
            shapeColor: "green",
        }
        expect(square.renderShape(response)).toEqual('\n<rect x="60" y="10" width="180" height="180" fill="green"></rect>');
    });

    it("Creates a blue rectangle", () => {
        const rectangle = new shapes.Rectangle("Rec","white", "rectangle", "blue");
        const response = {
            text: "Rec",
            textColor: "white",
            shape: "rectangle",
            shapeColor: "blue",
        }
        expect(rectangle.renderShape(response)).toEqual('\n<rect x="30" y="10" width="240" height="180" fill="blue"></rect>');
    });

    it("Creates a purple pentagon", () => {
        const pentagon = new shapes.Pentagon("Pnt","white", "pentagon", "purple");
        const response = {
            text: "Pnt",
            textColor: "white",
            shape: "pentagon",
            shapeColor: "purple",
        }
        expect(pentagon.renderShape(response)).toEqual('\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 260,75 210,190 90,190 40,75" style="fill:purple"/>');
    });

    it("Creates a brown hexagon", () => {
        const hexagon = new shapes.Hexagon("Hex","white", "hexagon", "brown");
        const response = {
            text: "Hex",
            textColor: "white",
            shape: "hexagon",
            shapeColor: "brown",
        }
        expect(hexagon.renderShape(response)).toEqual('\n<polygon xmlns="http://www.w3.org/2000/svg" points="90,10 210,10 260,100 210,190 90,190 40,100" style="fill:brown"/>');
    });

    it("Creates a black octogon", () => {
        const octogon = new shapes.Octogon("Oct","white", "octogon", "black");
        const response = {
            text: "Oct",
            textColor: "white",
            shape: "octogon",
            shapeColor: "black",
        }
        expect(octogon.renderShape(response)).toEqual('\n<polygon xmlns="http://www.w3.org/2000/svg" points="95,10 200,10 260,55 260,140 210,190 95,190 40,140 40,55" style="fill:black"/>');
    });

    it("Creates a white diamond", () => {
        const diamond = new shapes.Diamond("Dmd","white", "diamond", "white");
        const response = {
            text: "Dmd",
            textColor: "white",
            shape: "diamond",
            shapeColor: "white",
        }
        expect(diamond.renderShape(response)).toEqual('\n<polygon xmlns="http://www.w3.org/2000/svg" points="150,10 280,100 150,190 20,100" style="fill:white"/>');
    });

    it("Creates a grey circle", () => {
        const circle = new shapes.Circle("Cir","white", "circle", "grey");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "grey",
        }
        expect(circle.renderShape(response)).toEqual('\n<circle cx="150" cy="100" r="80" fill="grey" />');
    });
})


describe("Text rendering", () => {
    it("Creates red text", () => {
        const shape = new shapes.Circle("Cir","white", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "red",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual(`\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Cir</text>`);
    });

    it("Creates orange text", () => {
        const shape = new shapes.Oval("Cir","orange", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "orange",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual(`\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">Cir</text>`);
    });

    it("Creates yellow text", () => {
        const shape = new shapes.Triangle("Cir","yellow", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "yellow",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">Cir</text>');
    });

    it("Creates green text", () => {
        const shape = new shapes.Square("Cir","green", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "green",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="green">Cir</text>');
    });

    it("Creates blue text", () => {
        const shape = new shapes.Rectangle("Cir","blue", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "blue",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="blue">Cir</text>');
    });

    it("Creates purple text", () => {
        const shape = new shapes.Pentagon("Cir","purple", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "purple",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="purple">Cir</text>');
    });

    it("Creates brown text", () => {
        const shape = new shapes.Hexagon("Cir","brown", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "brown",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="brown">Cir</text>');
    });

    it("Creates black text", () => {
        const shape = new shapes.Octogon("Cir","black", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "black",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="80" text-anchor="middle" fill="black">Cir</text>');
    });

    it("Creates white text", () => {
        const shape = new shapes.Diamond("Cir","white", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">Cir</text>');
    });

    it("Creates grey text", () => {
        const shape = new shapes.Circle("Cir","grey", "circle", "red");
        const response = {
            text: "Cir",
            textColor: "grey",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="grey">Cir</text>');
    });
})