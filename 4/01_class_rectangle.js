class Rectangle {
    constructor(length, width) {
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

const R1 = new Rectangle(10, 20);
const areaR1 = R1.area();
const perimeterR1 = R1.perimeter()


console.log(Rectangle.whoAmI())
console.log(areaR1)
console.log(perimeterR1)