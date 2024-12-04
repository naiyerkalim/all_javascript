//prototype
//prototypal Inheritence
//es6 class keyword
//map
//set
//iterables and iterators
//generator
//promises
//async await
//

//Factorial of a Number̵
// function getFacto(num){
//     if(num==0 || num==1){
//         return 1;
//     }
//     return num* getFacto(num-1)
// }
//  console.log(getFacto(4))

// //palindrom
// let str = 'abc'
// //3*2*1
// let permutation = function (str, result) {
//     if (str.length == 0) {
//         console.log(result)
//     }
//     for (let i = 0; i < str.length; i++) {
//         let res = str.substring(0, i) + str.substring(i + 1)
//         permutation(res, result + str[i])
//     }
// }
// permutation(str, '');

//adding all given number
// let num=2786;
// function addSum(num){
//     let numtostr= ""+num
// let result= numtostr.split('').map((num)=>{
//     return parseInt(num)
// })
// let finalResult= result.reduce((a,b)=>a+b)
// console.log(finalResult)
// }
// addSum(num)

//Fibonacci
// function fibo(n){
//     if(n<2){
//         return n
//     }
//     return fibo(n-1) + fibo(n-2)
// }
//     function printFibo(n){
// for(let i=0; i<n; i++ ){
// console.log(fibo(i))
// }
//     }
// printFibo(7)

//Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

// function isPrime(n){
//     let primeFlag= true;

//     for(let i=2; i<=n/2;i++){
//         if(n%i==0){
//             primeFlag= false
//             break
//         }
//     }
//     if(primeFlag){
//         console.log(n)
//     }
// }
// function printPrime(min, max){

//     for(let i=min; i<max; i++){

//         if(i==0 ||i==1){
//             continue
//         }
//         isPrime(i)
//     }
// }
// printPrime(0,10)

//Anagram
let str= 'racecar'
function sortString (str) {
    if (!str) {
      return
    }
    return str
      .split('')
      .sort()
      .join('')
  }

  //console.log
  
//   function isAnagram (str1, str2) {
//     if (str1.length !== str2.length) {
//       return false
//     }
//     return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase())
//   }
  
//   console.log(isAnagram('racecar', 'carrace'))

//reverse the word

// function reverseString(str){
//     return str.trim().split(/\s+/).reverse().join(' ')
// }
// console.log(reverseString("Naiyer Kalim"));







