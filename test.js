// const user={
//   name:'kalim',
//   age:'30'
// }
// ///output:
// // [
// //     ["name", "kalim"],
// //     ["age", 30]
// // ]
// //console.log(user[0]);
// function getResult(user){
//   const objKeys= Object.keys(user);
//   console.log(objKeys)
//   const result= objKeys.map((key)=>{
//     console.log(key);
//     const value= user[key]
//     console.log(value);
//     return[key, value]
//   })
//   return result;
// }
// const r= getResult(user)
// console.log(r)

//  

// let data= "size";
// const bird={
//   size: "small"
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)




// function addToCart(){
//   this.productName= 'mobile';
//   this.getProduct= function(){
//     const that= this;
//     console.log(this.productName);
//      setTimeout(function(){
//       console.log(this.productName);
//      })
//   }
  
// }

// const obj= new addToCart()

// obj.getProduct();


// let userDetail={
//   uname: 'kalim',
//   getUser: function(){
//     return this.uname;
//   }
// }
// console.log(userDetail.getUser());

//sum(3,4,5,67,6)

// function sum(...values){
//   let add=0;
//   values.map(ele=>add+=ele)
//   console.log(`sum: ${add}`)
// }
// sum(3,4,5,67,6);

//let arr= [10,90,70,50]
// // const result= arr.filter(ele=>ele>50);
// // console.log(result);
// const result= arr.reduce((a,b)=>a+b)
// console.log(result);

// let add=0;
// arr.map(ele=>add+=ele)
// console.log(`sum: ${add}`)

//HOF

//addingbyten

// function addByTen(x){
// return x+1;
// }

// function getSquare(x){
//   return x*2;
//   }

// function calCulate(data, fun){
//   const output= []
// for(let i=0; i<arr.length; i++){
// output.push(fun(data[i]))
// }
// return output;
// }

// console.log(calCulate(arr, getSquare))
// console.log(calCulate(arr, addByTen))

// let fArray= [4,5,[[5,2], 8,9]]

// let output=[]

// function flateenArray(data){
//   for(let i=0; i<data.length; i++){
//     if(Array.isArray(data[i])){
//  flateenArray(data[i])
//     }else{
//       output.push(data[i])
//     }
//   }
//   return output;
// }

// console.log(flateenArray(fArray))


// var str = "jhkj7682834";
//             var matches = str.match(/\d+/);

// console.log(matches)

// const sumArr = (arr) => {
//     const result =arr.map(item=>{
//        return  item.match(/\d+/)});
//     console.log(result);
// };


// var inputText = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
// let flatArray=[];


// function getNumber(arr){
//     let arrayItem=[];
//     arr.forEach(function(item){
//         if(typeof(item)==='number'){
//             arrayItem.push(item)
            
//         }
//     })
    
// }
// function getFlatArray(arr){
//     for(let i= 0; i< arr.length;i++){
//        if(Array.isArray(arr[i])){
//         getFlatArray(arr[i])
//        }else{
//         flatArray.push(arr[i])
//        }
//     }
//     console.log('flattenArray: ' + flatArray)
// //getNumber(flatArray)
//     return flatArray;
// }

// function processText(inputText) {
//     var output = [];
//     var json = inputText;
//     json.forEach(function (item) {
//         output.push(item.split(/(\d+)/).filter(Boolean));
       
//     });
//     console.log('flattenArray: ' + getFlatArray(output))
//     return output;
// }



//console.log(JSON.stringify(processText(inputText)));


//console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); 

//custom reduce method
// Array.prototype.myReduce = function(callback){
//      var a =0;                              
//      for(let i=0; i<this.length; i++)       
//      {
//          callback(a = a+this[i])           
//      }
//      return a;                              
// }

// let arr=[2,3,4]
// let res= arr.myReduce((acc,next)=>acc+next)
// console.log(res)//9

// let word= 'kalim'
// let revword= word.split('').reverse().join('');
// console.log(revword);

//HoF
//if r=[4,3,6,2], find the area, circumtances and diameter of the circle.

// const radius= [4,3,6,2];
// //find the area of a circle
// const area= function(radius){
//     return Math.PI* radius* radius;
// }

// //find the circumtances of a circle
// const circumtances= function(radius){
//     return 2*Math.PI* radius;
// }

// //find the diameter of a circle
// const diameter= function(radius){
//     return 2 * radius;
// }


// const calculate= function(radius, logic){
//   const output= [];
//   for(let i= 0; i< radius.length;i++){
//     output.push(logic(radius[i]));
//   }
//   return output; 
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumtances));
// console.log(calculate(radius, diameter));


//Debouncing
let count =0;
const getData=()=>{
console.log("Fetching Data...",count++)
}

const doSomemagic= function(fn,d){
    let timer;
    return function(){
        let context= this, args=arguments;
        clearTimeout(timer)
         timer= setTimeout(()=>{
getData.apply(context, args)
        },d)
    }
}
const betterFunction= doSomemagic(getData, 300);

//Throttling
// let count =0;
// const getData=()=>{
// console.log("Fetching Data...",count++)
// }

// const doSomemagic= function(fn,d){
//     let flag= true;
//     //let timer;
//     return function(){
//         if(flag){
//             let context= this, args=arguments;
//             //clearTimeout(timer)
//             fn();
//             flag=false;
//              setTimeout(()=>{
//                 flag=true
//     //getData.apply(context, arguments)
//             },d)
//         }
       
//     }
// }
// const betterFunction= doSomemagic(getData, 300);
