// ternary operator || optional chaining || nullish coalescing operator

const age: number = 20;

// normal function
if (age >= 18) {
  console.log("adult");
} else {
  console.log("picci");
}

// ternary operator
const isAdult = age >= 18 ? "adult 1" : "not adult 1";
console.log(isAdult);

// nullish coalescing operator
// null / undefined --> decition making

const isAthentic = undefined;
const result1 = isAthentic ?? "Guest";
const result2 = isAthentic ? isAthentic : "Guest";
console.log({ result1 }, { result2 });

const isAthentic2 = "Mithun";
const result3 = isAthentic2 ?? "Guest";
const result4 = isAthentic2 ? isAthentic2 : "Guest";
console.log({ result3 }, { result4 });

type UserX = {
  name: string;
  email?: string;
  gender: "male" | "female";
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const userX: UserX = {
  name: "Mithun Biswas",
  gender: "male",
  bloodGroup: "B+",
};

const email = userX?.email ?? "No Email";
const emailUndefined = userX?.email;
console.log({ email });
console.log({ emailUndefined });
