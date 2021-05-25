import { IAnimal} from "../interfaces/Interface";
import {AnimalSay, AnimalTypeMoving} from "../enums/Enums";

export class Bird implements IAnimal {
    howAnimalMove: AnimalTypeMoving;
    animalSay: AnimalSay;

    constructor(howAnimalMove: AnimalTypeMoving, animalSay: AnimalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }

    info(): string {
        return `Birds move: ${this.howAnimalMove} and birds say: ${this.animalSay}`;
    }
}
