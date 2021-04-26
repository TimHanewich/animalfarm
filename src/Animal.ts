import {Species} from "./Species";
export {Animal};

class Animal
{
    Name:string = "";
    AnimalSpecies:Species = Species.Dog;

    Speak():string
    {
        if (this.AnimalSpecies == Species.Cat)
        {
            return "Meow";
        }
        else if (this.AnimalSpecies == Species.Dog)
        {
            return "Woof";
        }
        else if (this.AnimalSpecies == Species.Elephant)
        {
            return "Chooo";
        }
        else if (this.AnimalSpecies == Species.Monkey)
        {
            return "Ooh";
        }
        else
        {
            return "?";
        }
    }
}