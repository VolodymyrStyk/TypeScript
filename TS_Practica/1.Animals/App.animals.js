"use strict";
//1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
exports.__esModule = true;
var Enums_1 = require("./enums/Enums");
var Bird_class_1 = require("./classes/Bird.class");
var Fish_class_1 = require("./classes/Fish.class");
var Cat_class_1 = require("./classes/Cat.class");
var murik = new Cat_class_1.Cat(Enums_1.AnimalTypeMoving.CAT_RUN, Enums_1.AnimalSay.CAT_SAY);
console.log(murik);
console.log(murik.info());
var tweety = new Bird_class_1.Bird(Enums_1.AnimalTypeMoving.BIRD_FLY, Enums_1.AnimalSay.BIRD_SAY);
console.log(tweety);
console.log(tweety.info());
var goldFish = new Fish_class_1.Fish(Enums_1.AnimalTypeMoving.FISH_SWIM, Enums_1.AnimalSay.FISH_SAY);
console.log(goldFish);
console.log(goldFish.info());
