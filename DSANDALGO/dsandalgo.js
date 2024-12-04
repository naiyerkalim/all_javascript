////Problem: 01, solution 1
//Sum of any two number is zero in given Array.
//[5,7,3,0,6,1,9,-3,8]
//const arr=[5,3,-1,0,2,3,5]
// function getSumoftwoZero(arr){
//     for(number of arr){
//         console.log(number);
//         for(let j=1; j<arr.length; j++){
//             if(number + arr[j]===0){
                
//                 return console.log("Two numbers are: "+number+" and "+arr[j])
//             }else{
//                 console.log("Those numbers are not available")
//             }
//         }
//     }
//     }
//     getSumoftwoZero(arr);

// const result= getSumZero(arr);
// console.log(result)
//0(n^2)quadratic time comlexity

///Problem: 01, Solution 2
//solution: array must be sorted.

// function sumpairzero(arr){

//     let left=0;
//     let right= arr.length-1;

//     while(left<right){

//          sum= arr[left]+arr[right]
// if(sum===0){
//     return [arr[left], arr[right]]
// }else if(sum>0){
// right--;
// }else{
//     left++
// }
//     }
// }
// const result= sumpairzero(sortedarr);   
// console.log(result);
//time coplexity: O(n)



///Problem:2
// String anagram
//e.g 'hello' ->'llheo'
//condition: if string lenth same or not
// function isAnagram(string1, string2){
//     if(string1.length!=string2.length){
//         return false
//     }
// let counter={}
//     for(let letter of string1){

//         counter[letter]= (counter[letter] || 0)+1;
//         // console.log(counter[letter]);
//     }
  
//     for(let items of string2){
//         if(!counter[items]){
//             return false
//         }

//         counter[items]-=1;
//     }
//     return true;
// }
// const result= isAnagram("hello", "lolrhe")
// console.log(result);
//O(n) time complexity

///problem: 3
//Count the unique number
// let arr=[1,1,2,2,3,4,4,5,5,5,6,7,7,8,9,10]

// function countUniqueNumber(){
//     if(arr.length>0){
//     let i=0;
//     for(let j=1; j<arr.length;j++){
//         if(arr[i]!==arr[j]){
//             i++;
//             arr[i]=arr[j]
//         }   
//         }
//         return i+1;
//     }else{
//         throw new Error("Array is Empty")
//     }
   
// }
// const result= countUniqueNumber(arr)
// console.log(result);

///Problem: 4
//count largest sum of 4 consecutive digits.
//condition 01: num>array--> error msg
//condition 02: 10-4+1 =>7
// let arr=[20,5,6,7,8,9,]
// function getSum(arr, num){
// if(num>arr){
//           throw new Error("num shoul not greater than Array size")
// }else{
// let max = 0;
// for(let i=0;i<arr.length-num +1;i++){
// let temp=0
// for(let j=0;j<num; j++){
//     temp+=arr[i+j]//it will plus the further value in array
// }
// if(temp>max){
//     max=temp;
// }
// }
// return max;
// }

// }





