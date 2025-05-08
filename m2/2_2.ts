// interface // type vs interface

type User11 = {
  name: string;
  age: number;
};

interface User12 {
  name: string;
  age: number;
}

type UserWithRole11 = User11 & { role: string };

// const user12: UserWithRole11 = {
//   name: "Mithun Biswas",
//   age: 28,
//   role: "Developer",
// };

interface UserWithRole12 extends User12 {
  role: string;
}

type rollNumber = number;

const user11: UserWithRole12 = {
  name: "Mithun Biswas",
  age: 28,
  role: "Developer",
};

// js --> object, array --> object function --> object

// with type decleare
type Roll1 = number[];
const rollNumber1: Roll1 = [1, 2, 3];

//  with interface decleare
interface Roll2 {
  [index: number]: number;
}
const rollNumber2: Roll2 = [1, 2, 3];

//function with type decleare
type Sum = (num1: number, num2: number) => number;
const sum: Sum = (num1, num2) => num1 + num2;

//function with interface decleare
interface Sum2 {
  (num3: number, num4: number): number;
}
const sum2: Sum2 = (num3, num4) => num3 + num4;
