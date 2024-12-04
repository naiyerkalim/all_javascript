///class way for inheritence.
//
class BankAccount{

    customerName;
    accountNumber;
    balance;


    constructor(customerName, balance){
        this.customerName= customerName;
        this.accountNumber= Date.now();
        this.balance= balance;
    }

    deposit(amount){
        this.balance+= amount;
    }

    withdraw(amount){
        this.balance-= amount;
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

class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName, balance=0){
        super(customerName,balance)
    }

    takeBusinessLoan= function(amount){
        console.log('taking business loan: ' +amount)
}
}


///Function Way for inheritence.
// function BankAccount(customerName, balance=0){
//     this.customerName= customerName;
//     this.accountNumber= Date.now();
//     this.balance= balance;
// }

// BankAccount.prototype.deposit= function(amount){
//     this.balance+= amount;
// }
// BankAccount.prototype.withdraw= function(amount){
// this.balance-= amount;
// }

// function CurrentAccount(customerName, balance=0){
//     this.transactionLimit=50000;
// }
// //Linking prototype to child constructor
// CurrentAccount.prototype= Object.create(BankAccount.prototype);
// CurrentAccount.prototype.takeBusinessLoan= function(amount){
//     console.log('taking business loan: ' +amount)
// }

// function SavingAccount(customerName, balance=0){
//     //inherit the BankAccount property
//     //this is also called constructor linking.
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit=10000;
// }
// SavingAccount.prototype= Object.create(BankAccount.prototype);
// SavingAccount.prototype.takePersonalLoan= function(amount){
//     console.log('taking business loan: ' +amount)
// }

const kalimAccount= new SavingAccount('Naiyer Kalim', 10000)
kalimAccount.deposit(1000);
kalimAccount.withdraw(10);
kalimAccount.takePersonalLoan=9000;
console.log(kalimAccount);