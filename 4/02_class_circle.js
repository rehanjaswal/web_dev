class circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }

    circumference() {
        return 2 * 3.14 * this.radius;
    }
}

const C1 = new Circle(10)
const areaC1 = C1.area()
