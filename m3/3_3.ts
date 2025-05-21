// 3_3.ts

{
  // type guards

  // typeof --> type gaurd

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  console.log(add("2", 3));

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name} `);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr Normal",
  };
  const adminUser: AdminUser = {
    name: "Mr Normal",
    role: "manager",
  };

  getUser(normalUser);

  //
}
