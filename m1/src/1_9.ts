// Type Alias

// Object Type Alias
type Student = {
  name: string;
  age: number;
  class: string;
  isStudent: boolean;
  address: string;
  contactNo?: string;
};

const student1: Student = {
  name: "Mithun",
  age: 45,
  class: "seven",
  isStudent: true,
  address: "dhaka",
  contactNo: "017",
};

const student2: Student = {
  name: "Faisal",
  age: 45,
  class: "seven",
  isStudent: true,
  address: "dhaka",
};

// Variable Type Alias
type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "Mithun Biswas";
const isAmin: IsAdmin = true;

// Function Type Alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
