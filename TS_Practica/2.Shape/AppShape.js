//2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.length);
    };
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape));
var kubik = new Rectangle(5, 5);
console.log('---------kubik----------');
console.log(kubik);
console.log(kubik.perimeter());
console.log(kubik.area());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(side1, side2, side3) {
        var _this = _super.call(this) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.side1 + this.side2 + this.side3;
    };
    Triangle.prototype.area = function () {
        return 1 / 4 * Math.sqrt((this.side1 + this.side2 + this.side3) *
            (this.side1 - this.side2 + this.side3) * (this.side1 + this.side2 - this.side3) *
            (this.side3 + this.side2 - this.side1));
    };
    return Triangle;
}(Shape));
console.log('---------trikutnik----------');
var trikutnik = new Triangle(3, 5, 6);
console.log(trikutnik);
console.log(trikutnik.perimeter());
console.log(trikutnik.area());
console.log('---------ShapeArray----------');
var shapeArr = [kubik, trikutnik];
for (var _i = 0, shapeArr_1 = shapeArr; _i < shapeArr_1.length; _i++) {
    var figure = shapeArr_1[_i];
    console.log(figure.area());
}
