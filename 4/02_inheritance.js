class Shape {
    constructor(depth, color) {
        this.depth = depth;
        this.color = color;
    }

    paint() {
        return `painting with ${this.color} color`;
    }

    area() {
        throw new Error ('the area method must be implemented by the subclass');
    }

    perimeter() {
        throw new Error ('the perimeter method must be implemented by the subclass')
    }

    volume() {
        return this.area() * this.depth;
    }
}

class Rectangle extends Shape {
    constructor(width, height, depth, color) {
        super(depth, color);
        this.width = width;
        this.height = height;
    
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius, depth, color) {
        super(depth, color);
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }

    perimeter() {
        return 2 * 3.14 * this.radius;
    }
}

const r1 = new Rectangle(20, 10, 5, "red")
const c1 = new Circle(5, 2, "blue")
console.log(c1.area())
console.log(r1.paint())
console.log(r1.perimeter())
console.log(c1.volume())