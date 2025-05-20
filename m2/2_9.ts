{
  // conditional type

  type a1 = null;
  type a2 = undefined;

  type x = a1 extends null ? true : false; // conditional type
  type y = a1 extends null ? true : a2 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    horse: string;
  };

  // keyof operator

  // car available? // bike available? // ship available? // truck available?
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">; // true
  type HasCar = CheckVehicle<"car">; // true
  type HasShip = CheckVehicle<"ship">; // true
  type HasTruck = CheckVehicle<"truck">; // false
  type HasHorse = CheckVehicle<"horse">; // true
}
