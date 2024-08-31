const shape = require('./shapes');

describe("Shapes", () => {
    it("Creates a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor('blue')
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    it("Creates a red square", () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual();
    });

    it("Creates a yellow circle", () => {
        const shape = new Circle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual();
    });

    it("Creates an orange rectangle", () => {
        const shape = new Rectangle();
        shape.setColor('orange');
        expect(shape.render()).toEqual();
    });

    it("Creates a green oval", () => {
        const shape = new Oval();
        shape.setColor('green');
        expect(shape.render()).toEqual();
    });

    it("Creates a purple octogon", () => {
        const shape = new Octogon();
        shape.setColor('purple');
        expect(shape.render()).toEqual();
    });
})