//Encapsulation
  // private properties and methods
  class BankAccount{

    customerName;
    accountNumber;
    #balance=0;


    constructor(customerName, balance){
        this.customerName= customerName;
        this.accountNumber= Date.now();
        this.#balance= balance;
    }

    deposit(amount){
        this.#balance+= amount;
    }

    withdraw(amount){
        this.#balance-= amount;
    }
set balance(amount){
    this.#balance= amount
}

}

class SavingAccount extends BankAccount{
    transactionLimit=10000;

    constructor(customerName, balance=0){
        super(customerName,balance)
    }

    takePersonalLoan= function(amount){
             console.log('taking personal loan: ' +amount)
    }
}
const kalimAccount= new SavingAccount('Naiyer Kalim', 10000)

//kalimAccount.#balance=9000;
console.log(kalimAccount);
