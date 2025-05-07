// ternary operator || optional chaining || nullish coalescing operator

const age: number = 20;

// normal function
if (age >= 18) {
  console.log("a");
} else {
  console.log("p");
}

// ternary operator
const isAdult = age >= 18 ? "a 1" : "not a 1";
console.log(isAdult);

// nullish coalescing operator
// null / undefined --> decition making

const isAthentic = undefined;
const result1 = isAthentic ?? "G";
const result2 = isAthentic ? isAthentic : "G";
console.log({ result1 }, { result2 });

const isAthentic2 = "M";
const result3 = isAthentic2 ?? "M";
const result4 = isAthentic2 ? isAthentic2 : "G";
console.log({ result3 }, { result4 });

// nullish coalescing operator
type UserX = {
  name: string;
  email?: string;
  gender: "male" | "female";
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const userX: UserX = {
  name: "M",
  gender: "male",
  bloodGroup: "B+",
};

const email = userX?.email ?? "No Em";
const emailUndefined = userX?.email;
console.log({ email });
console.log({ emailUndefined });
