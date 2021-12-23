class Rectangle3 {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class ColorfullRectangle extends Rectangle3 {
    color;
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }
}
class AreaCalculator3 {
    shapes;
    constructor(shapes) {
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
