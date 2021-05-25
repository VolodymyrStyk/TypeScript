//1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal


import {AnimalSay, AnimalTypeMoving} from "./enums/Enums";
import {Bird} from "./classes/Bird.class";
import {Fish} from "./classes/Fish.class";
import {Cat} from "./classes/Cat.class";

const murik = new Cat(AnimalTypeMoving.CAT_RUN, AnimalSay.CAT_SAY);
console.log(murik);
console.log(murik.info());

const tweety = new Bird(AnimalTypeMoving.BIRD_FLY, AnimalSay.BIRD_SAY);
console.log(tweety);
console.log(tweety.info());

const goldFish = new Fish(AnimalTypeMoving.FISH_SWIM, AnimalSay.FISH_SAY);
console.log(goldFish);
console.log(goldFish.info());
