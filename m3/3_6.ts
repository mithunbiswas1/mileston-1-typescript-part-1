// 3_6.ts

{
  // getter and setter
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

    // public addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public getBalance() {
    //   return this._balance;
    // }

    get balance() {
      return this._balance;
    }
  }

  const goribAccount = new BankAccount(111, "Gorib Anik", 20);

  //   goribAccount.addDeposite(300); // Function Call
  goribAccount.deposit = 50;

  //   const myBalance = goribAccount.getBalance(); // Function Call

  const myBalance = goribAccount.balance;
  console.log(myBalance);

  //
}
