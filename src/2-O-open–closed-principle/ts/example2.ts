interface Shape {
    area(): number;
}

class Rectangle2 implements Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area() {
        return this.width * this.height;
    }
}

class Circle2 implements Shape {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

class AreaCalculator2 {
    public shapes: Shape[];
    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }
    getTotalArea() {
        return this.shapes.reduce((previous, current) => {
           return previous + current.area();
        }, 0);
    }
}

const rectangle2 = new Rectangle2(4,5);
const circle2 = new Circle2(5);
const areaCalculator2 = new AreaCalculator2([
    rectangle2,
    circle2
]);

console.log(areaCalculator2.getTotalArea());
