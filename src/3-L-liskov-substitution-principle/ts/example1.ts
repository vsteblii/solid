interface Shape2 {
    area(): number;
}

class Rectangle3 implements Shape2 {
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

class ColorfullRectangle extends Rectangle3 {
    public color: string;

    constructor(width: number, height: number, color: string) {
        super(width, height);
        this.color = color;
    }
}

class AreaCalculator3 {
    public shapes: Shape2[];
    constructor(shapes: Shape2[]) {
        this.shapes = shapes;
    }
    getTotalArea() {
        return this.shapes.reduce((previous, current) => {
            return previous + current.area();
        }, 0);
    }
}

const rectangle3 = new Rectangle3(4, 5);
const colorfullRectangle = new ColorfullRectangle(4, 5, "red");
const areaCalculator3 = new AreaCalculator3([rectangle3, colorfullRectangle]);

console.log(areaCalculator3.getTotalArea());
