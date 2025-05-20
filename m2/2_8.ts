{
  // promise

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<{ something: string }>((resolve, reject) => {
      //   const data: string = "something";
      //   const data = null;
      //   const data: boolean = true;
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling react calling function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log(data);
  };

  showData();

  ///////////////////////////

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  getToDo();

  //
}
