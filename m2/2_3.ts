// Generic Type

// Line 1. Normal Array Decleare
// Line 2. Generic Inline Array Decleare
// Line 3. Generic Static Array Decleare
// Line 4. Generic Dynamic Array Decleare

// Generic Static
type StaticGenericNumArray = Array<number>;
type StaticGenericNameArray = Array<string>;
type StaticGenericBoolArray = Array<boolean>;

// Generic Dyanimic with param
type DynamicGenericArray<T> = Array<T>;

const rollNumbersArray1: number[] = [20, 30, 40];
const rollNumbersArray2: Array<number> = [20, 30, 40];
const rollNumbersArray3: StaticGenericNumArray = [20, 30, 40];
const rollNumbersArray4: DynamicGenericArray<number> = [20, 30, 40];

const nameArray1: string[] = ["Mithun", "Anik", "Shakil"];
const nameArray2: Array<string> = ["Mithun", "Anik", "Shakil"];
const nameArray3: StaticGenericNameArray = ["Mithun", "Anik", "Shakil"];
const nameArray4: DynamicGenericArray<string> = ["Mithun", "Anik", "Shakil"];

const boolArray1: boolean[] = [true, false, true];
const boolArray2: Array<boolean> = [true, false, true];
const boolArray3: StaticGenericBoolArray = [true, false, true];
const boolArray4: DynamicGenericArray<boolean> = [true, false, true];

// Array of object using generic type
const user22: DynamicGenericArray<{ name: string; age: number }> = [
  {
    name: "Mithun",
    age: 28,
  },
  {
    name: "Amit",
    age: 22,
  },
];

// Tuple using generic type
// Simple Tuple generic type define

type GenericTuple<A, B> = [A, B];
const aMan: GenericTuple<string, string> = ["Mithun", "Biswas"];

// Tuple generic type with objects
const userWithID: GenericTuple<number, { name: string; email: string }> = [
  1234,
  { name: "Mithun", email: "m@m.com" },
];
