// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
    // this.balance = 0;
  }
  // **TODOOOO**
  get balance() {
    let sum = 0;
    for (let transaction of this.transactions) {
      sum += transaction.value;
    }
    return sum;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction)
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (this.isAllowed()) {
      this.time = new Date()
      this.account.addTransaction(this);
    } else {
      return false;
    }
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return - this.amount;
  }
  isAllowed() {
    return this.amount <= this.account.balance;
  }
}





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

// console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

// console.log("TRANSACTIONS: *** ", myAccount.transactions)

const t3 = new Withdrawal(80.00, myAccount);
t3.commit();

console.log('Ending Balance:', myAccount.balance);







// const myAccount = new Account("snow-patrol");

// const t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// // console.log('Transaction 1:', t1);

// const t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// // console.log('Transaction 2:', t2);

// const t3 = new Deposit(120.00, myAccount);
// t3.commit();
// // console.log('Transaction 3:', t3);

// console.log(myAccount.transactions.transactions)

// // console.log('Balance:', balance);
