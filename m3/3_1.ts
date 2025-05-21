// 3_1.ts

{
  // oop - class

  class Animal {
    // public name: string;
    // public sound: string;

    // parameter properties

    constructor(public name: string, public sound: string) {
      //   this.name = name;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Dog", "Ghew Ghew");
  const cat = new Animal("Parsian", "mew mew");

  cat.makeSound();
  dog.makeSound();

  //
}
