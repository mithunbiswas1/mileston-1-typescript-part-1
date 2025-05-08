// Generic with interface 1st parts

type GenericTuple2<A, B> = [A, B];

// using tpe
type User2 = { name: string; email: string };

const userWithID2: GenericTuple2<number, User2> = [
  1234,
  { name: "Mithun", email: "m@m.com" },
];

// using interface
interface User3 {
  name: string;
  email: string;
}

const userWithID3: GenericTuple2<number, User2> = [
  1234,
  { name: "Mithun", email: "m@m.com" },
];

// Generic interface 2nd parts

interface DeveloperNew<T, S = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: S;
}

type XiomiWatch = {
  brand: string;
  model: string;
  size: number;
};

const poorDeveloper: DeveloperNew<XiomiWatch> = {
  name: "Mithun",
  computer: {
    brand: "Dell",
    model: "Core i7",
    releaseYear: 2025,
  },
  smartWatch: {
    brand: "Xiomi",
    model: "Seven",
    size: 25,
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  color: string;
}

interface Bike {
  brand: string;
  model: string;
}

const RichDeveloper: DeveloperNew<AppleWatch, Bike> = {
  name: "Mithun",
  computer: {
    brand: "Apple",
    model: "Bionic 3",
    releaseYear: 2025,
  },
  smartWatch: {
    brand: "Apple",
    model: "24",
    color: "black",
  },
  bike: {
    brand: "Yamaha",
    model: "fz",
  },
};
