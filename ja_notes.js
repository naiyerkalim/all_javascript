//Q.1> Why do yo think js is dynamic programming language?
//ans: because datatype variable can change during runtime.

//Q.2> How does js determine the datatypes?
//ans: it determines data types depending on the value assigned.

//Q.3. Define undefine?
//it means the variable is declared but value is not assigned.

//Q.4. Null?
//its not empty but just absence of data.

//Q.5. 'use strict'
//strictly check if the variable is defined using var keyword and if variable is not defined using var, it throws an exception.

//

// const arr=[1,4];
// function sumArray(array){
//     let temp=0;
//     if(array[1]>array[0]){
// temp=array[0]+1 
// console.log(temp);
//     }else{

//     }
// // for(number of array){
// //     //if()
// //     return console.log(array[0]+ array[1]);
// // }
// }
// sumArray(arr)

//Problem: 
// let data= 5678 
// //=>4+5+6+7=>22=>2+2=>4

// function addData(data){
// let convertToString= ""+data;
// console.log(convertToString);
// let convertToArray= convertToString.split('').map((data)=>{
//     console.log(parseInt(data))
//     return parseInt(data)
// })
// let result= convertToArray.reduce((a,b)=>a+b)
// if(result>9){
//     addData(result)
// }else{
//     console.log(result)
// }
// }
// addData(data)


// //find palindrom of any number

// let str= "madam"
// function checkPalindrom(data){

//     let len= data.length;
//     //for not a palindrom
//     for(let i=0; i<len/2; i++){
//         if(data[i]!==data[len-1-i]){
//              return "not a Palindrom"
//         }

//     }
//     return "Palindrom"
// }

// let finalResult= checkPalindrom(str)
// console.log(finalResult)

// const reverseString = str.split('').reverse().join('');
// if(str===reverseString){
//     console.log("Palindrom")
// }else{
//     console.log("Not a Palindrom")
//}


// let num= 5487
// //5+4+8+7=24=>2+4=6

// function getSingleNumnum(num){

//     let cinverNumtoString= " "+num
//     console.log(cinverNumtoString)
//     let stringtoArray= cinverNumtoString.split('').map((num)=>{
//         return parseInt(stringtoArray)
       
//     })

//     let result= stringtoArray.reduce((a,b)=>a+b)
//     if(result>9){
//     addData(result)
// }else{
//     console.log(result)
// }
   

// }

// getSingleNumnum(num)



