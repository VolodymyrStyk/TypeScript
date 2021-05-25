import { IAnimal} from "../interfaces/Interface";
import {AnimalSay, AnimalTypeMoving} from "../enums/Enums";

export class Cat implements IAnimal {
    howAnimalMove: AnimalTypeMoving;
    animalSay: AnimalSay;

    constructor(howAnimalMove: AnimalTypeMoving, animalSay: AnimalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }

    info(): string {
        return `Cats move: ${this.howAnimalMove} and cats say: ${this.animalSay}`;
    }
}
