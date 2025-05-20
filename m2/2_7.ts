{
  // generic constain with generic operator

  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicles;

  const person1: Owner = "bike";
  const person2: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mithun",
    age: 20,
  };

  const result1 = getPropertyValue(user, "name");

  const user2 = {
    model: "Toyota",
    year: 2000,
  };

  const result2 = getPropertyValue(user2, "year");

  const user3 = {
    name: "Mithun",
    age: 20,
  };

  const result3 = getPropertyValue(user, "name");

  //   2 way to get
  user.age;
  user["name"];
  //
}
