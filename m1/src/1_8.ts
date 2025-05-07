// destructuring
// object destructuring
const user = {
  id: 135,
  name: {
    firstName: "Mithun",
    lastName: "Biswas",
  },
  age: 27,
  address: "Dhaka",
};

const {
  id,
  name: { firstName, lastName },
} = user;

// array destructuring
const myFriends = ["monika", "mithun", "snigdha", "amit", "konok"];
const [, , girl, ...rest] = myFriends;
