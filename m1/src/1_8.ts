// destructuring

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
