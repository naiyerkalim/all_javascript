//constructor function always start with capital letter.(not manditory but its a general convention)
//each objects create separate memory.
//
function BankAccount(customerName, balance=0){
    this.customerName= customerName;
    this.accountNumber= Date.now();
    this.balance= balance;

     this.deposit  =function(amount){
        this.balance+= amount;
    }

    this.wittdraw= function(amount){
        this.balance-=amount;
    }
}
const accounts=[];
const accountForm= document.querySelector('#accountform')
const customerName= document.querySelector('#customerName')
const customerBalance= document.querySelector('#customerBalance')
const accountNumber= document.querySelector('#accountNumber')
const amount= document.querySelector('#deposit')


accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(customerName.value)
    // console.log(customerBalance.value)
    const account= new BankAccount(customerName.value, +customerBalance.value);
    accounts.push(account)
    console.log(accounts);
})

depositfrom.addEventListener('submit', (e)=>{
    e.preventDefault();

    const account= accounts.find((account)=> account.accountNumber===+accountNumber.value)

    account.deposit(+amount.value)
    console.log(accounts);
   
})





// const kalimAccount= new BankAccount('Naiyer Kalim', 1000);
// const khushbuAccount= new BankAccount('Khushbu Khatoon');
// console.log(kalimAccount);
// kalimAccount.deposit(5000)
// kalimAccount.wittdraw(2000);
// console.log(khushbuAccount);