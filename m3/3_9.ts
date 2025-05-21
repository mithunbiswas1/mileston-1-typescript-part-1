// 3_9.ts

{
  // abstraction : 1. interface 2. abstract

  interface Vehicle1 {
    name: string;
    model: string;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: "2000",
  //   };

  // idea
  interface Vehicle2 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle2 {
    startEngine(): void {
      console.log(`I am starting car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing engine`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();

  // abstract class
  //i dea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing engine`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing engine`);
    }
  }

  //   const hondaCar = new Car2();
  //   hondaCar.startEngine();

  //
}
