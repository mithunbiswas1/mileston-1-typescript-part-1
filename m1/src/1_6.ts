// Function 2 type
// --> Normal Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

// --> Arrow Function
const addArrow = (num1: number = 10, num2: number = 12): number => num1 + num2;
