///var: ES5
//let and const: ES6 for to improve the code.
//Scope: it decide the accessibility of data whether it can be use here or not and curly braces create a block.
//variables declared with var are functional scope and let and const are block scoped.

//const { resolve } = require("path")

///Arrow Function
//An arrow function expression is a compact alternative to a traditional functional expression.
  //Arrow function is one of the features introduced in the ES6 version of JavaScript. 
  //It allows you to create functions in a cleaner way compared to regular functions. 
  //Arrow function cant be used in all situation.

//Arrow function with no arguments
//const sum=()=>4+3;

//Arrow function with single arguments
 //const sum=(x)=>x+3;
 //eg 1.
// function addToCart(){
//   this.product='laptop',
//   this.getProduct= function(){
//     console.log(this)
//   //  here below function)Line no:21) is refering to window object not to addTocart function, 
//   //  so we get undefine value at line no:24. 
//   //  Solution for this issue isto define any temp variable outside of this function and  get this value. but
//   //  it very difficult to manage when you have very nested structure.
//   //  So in this situation arrow function would be very useful. arrow func does not have its own this when it has it refer 
//   //  to the parent scope only.
//     setTimeout(function(){
//       setTimeout(()=>{
//       console.log(this);
// console.log(this.product)
//     },1000)
//   }
// }
// }

// let obj= new addToCart();
// obj.getProduct()

//e.g 2
//arguments properties is not defined in arrow function. for handing es6 we rest operator.
//function ()=>{//error
// function abc(){
//   console.log(arguments)
// }
// abc(2,4,5)

//e.g 3
//we should not use arrow func inside of any objects or class methods. 
//because we know arrow func always refer this to parent object or class.
// let userDetail={
//   uname: 'kalim',
//   getUser: function(){
//     return this.uname;
//   }
// }
// console.log(userDetail.getUser());


///Closures 
//IIFE(Immediately Invoked Function Expression)
  
// function outer(){
//     let count=0

//     function inner(){
//         return count+=1
//     }
//     return inner;
// }
// let res= outer() 
// console.log(res())


///Pure Function
  //Pure functions are predictable, it should give the expected output.
  //A pure function should have Predictable, Readable, Reusable and Testable.

///Currying and Partial Function:
  //Currying function takes only single arguments at a time
  //partial function could take multiple arguments at a single time.
  //

  //Problem:
    //print number from 1 to 5 with equal seconds..


// function delay(i){
//     return new Promise(resolve=>{
//         setTimeout(function(){
//             resolve(i)
//            // console.log(i)
//                         },i*1000)
//     })
// }

//    async function numberSteps(){
//         console.log("Started...")
//         for(let i=1; i<=5;i++){
//            const result= await delay(i)
//            console.log(result)
//            //result.then(result=>console.log(result))
           
//         }
//         console.log('Ended...')
//     }
// numberSteps();


//Problem:
  //Send email to all users synchronously
  // let users=['abc@gmail.com', 'xyz@gmail.com', 'kalim@gmail.com']

  // function delay(user){
  //   return new Promise(resolve=>{
  //       setTimeout(function(){
  //           resolve(user)
  //           console.log(`Email sent to ${user}`)
  //       },1000)
       
  //   })
  // }

  // async function sendEmail(){
  //   for(user of users){
  //       const confirmation= await delay(user);
  //       //console.log(confirmation)
  //   }

  //   console.log('Email sent to all Users')
  // }

  // sendEmail()

//Template Literals.
  //it allows us to handle complex string in more convenient way.
//Arrow Function
  //An arrow function expression is a compact alternative to a traditional function expression.
  //Arrow function cant use in all situations.
  //if you wanted your scope of this should not change and it should always point to your parent then use arrow function.

//Mutable and Immutable
  //primitives are immutable and these are primitive type.
    //it directly store in the new location in memory
  //Arrays and Objects are mutable and these are referenceType
    // it pointer to reference in the same memory location.

//Spread and rest operator
  //spread operator
    //It expands the array into individual elements.   
    // so it can be used to expand the array in a places where zero or more elements are expected.
      //Spread Operator with Arrays
        //e.g
        //   const team1=['user1', 'user2', 'user3']
        //   const team2=['user4','user5' ]
        //   const newTeam= [...team1, ...team2]
        //   console.log(newTeam)//when we have more than 2 array then use ...spread otherwise use cancatenate
      //copying array
      // const productList1= ['phone', 'mobile']
      // const newProduct= [...productList1]
      // newProduct.push('tablet');
      // console.log(productList1)
      // console.log(newProduct)
      //spread operator with objects
    //   const obj1= {name:'kalim', city: 'Hyderabad'}
    //   const obj2= {age:'30'}
    //   const newObj= {...obj1,...obj2}
    //   console.log(newObj)
    //   //spread operator in functions call
      // const sortlist= [100,50, 30, 20]
      // console.log(Math.min(...sortlist));
      // console.log(Math.max(...sortlist));
    //   //immutability with spread operator
    //   const todo=[{task:'cooking', status:'done'},
    //               {task:'reading', status:'Not done'}]

    //               function adtodo(newtodo){
    //                 return[
    //                     ...todo,
    //                     {...newtodo}
    //                 ]
    //               }
    //               const newList= adtodo({
    //                 task: 'working', statu:'done'
    //               })
    //               console.log(todo)
    //               console.log(newList)

    //rest parameter
      //The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
        // function sum(...values){
        //     let sum=0;
        //     values.map(s=>sum+=s)
        //     console.log(sum) 
        // }
        // sum(3,4,5,6,7,8,9);

    //map, filter and reduce
    //reducer: The reduce method executes a reducer function (that you provide) on each element of the array.
              //resulting in a single output value.
//     const emp=[{id:'s',rating1: 5,rating2:6},
//     {id:'s', rating1:6, rating2: 8},
// {id:'s', rating1:8, rating2:7}]

// const result= emp.reduce((accu, entry)=>{

//     if(entry.id==='s'){
//         accu+=  entry.rating1 +entry.rating2
//     }
//     return accu;
    
// },0)
//  console.log(result)

//Deep Copy and Shallow Copy
  //Shallow Copy:=>call by reference=> Mutable object
    //in this only reference or memory address is to copied to other object
    //js does a shallow copy by default for non-primitive type
    //and primitive types are immutable and its always create deep copy.
    //Object.assign() creates deep copying for non primitive type when we have method inside any object. but it is partial deep copy
  //By  ...spread operator by default gives partial deep copy but if we wanted to achieve deep shallow in nested object elements then it should be
   //handled properly. we have many library to achieve deep copy like clone
   //e.g Lodash, we can use for deep copy.

  // let userInfo={
  //   name:'kalim',
  //   age:30,
    
  //   address:{
  //     city: 'Dhanbad'
  //   }

  // }

  // let copiedUserInfo= {...userInfo}
  // console.log(userInfo)
  // console.log(copiedUserInfo)

//   copiedUserInfo={
//     ...copiedUserInfo,
//     name: 'Khushbu',
//     address:{
// ...copiedUserInfo.address,
// city:'Hyderabad'
//     }
//   }

//   console.log(userInfo)
//   console.log(copiedUserInfo)

//Higher order function
// function x(fn){
// fn();
// }
// function y(){
//   console.log("from function y")
// }
// x(y)
 //x():Higher Order function
 //y():Callback function
   //setTimeout(), map(), filter(), reduc() etc are Higher order function.


///call/Apply/bind are predefined methods, 
  //we use these methods for borrowing the other objects function.
//use to bind this object on methods
//it is very useful when we wanted to use other objects and 
//functions without implementing inheritence or re-writing the code.

// const getFullName= function(city){
//   console.log(`${this.name} ${this.age} and city: ${city}`)
// }

// const user1= {
//   name: 'kalim',
//   age:30
// }

// const user2={
//   name: 'Khushbu',
//   age: 24
// }

// getFullName.call(user1,'hyderabad')
// const btn= document.getElementById('btn');
// btn.addEventListener('click', getFullName.call(user1,'Hyderabad'))


///mutable-immutable
//primitive type=>immutable: string, Number, Boolean, symbol, undefined, null.
// //reference types=> mutable: objects, arrays
// let x=20
// let y=x
// y=y+1
// console.log(`X: ${x} and Y:${y}`)//20,21 because x, and y share diff memory.


//arrays and objects
// let a=['v1','v2']
// let b=[...a]//this give new memory location to b
// b.pop()
// console.log(`A: ${a} and B:${b}`)//both have same element V1

// let a= {
//   name:'user1',
//   addres:'hyderabad'
// }
// let b={...a}//this will take separate memory.
// b.age=30;
// console.log(a)//both share come changes
// console.log(b)

//we can achieve it by using spread opearator.

///optional Chaining?
  //It is a safe way to access nested objects properties, even if an intermediate property does not exist.
  //optional chaining?. stops the evaluation if the value before? is undefined or null and returns undefined.
  //we can use it only for accessing or deleting nested item
    //we can use it only for reading not writing.
  //for function also use optional chaining
//   let user={
//     name:'kalim',
//     address:{
//       city:'Hyderabad'
//     }
//   }
// console.log(user.address?.city)

///Prototype:
  //it is an object which has a powerful inbuilt methods inside it like push, pop,slice for array and split, cut, charAt etc. So inner most prototype 
  //object can be accessed by __proto__ property.
  //Never try to add primitive type to the prototype.
  
  //let rank=[4,5,2,7,8,53]
  //rank.=>Arrray.prtotype=>Object.prototype
  //usecases of prototype:
  //1.share some data across the different instances of objects
  //2. implement inheritence
   //Q. How to share data accross the different instances of the object.

  //  function User(name){
  //   this.name=name;
  //  }
  //  User.prototype.getDetails= function(){
  //   console.log(this.name)  
  //  }
  //  let user1= new User('Kalim')
  //  let user2= new User('Khushbu')

  //  user1.getDetails();
  //  user2.getDetails();

  // //Prototypal Inheritence
      //It is a method by which an object can inherit the properties and methods of another object.
    // function phone(){
    //   this.modelNumber="";
    //   this.getModelNumber= function(){
    //     return this.modelNumber
    //   }
    // }
    // function samsung(){
    //   this.modelNumber="GhjXXXX****V"

    // }
    // samsung.prototype= new phone();
    // let obj= new samsung();
    // console.log(obj.modelNumber)


//Flatten an Array using Recusion
// let arr=[1,[2,3],4,5,[6,7,8,9],10]
// let result=[];
// function getFlattenArray(arr){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             getFlattenArray(arr[i])

//         }else{
//           result.push(arr[i])
//         }
//     }
// return result
// }
// console.log(getFlattenArray(arr));



  //Prototype:
    //prototype is a global constructor an dits available to all js objects.
//     let data= [10,20,30,40]
   

//     //square of number
//     function getSqure(x)
// {
//   return x*x;
// }

// function gettriple(x){
//  return x*3;
// }

// Array.prototype.calculate=function(cal){
//   let output= []
//   for(let i=0; i<this.length; i++){
//     output.push(cal(this[i]))
//   }
// return output;
// }

// console.log(data.calculate(getSqure))
// console.log(data.calculate(gettriple))

//this keyword is determined in js how we are calling it. in which context we are calling it. 
// //call(), apply() and bind()
//   //these methods are use to set this keyword independent how the function is called.
//   //if you wanted to do function borrowing then use call, apply and bind.

// let employee={
// firstName:'Naiyer',
// lastName:'Kalim',
// getFullName: function(city){
//   console.log(`${this.firstName } ${this.lastName}, city: ${city}`)
// }
//   }

//   let customer={
//     firstName:'khushbu',
//     lastName:'Khatoon'
//   }

//   employee.getFullName.call(customer, 'Hyderabad')
//   employee.getFullName.apply(customer, ['Hyderabad'])
//   const handle=employee.getFullName.bind(customer)
//   handle('Dhanbad');

  //we should only use bind() while deal with addEventListener. 



//Dstructuring
  //The destructuring assignment syntax is a js expression that makes it possible to unpack values from arrays or 
  //propertiesfrom objects, into distinct variables.

  // const user={
  //   fname:'Naiyer',
  //   lname: 'Kalim',
  //   address:{
  //     city: 'Hyderabad',
  //     country: 'India'
  //   }
  // }

  // const {fname:a,...others}= user  
  // console.log(others)

//keys
 // Keys are used to React to identify which items in the list are changed, updated, or deleted. 






  
// let a=3;
// let b=new Number(3)

// console.log(typeof(a))//number
// console.log(typeof(b))//object

// console.log(a==b)//true
// console.log(a===b)//false

// let greeting;
// greetgn={}
// console.log(greetgn);

// console.log(typeof[])//object

// let x=0;
// console.log(x++)//0
// console.log(++x)//2
// console.log(eval('10*10+5'))//105
// let obj={
//   a:10,
//   a:20
// }
// console.log(obj)//obj{a:20}

// for(let i=1; i<5;i++){
//   if(i===3)continue
// console.log(i)//1,2,4
// }

// console.log((()=>0)());//0

// console.log(typeof typeof 1)//string
// console.log(typeof 1)//number

// console.log(true===1)//false
// console.log(true==1)//true

// let x=[...'Kalim']
// console.log(x)//['k','a','l', 'i', 'm']

// console.log(3+4+'5')//'75'

// let obj={
//   a:'one',
//   b:'two',
//   a:'three'
// }
// console.log(obj)//Object { a: "three", b: "two" }

// function getAge(...args){
//   console.log(typeof args)
// }
// getAge(21)//object


// let obj={
//   a:'one',
//   b:'two',
// }
// console.table(obj)//made obj into tabular form

// let data= 'Hello, I am Kalim. I am from Hyderbad'

// console.log(data.substring(0,18));//Hello, I am Kalim.

// console.log(typeof NaN)//number



const users=['naiyer@gmail.com', 'khushbu@gmail.com', 'nahida@gmail.com']


function getUsers(user){
  return new Promise(resolve=>{
setTimeout(()=>{
resolve(user)
console.log(`Email sent to ${user}`)
},1000)
  })
}

async function sendEmail(){
for(user of users){
  const confirmation= await getUsers(user)
  
}
console.log('Email sent to All...')
}

sendEmail();