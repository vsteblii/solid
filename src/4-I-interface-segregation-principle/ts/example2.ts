interface RectangleInterface {
    width: number;
    height: number;
}

interface CircleInterface {
    radius: number;
}

interface Shape4 {
    area(): number;
}

interface Serializable {
    serialize(): string;
}


class Rectangle5 implements RectangleInterface, Shape4 {
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

class Circle5 implements Shape4 {
    public radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

class AreaCalculator4 {
    public shapes: Shape4[];
    constructor(shapes: Shape4[]) {
        this.shapes = shapes;
    }
    getTotalArea() {
        return this.shapes.reduce((previous, current) => {
            return previous + current.area();
        }, 0);
    }
}

class RectangleDTO implements RectangleInterface, Serializable {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public serialize() {
        return JSON.stringify(this);
    }
}

class CircleDTO implements CircleInterface, Serializable {
    public radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    public serialize() {
        return JSON.stringify(this);
    }
}
