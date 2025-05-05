// Reference type --> Object

const user = {
  firstName: "Mithun",
  middleName: "And",
  lastName: "Biswas",
};

const user2: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Mithun",
  middleName: "And",
  lastName: "Biswas",
};

const user3: {
  company: "Programming Hero"; // type --> literal types
  firstName?: string;
  lastName: string;
  isMarried?: true;
  age: number;
} = {
  company: "Programming Hero",
  //   firstName: "Hakim",
  lastName: "Das",
  age: 10,
};
