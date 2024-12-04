//Es6
 //ecmascript2015
 //so many changes has been done on es6.
  //let & const
  //template String
  //Arrow String
  //Destructuring
  //object props
  //default argument
  //Arrays in es6
  //New Number Methods
  //New Global Methods

//var, let and const
//      let istrue= true;
//      const x= 10;

//      if(istrue){
// const x=20
// console.log(x)
//      }
//      console.log(x)

//Tem[late String  
   //use back lit.
   //${varaible}
//Templat strings methods
 //startwith(), endwith(),includes(), repeat()
//  let fName='Naiyer';
//  let lName='Kalim';
//  console.log(`${fName } ${lName} `.repeat(5))

 //Destructuring
  //its a js expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// let mySkills=['javascript', 'Reactjs', 'Node.js', 'MongoDB',]

// let [a, b, c, d]= mySkills;
// console.log(c); 

//swap two variables without using third variable.
//  let a= 10;
//  let b= 20;
// // console.log(`Before a is ${a} and b is ${b}`)
//  [a,b]=[b,a]
//  console.log(`After a is ${a} and b is ${b}`)

 //object destructuring
//  let myBio={
// uName: "Naiyer Kalim",
// age: 30,
// Degree: 'B.Tech',
// hobby:{
//     game:'BallyBall'
// }
// }
 //let {uName,age, Degree}= myBio;
 //let {uName:userName,age, Degree}= myBio;//renameing
//  let {uName:userName,age, Degree, hobby}= myBio;//nested object
//  console.log(`Hello, I am ${userName}, My age is ${age},  I have done my ${Degree} and my hobby is ${hobby.game}`);

 ////Promises in Javascript
  //promises are used to handle asynchronous operations in javascript. 
  //They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to
  //unmanagable code.

  //A promises is an object that keep track about whether a certain event has happened already or not.
  //Determines what happens after the events has stopped.
  //promises manages the callback hell situation. 

  //Promises has 3 steps
   //1.pending
   //2.resolve
   //3.reject
  
//A function to be executed by the constructor, during the process of constructing the promiseObj.
 //The executor is custom code that ties an outcome to a promise. programmer has to write the executor

//Problem: find roll no in 2s and after 2s find name and age.
 //The methods promise.then(), promise.catch() and promise.
 //finally() are used to associate further action with a promise that becomes settled.

//...promise produce
// const promiseObj1= new Promise((resolve, reject)=>{ 
//     console.log("reject calling")
//     setTimeout(()=>{
//         let roll_no= [1,2,3,4,5];
//         resolve(roll_no)
//       // reject("error")
//     },2000)
// })

// const getBioData=(indexdata)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout((indexdata)=>{
//             let bioData={
//                 name: 'kalim',
//                 age:30
//             }
//             resolve(`My Roll ni is ${indexdata}. I am ${bioData.name} an I am ${bioData.age} years old`)
//         }, 2000, indexdata)
//     })
// }
// //...promise consume
// // promiseObj1.then((roll_no)=>{
// //     return getBioData(roll_no[1])
// // }).then((data)=>{
// // console.log(data)
// // }).catch((error)=>{
// //     console.log(error)
// // })
// ////Async/Await
//  //There is special syntax to work with Promises in a more comfortable fashion, called async/await.
//  //'async' before a function means one simple thing:  a function always returns a promise.
//  //we can use await when calling any function that returns a promise, including web API functions
//  //The keyword await makes js wait until that promise settles and returns its result.

//     async function getData(){
//         try{
//         const rollData= await promiseObj1;
//         console.log(rollData)
//         const biodata= await getBioData(rollData[1])
//         console.log(biodata)
//         return biodata;
//     }catch(error){
//         console.log(`The Error: ${error}`)
//          }
//  }


// const getName= getData().then((myname)=>{
//     console.log(myname)
// })
// //console.log(getName)
 
////fetch Api
//

 
