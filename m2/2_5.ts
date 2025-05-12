// function with generics

const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

type UserV = { id: number; name: string };

const res1 = createArray("Bangladesh");
const resGeneric = createArrayWithGeneric<boolean>(true);
const resGenericObj = createArrayWithGeneric<UserV>({
  id: 22,
  name: "Mithun",
});

//

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

type UserT = { id: number; name: string };

const res10 = createArrayWithTuple<string, number>("Bangladesh", 444);
const resTuple = createArrayWithTuple<boolean, { id: number; name: string }>(
  true,
  {
    id: 22,
    name: "Mithun",
  }
);

const addCourseToStudent = <T>(student: T) => {
  const cousre = "Next Level WEb Development";

  return {
    ...student,
    cousre,
  };
};

const student51 = addCourseToStudent({
  name: "Mithun",
  email: "m@m.com",
  devType: true,
});

const student52 = addCourseToStudent({
  name: "Mithun",
  email: "m@m.com",
  class: 4,
});
