{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribAccount = new BankAccount(111, "Gorib Anik", 20);
  goribAccount.addDeposite(300);
  const myBalance = goribAccount.getBalance();
  console.log(myBalance);

  //
}
