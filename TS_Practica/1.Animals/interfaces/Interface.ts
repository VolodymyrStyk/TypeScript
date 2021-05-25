import {AnimalSay, AnimalTypeMoving} from "../enums/Enums";

export interface IAnimal {
    howAnimalMove: AnimalTypeMoving;
    animalSay: AnimalSay;

    info(): string;
}