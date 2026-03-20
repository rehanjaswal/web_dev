class Shape {
    constructor(depth, color) {
        this.depth = depth;
        this.color = color;
    }

    paint() {
        console.log(`painting with color ${this.color}`)
    }

    volume() {
        return this.area() * this.depth;
    }

    area() {
        throw new Error('the area method must be implemented in the subclass')
    }
}


class Rectangle extends Shape {
    constructor(length, width, depth, color) {
        super(depth, color)
        this.depth = depth;
        this.length = length;
        this.width = width;
    }
    
    area() {
        return this.length * this.width;
    }

    perimeter() {
        return 2 * (this.length + this.width);
    }

    static whoAmI() {
        return "i am a Rectangle";
    }
}

class Circle extends Shape {
    constructor(radius, depth, color) {
        super(color, color)
        this.depth = depth;
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }

    circumference() {
        return 2 * 3.14 * this.radius;
    }

    static whoAmI() {
        return "i am a circle";
    }
}

class Square extends Shape {
    constructor(side, depth, color) {
        super(depth, color)
        this.depth = depth;
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }

    static whoAmI() {
        return "i am a square";
    }
}


const R1 = new Rectangle(10, 20, 10, "blue")
const C1 = new Circle(10, 20, "yellow")
const S1 = new Square(10, 30, "pink")

console.log(R1.area())
console.log(C1.circumference())
console.log(S1.color)
R1.paint()
console.log(R1.volume())

function whoHasMoreVolume(shape1, shape2) {
    if (shape1.area() > shape2.area()) {
        console.log(`${shape1.constructor.name} has more area than ${shape2.constructor.name}`)
    }
    else {
        console.log(`${shape2.constructor.name} has more area than ${shape1.constructor.name}`)
    }
}

whoHasMoreVolume(new Rectangle(10, 20, 30, "black"), new Circle(20, 30, "pink"))