// The open–closed principle:
// Software entities should be open for extension, but closed for modification.

class Rectangle {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class Circle {
    public radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

class AreaCalculator {
    public shapes: (Rectangle | Circle)[];
    constructor(shapes: (Rectangle | Circle)[]) {
        this.shapes = shapes;
    }
    getTotalArea() {
        return this.shapes.reduce((previous, current) => {
            if (current instanceof Rectangle) {
                return previous + current.width * current.height;
            } else if (current instanceof Circle) {
                return previous + current.radius * current.radius * Math.PI;
            } else {
                throw new Error("Unknown shape!");
            }
        }, 0);
    }
}

const rectangle = new Rectangle(4,5);
const circle = new Circle(5);
const areaCalculator = new AreaCalculator([
    rectangle,
    circle
]);

console.log(areaCalculator.getTotalArea());
