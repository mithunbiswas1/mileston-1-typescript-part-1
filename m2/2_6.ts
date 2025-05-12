// Constrains

{
  //

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const cousre = "Next Level WEb Development";

    return {
      ...student,
      cousre,
    };
  };

  const student50 = addCourseToStudent({
    id: 50,
    name: "Mithun B",
    email: "m2@m.com",
    test: "Test",
  });

  const student51 = addCourseToStudent({
    id: 51,
    name: "Mithun",
    email: "m@m.com",
    devType: true,
  });

  const student52 = addCourseToStudent({
    id: 52,
    name: "Mithun",
    email: "m@m.com",
    class: 4,
  });

  //
}
