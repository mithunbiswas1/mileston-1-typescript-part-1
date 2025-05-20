{
  // utility types

  // pick utility

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNumber: number;
  };

  //   type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit utility

  type ContactInfo = Omit<Person, "name" | "age">;

  //Required utility
  type PersonRequired = Required<Person>;

  //Pertial utility
  type PersonPertial = Partial<Person>;

  //Read Only utility
  type PersonReadOnly = Readonly<Person>;
  const person1: Person = {
    //   const person1: PersonReadOnly = {
    name: "Mithun",
    age: 40,
    contactNumber: 1877,
  };
  person1.name = "Anik"; //change value if use readOnly it not changeable

  // Record Type
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  const WmptyObject: Record<string, unknown> = {};

  //
}
