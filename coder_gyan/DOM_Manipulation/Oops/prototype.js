//whenever we create any function,  javascript add a property with that funtion called prototype.
function BankAccount(customerName, balance=0){
    this.customerName= customerName;
    this.accountNumber= Date.now();
    this.balance= balance;

    //  this.deposit  =function(amount){
    //     this.balance+= amount;
    // }

    // this.wittdraw= function(amount){
    //     this.balance-=amount;
    // }
}
const kalimAccount= new BankAccount('Naiyer', 1000);
const khushbuccount= new BankAccount('Khushbu', 2000);
BankAccount.prototype.deposit= function(amount){
         this.balance+= amount;
}
BankAccount.prototype.withdraw= function(amount){
    this.balance-= amount;
}
kalimAccount.deposit(1000);
khushbuccount.deposit(2000)
kalimAccount.withdraw(100);
khushbuccount.withdraw(200)
console.log(kalimAccount)
console.log(khushbuccount)
