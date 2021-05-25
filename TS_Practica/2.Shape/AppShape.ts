//2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {

    abstract perimeter(): number;

    abstract area(): number;
}

class Rectangle extends Shape {
    width: number;
    length: number;

    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }

    perimeter(): number {
        return 2 * (this.width + this.length);
    }

    area(): number {
        return this.width * this.length;
    }
}

const kubik = new Rectangle(5, 5);
console.log('---------kubik----------');
console.log(kubik);
console.log(kubik.perimeter());
console.log(kubik.area());

class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;

    constructor(side1: number, side2: number, side3: number) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    perimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }

    area(): number {
        return 1 / 4 * Math.sqrt((this.side1 + this.side2 + this.side3) *
            (this.side1 - this.side2 + this.side3) * (this.side1 + this.side2 - this.side3) *
            (this.side3 + this.side2 - this.side1));
    }
}

console.log('---------trikutnik----------');
const trikutnik = new Triangle(3, 5, 6);
console.log(trikutnik);
console.log(trikutnik.perimeter());
console.log(trikutnik.area());

console.log('---------ShapeArray----------');
const shapeArr: Array<Shape> = [kubik, trikutnik];
for (const figure of shapeArr) {
    console.log(figure.area());
}