// type assertion / type narrowing

let anything: any;
anything = "Next Level";
// (anything as string).
anything = 222;
// (anything as number).

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `Converted value is ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result11 = kgToGm(50) as number;
const result12 = kgToGm("50") as string;

type CustomError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomError).message);
}
