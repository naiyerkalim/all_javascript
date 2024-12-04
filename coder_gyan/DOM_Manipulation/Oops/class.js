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

const kalimAccount= new BankAccount('Naiyer', 10000);
kalimAccount.deposit(5000)
console.log(kalimAccount);