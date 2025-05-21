{
  // static
  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instantce1 = new Counter();
  console.log(instantce1.increment());
  console.log(instantce1.increment());
  console.log(instantce1.increment());

  const instantce2 = new Counter();
  console.log(instantce2.increment());
  console.log(instantce2.increment());
  console.log(instantce2.increment());

  //
}

{
  // static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  console.log(Counter.increment());
  console.log(Counter.increment());

  //
}
