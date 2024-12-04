//funtion

// function login(username, password){
//     console.log(`${username} logged in Successfully`)
// }
// login('kalim')

// function upperCase(str){
//     return str.toUpperCase()
//     
// }
//const result= upperCase('javascript')
//console.log(result)


//Default parameter

// function multiply(width, height=20){//default value
//     let result= width*height
//     return result
// }
// console.log(multiply(10))


//variable scope
// let file='xyz.pdf'
// function download(){
//     console.log(file)//xyz.pdf
// }
// download()
// console.log(file)//file not defined

//function declaration and function expression
//declaration
// function login(){

// }

//expression
// let login=function(){
// console.log('logged in')
// }
// login();


//callback
// function formarText(text, format){
//     return typeof format==='function'?format(text) :text;
// }

// let result= formarText('hello',function(text){

//     return text.charAt(0).toUpperCase()+ text.slice(1);

// })
// console.log(result)

//IIFE
// (function(){
//     console.log('setup Done')
// })();

//Arrow Function

// let sum=(num1,num2)=> num1+num2
// console.log(sum(4,16))


