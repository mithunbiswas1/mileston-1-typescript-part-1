// spead Operator
// rest Operator

// learn spread operator
// with array
const arrOne: string[] = ["jakir", "mithun", "abir"];
const arrTwo: string[] = ["abid", "sakil", "akash"];
arrOne.push(...arrTwo);

// with object
const mentor1 = {
  developer: "jakir",
  designer: "mithun",
  ux: "imran",
};

const mentor2 = {
  developer2: "jakir2",
  designer2: "mithun2",
  ux2: "imran2",
};

const mentorList = {
  ...mentor1,
  ...mentor2,
};

// learn rest operator
// its not rest operatior, decleare next code ...
const greetFriends = (friend1: string, friend2: string, friend3: string) => {
  console.log(`hi ${friend1}, ${friend2}, ${friend3}`);
};

greetFriends("Apu", "Dipu", "Tipu");

// its rest operator
const greetFriends2 = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`hi ${friend}`);
  });
};

greetFriends("Apu", "Dipu", "Tipu");
