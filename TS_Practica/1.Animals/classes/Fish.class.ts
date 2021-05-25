import { IAnimal} from "../interfaces/Interface";
import {AnimalSay, AnimalTypeMoving} from "../enums/Enums";

export class Fish implements IAnimal {
    howAnimalMove: AnimalTypeMoving;
    animalSay: AnimalSay;

    constructor(howAnimalMove: AnimalTypeMoving, animalSay: AnimalSay) {
        this.howAnimalMove = howAnimalMove;
        this.animalSay = animalSay;
    }

    info(): string {
        return `Fishes move: ${this.howAnimalMove} and fishes say: ${this.animalSay}`;
    }
}
