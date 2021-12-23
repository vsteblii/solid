"use strict";
class Rectangle2 {
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
class Circle2 {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return this.radius * this.radius * Math.PI;
    }
}
class AreaCalculator2 {
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
const rectangle2 = new Rectangle2(4, 5);
const circle2 = new Circle2(5);
const areaCalculator2 = new AreaCalculator2([
    rectangle2,
    circle2
]);
console.log(areaCalculator2.getTotalArea());
