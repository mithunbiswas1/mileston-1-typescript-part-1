// Function 2 type
// --> Normal Function (anonymous function)

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

// --> Arrow Function
const addArrow = (num1: number = 10, num2: number = 12): number => num1 + num2;

// Object --> function --> method
// anonymous function (Normal Function)
const pureUser = {
  name: "Mezba",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

// map to retuen number squre

const arr: number[] = [2, 4, 6];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
