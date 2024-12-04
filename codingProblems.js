///1.problem: count the duplicates
//steps:
//1. On each iteration, increment the count for the value by 1 or initialize it to 1.
//2. The function we passed to the Array.forEach method gets called with each element in the array.
//3.On each iteration, we check if the current value is already present as a key in the count object. 
//If it is present, we increment it by 1 If the value is not present, we initialize it to 1
//4.We used the logical OR (||) operator to check if the key has not been initialized in the array. 
//If the accessor returns undefined, we initialize the value for the key to 0 + 1.
//5. After the last iteration, the count object contains the elements of 
//the array as keys and the number of their occurrences in the array as values.

// const a = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];
// const count = {}

// a.forEach(element => {
//   count[element] = count[element] + 1 || 1;
// });
// console.log(count);

///2.show all possible combine collections from these strings.
let str="abc"
function perm(str, result){
    if(str===""){
        console.log(result)
    }

    for(let i=0; i<str.length;i++){
        let res= str.substring(0,i)+ str.substring(i+1)
        // console.log("1 ",str.substring(0,i))
        // console.log("2 ",str.substring(i+1))
        perm(res, result+str[i])
    }
}
perm(str, "");


//3.Give an integer (num), find the factorial of that integer.
// function factorialn(num){
//     if(num===0||num===1){
//         return 1;
//     }else{
//         return num * factorialn(num-1)
//     }
// }
//// console.log(factorialN(1))'

//4.Give a number n, find the first n elements of the fibonacci seriies.
//Now what is fibonacci series? Well it is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
//method: 01
// function fibo(num){
//         let a, b, res;
//         a = 0;
//         b = 1;
//         for (var i = 2; i <= num; i++) {
//           res = a + b;
//           a = b;
//           b = res;
//         }  
//         return res
// }
// console.log(fibo(4));

//5. get only Number from array
//for removing special character : item.replace(/[^0-9]/g, '')
// var inputText = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
//  let arr=['123abc','3c4c5fd','', '34','wer','23e']
//  let arr1=arr.map((item)=>{
//      return item.replace(/[a-z]/g, '')
//  }).filter((n)=n=>{
//      return n;
//  })
//  console.log(arr1)

//6.Flattern the array
// let arr=[1,2,[3,4],5,6,[7,8,9,10,11],12]
// let output= [];

// function flattenArray(arr){
//     for(let i=0;i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//            flattenArray(arr[i])
//         }else{
//          output.push(arr[i])
//         }
//     }
//   return output;
// }
// console.log(flattenArray(arr))

//7. get sum of all number
// let data = 123456;
// //1234=> 1+2+3+4=> 10=>
// //4328= 4+3+2+8= 17=> 1+7=>8
// function addata(data) {
//   let convertToString = "" + data;
//   let convertToArray = convertToString.split('').map((ndata) => {
//     return parseInt(ndata)
//   })

//   let finaloutput = convertToArray.reduce((a, b) => { return a + b })
//   //console.log(finaloutput);
//   if (finaloutput > 9) {
//     addata(finaloutput)
//   } else {
//     console.log(finaloutput);
//   }
// }
// addata(data)

//8. arrow function should only be used in 
// let user={
//      uName: "kalim",
//      displyName1: ()=>{
//      console.log("from Arrow Function: "+ this.uName)
//      },

//      displyName2(){
//         console.log("from Arrow Function: "+ this.uName)
//      }

// }

// user.displyName1();
// user.displyName2();

//9. Currying
///Function Currying sum(1)(2)(3)(4).....()//
// let x= function(a){
//     return function(b){
//         if(b){
//             return x(a+b);
//         }
//         return a
        
//     }
// }
// console.log(x(1)(2)(3)(4)())

// ///Function Currying using ternary operator sum(1)(2)(3)(4).....()//
// let y= a=> b=> b? y(a+b):a;
// console.log(x(10)(20)(3)(4)())

//10. call, apply and bind
// let obj1={
//     displayName: "Kalim",
//     battery: 60,
//     boostBatteryCharge: function(a, b){
//         this.battery= 100 +a+b;
//     }

// }

// let obj2={
//     displayName: "Naiyer",
//     battery: 30
// }
// //obj1.boostBatteryCharge.bind(obj2,[20,3])
// let latestCharge= obj1.boostBatteryCharge.bind(obj2,20,3)
// latestCharge()
// console.log(obj1)
// console.log(obj2)

//11.
//swap two variables without using third variable.
//  let a= 10;
//  let b= 20;
// // console.log(`Before a is ${a} and b is ${b}`)
//  [a,b]=[b,a]
//  console.log(`After a is ${a} and b is ${b}`)

//12
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

//13
///Explicit call, apply and bind function
// let person={
//     name: "kalim"
// }
// function sayMyName(hobby1, hobby2){
//     console.log(`My Name is  ${this.name} and my Hobbies are ${hobby1 } ${hobby2}`)
// }
// sayMyName.call(person, "Reading", "Cooking");

//14.
// const person={
//   name: "kalim",
//   age: 30
// };
// const getObjectEntries=(person)=>{
//   const objkey= Object.keys(person)
//  // console.log(objkey);

//   const result= objkey.map((key)=>{
//      // console.log(key);
//       const value= person[key]
      
//       return[key, value]
//   })
// return result
// }
// const res= getObjectEntries(person)
// console.log(res)

//15. get sum of values
// function sum(...values){
//   let add=0;
//   values.map(ele=>add+=ele)
//   console.log(`sum: ${add}`)
// }
// sum(3,4,5,67,6);