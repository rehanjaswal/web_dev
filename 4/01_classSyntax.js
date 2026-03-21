class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    paint() {
        console.log(`painting with color ${this.color}`)
    }

    static whoAmI() {
        return "i am rectangle";
    }
}

const rect = new Rectangle(10, 20, "red")
console.log(rect)
console.log(rect.area())
console.log(rect.perimeter())
console.log(rect.paint())
console.log(Rectangle.whoAmI())