interface Shape3 {
    area(): number;
    serialize(): string;
}

class Rectangle4 implements Shape3 {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area() {
        return this.width * this.height;
    }

    public serialize() {
        return JSON.stringify(this);
    }
}

class Circle4 implements  Shape3 {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }

    public serialize() {
        return JSON.stringify(this);
    }

}
