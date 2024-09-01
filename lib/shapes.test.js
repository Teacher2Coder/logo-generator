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
        expect(triangle.renderShape(response)).toEqual('');
    });

    it("Creates a green square", () => {
        const square = new shapes.Square("Sqr","white", "square", "green");
        const response = {
            text: "Sqr",
            textColor: "white",
            shape: "square",
            shapeColor: "green",
        }
        expect(square.renderShape(response)).toEqual('');
    });

    it("Creates a blue rectangle", () => {
        const rectangle = new shapes.Rectangle("Rec","white", "rectangle", "blue");
        const response = {
            text: "Rec",
            textColor: "white",
            shape: "rectangle",
            shapeColor: "blue",
        }
        expect(rectangle.renderShape(response)).toEqual('');
    });

    it("Creates a purple pentagon", () => {
        const pentagon = new shapes.Pentagon("Pnt","white", "pentagon", "purple");
        const response = {
            text: "Pnt",
            textColor: "white",
            shape: "pentagon",
            shapeColor: "purple",
        }
        expect(pentagon.renderShape(response)).toEqual('');
    });

    it("Creates a brown hexagon", () => {
        const hexagon = new shapes.Hexagon("Hex","white", "hexagon", "brown");
        const response = {
            text: "Hex",
            textColor: "white",
            shape: "hexagon",
            shapeColor: "red",
        }
        expect(hexagon.renderShape(response)).toEqual('');
    });

    it("Creates a black octogon", () => {
        const octogon = new shapes.Octogon("Oct","white", "octogon", "black");
        const response = {
            text: "Oct",
            textColor: "white",
            shape: "octogon",
            shapeColor: "black",
        }
        expect(octogon.renderShape(response)).toEqual('');
    });

    it("Creates a white diamond", () => {
        const diamond = new shapes.Diamond("Dmd","white", "diamond", "white");
        const response = {
            text: "Dmd",
            textColor: "white",
            shape: "diamond",
            shapeColor: "white",
        }
        expect(diamond.renderShape(response)).toEqual('');
    });

    it("Creates a grey circle", () => {
        const circle = new shapes.Circle("Cir","white", "circle", "grey");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(circle.renderShape(response)).toEqual('');
    });
})


describe("Text rendering", () => {
    it("Creates red text", () => {
        const shape = new shapes.Circle("Cir","white", "circle", "red");
        expect(shape.renderText(response)).toEqual(`\n<circle cx="150" cy="100" r="80" fill="red" />`);
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
    });

    it("Creates orange text", () => {
        const shape = new shapes.Oval("Ovl","white", "oval", "orange");
        expect(shape.renderText(response)).toEqual(`\n <ellipse cx="150" cy="100" rx="80" ry="50" fill="orange" />`);
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
    });

    it("Creates yellow text", () => {
        const shape = new shapes.Triangle("Tri","white", "triangle", "yellow");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates green text", () => {
        const shape = new shapes.Square("Sqr","white", "square", "green");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates blue text", () => {
        const shape = new shapes.Rectangle("Rec","white", "rectangle", "blue");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates purple text", () => {
        const shape = new shapes.Pentagon("Pnt","white", "pentagon", "purple");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderTextresponse()).toEqual('');
    });

    it("Creates brown text", () => {
        const shape = new shapes.Hexagon("Hex","white", "hexagon", "brown");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates black text", () => {
        const shape = new shapes.Octogon("Oct","white", "octogon", "black");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates white text", () => {
        const shape = new shapes.Diamond("Dmd","white", "diamond", "white");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });

    it("Creates grey text", () => {
        const shape = new shapes.Circle("Cir","white", "circle", "grey");
        const response = {
            text: "Cir",
            textColor: "white",
            shape: "circle",
            shapeColor: "red",
        }
        expect(shape.renderText(response)).toEqual('');
    });
})