//Javascript
 //js is a synchronous single-threaded language.
 //when you run any js code, an execution context is created.

//Execution Context
 //Everything in js happens inside an Execution Context
   //It has 2 components
    //1. Memory comp(variable env also known as memory creation phase): this is the place where all variables and functions  are stored as a key value pair.
    //2. Code comp(Thread of execution also known as code execution phase):  This is the place where code execute line by line.
//CallStack:
  //Call Stacks maintains the order of executions of execution contexts.

////Hoisting
//<1.>Hoisting is the default behaviour of moving all the declaration at the top of the scope
//giving memory to variable at the creation phase is nothing but hoisting
//before code execution.
//<2.>Javascript hoist only declarations not initialization.
//Hoisting is part of JavaScript's execution context model. When the JavaScript engine compiles the code (before execution), it goes through two phases:

// Creation Phase: During this phase, JavaScript scans for variable and function declarations and sets them up in memory.
// Execution Phase: In this phase, the code is executed line by line.

// For var-declared variables, only the declaration is hoisted (not the assignment).
// For function declarations, the entire function (including its body) is hoisted to the top.
// For let and const variables, only the declaration is hoisted, but they are in the temporal dead zone until they are initialized, which prevents accidental usage.


// getName()
// var x="Kalim";
// function getName(){
// console.log(x)//undefined
// }

//Shortest js program
  //Window: it is a global object, which is created along with the global execution context.

///Lexical and Scope Chain
//when we have nested function, the js engine for variable lookup starts with the inner most function where we are trying to access
//variables and moves outward untill it reaches the global scope.
// var y=100;
// function a(){
//     var x=10;
//     console.log("inside a "+x)
//     function b(){
//         console.log("inside b "+x +" "+y)
//     }
//     b()
// }
// a();

///shadowing
//when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, 
//the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space.
// var a=100
// let b=200
// const c=300
// {
//     var a=10//this line shadowed
//     // let b=20
//     // const c=30
//      console.log(a)
//     console.log(b)
//     console.log(c)
// }
//console.log(a)

//illegal shadowing: If you create a variable in a global scope with the let keyword and another variable with the var keyword in a block scope but the exact same name, it will throw an error. This is called illegal shadowing.
 //let a=10;
 //{
 //var a=10;
 //cosole.log(a)
 //}

///Closers
///Function bundled with its lexical environment is known as a closure. 
///Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. 
///Its not just that function alone it returns but the entire closure and that's where it becomes interesting.
//Uses of closers
  // Module Design Pattern(encapsulation)
  //currying
  //function like once.
  //memoiz.
  //maintaining state in async world.
  //settimeouts
  //Iterators an d more.
// function x(){
//     var a=10;
//    return function y(){
//         console.log(a)//closers
//     }
// }
// x();

// function x(){
//   for(let i=1;i<6;i++){
//     setTimeout(function(){
// console.log(i)
//     },i*1000)
//   }
// }
// x();

//setTimeouts and closures
//  const x=()=>{
//     for(var i=1; i<6; i++){
//         const y=(a)=>{
//             setTimeout(function(){
//                 console.log(a)
//                 },a*1000)
//         }
//         y(i)
//     }
//  }
//  x();

///Data hiding and encasulation
/// we do encapsulation so that other function and code could not access it.
//  function outer(){
//     var count=0;
//     return function counter(){
//         count++;
//         console.log(count)
//     }
// }
// var counter1= outer()
// counter1()

///e.g: How to make code more scalable. using constructor function
 //constructor
   //a constructor function is used to create objects.
// function Outer(){
//     var count=0;
//     this.inccounter= function(){
//         count++;
//         console.log(count)
//     }
//      this.deccounter= function(){
//         count--;
//         console.log(count)
//     }
// }
// var counter1= new Outer()
// counter1.inccounter();
// counter1.inccounter();
// counter1.deccounter();

///Disadvantages of closures
 //Closures consume a lot of memory. 
 //Creating a function within a function causes memory duplication, which slows down the application.
/// Garbage collections: Its a program in Javascript engine which freezup the unutilized memory.
/// How closures and garbage collections are corelated each other.
// function outer(){
//     var x=0, y=10;//  modern js engine smartly recognize and y freeup these unutilized memory.
//     return function inner(){
// console.log(x)
//     }
// }

///first class function, Anonymous function
/// function statement/function declaration/ function expression
//function Statement aka function declaration
  //Declared functions are not executed immediately. 
  //They are "saved for later use", and will be executed later, when they are invoked (called upon).
//  function a(){
//     console.log("a called")
// }
// // funtion Expression
     //A function expression can be stored in a variable:
// var b =function(){
//     console.log("b called")
// }
// a()
// b()

//diff b/w function statement/function declaration and function expression
  //function statement and function expression hoisted differently while execution
//e.g
// a()//execute
// b()//give reference error saying: b is not a function.
      //  function a(){
//     console.log("a called")
// }
// // funtion Expression
// var b =function(){
//     console.log("b called")
// }


//Anonymous function: a function without name is called a anonymous function.
//Anonymous functions are used in a place where functions are used as a value.
// function(){
// }

///Named Funtion: declare function with some name. e.g
// var b =function xyz(){
//         console.log("b called")
// }
// b()

/// First Class Function: pass function as an argument to another function OR ability to use function as a value.
// A programming language is said to have First-class functions if functions in that language are treated like other variables. 
//So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
// var b =function (param){
//  return function xyz(){
//     console.log("b called")
//  }
// }
// console.log(b());

//How can we achieve asynchronous in Javascript?
  //by webApi and callback functions
///Callbacks in Javascript: calling a function inside another function is called callbacks 

//Why should we remove eventlistner?
  //Avoid memory leaks, if the browser is not handled it properly

// setTimeout(function(){
// console.log("timer")
// },5000)
// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){
//     console.log("y")
// })

///Asynchronous JavaScript & EVENT LOOP
// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).

//to access anything from browser we need web api's. 
//e.g: setTimeout(), DOM Api, fetch(), local Storage, console, location.
// browser gives the power of using above web apis to js engine.
//and browser provides all apis through window.
//Callback queue: after timer get expires it will get to callback queue
//eventloop: It checks in eventqueue if there anything there or not i.e callback, it pushes it to callstack
//Microtask Queue: Its like a callbacl queue but it has more priority for execution. fetch() web api go to microtask queue.
//all the callback funtion which comes through the promises will go inside microtask Queue.
///Mutation observer: its keeps on checking is there any mutation in DOM tree or not.
///Starvation of callback queue: if callbak queue is not getting to execute for long time then this situation is called starvation.

///JS Engine EXPOSED 🔥 Google's V8 Architecture
//js engine is a normal piece of code and is written in low level language.
///our javascript code goes into 3 different phase in js engine...
//(1).Parsing  (2).Compilation  (3).Execution
//Syntax Parser: Its inside js engine and take our js code and convert it into AST(abstract syntax tree)
//JIT Compilation:(just in time compilation): js uses both interpreter and compiler.
//Compiler/interpreter
//H.W Read about Mark and Sweep Algorithm. also read inline, copy elision, inline caching

////TRUST ISSUES with setTimeout() 
// Its not necessary for setTimeout to finish its execution in 5 seconds only, If there there is suppose code whis is running 
//after setTimeout for 10seconds then setTimeout will executr after 10 seconds. e.g

// console.log("Start")
// setTimeout(function(){
// console.log("callback")
// },5000)
// console.log("End")
// let startTime= new Date().getTime();
// let endTime= startTime;
// while(endTime<startTime+10000){
//     endTime= new Date().getTime();
// }
// console.log("time expires..")

///1.Higher order and callback function
//a function which takes a function as an arguments and returns a function from it is known a Higher order function.
// function x(){
//     console.log("calling function")
// }
// function y(x){
// console.log("from Hihger order function")
// x();
// }
// y(x);


//const arr=[4,3,7,8]

// const calculateArea= function(arr){
//     const output=[]
//     for(let i=0; i<arr.length;i++){
//         output.push(Math.PI*arr[i]*arr[i])
//     }
//     return output
// }

//console.log(calculateArea(arr))

// const radius_arr=[4,5,2,3]
// const area= function(radius_arr){
//     return Math.PI* radius_arr*radius_arr;
// }

// const circumtances= function(radius_arr){
//  return 2* Math.PI* radius_arr;
// }


// const diameter= function(radius_arr){
//     return 2*radius_arr
// }

// const calculateArea= function(radius_arr, logic){
//  const output=[];
//     for(let i=0; i<radius_arr.length; i++){
//      output.push(logic(radius_arr[i]))
//     }
//     return output
// }

// console.log(calculateArea(radius_arr, area))
// console.log(calculateArea(radius_arr, circumtances))
// console.log(calculateArea(radius_arr, diameter))

  //map(): it is use to transform the array.
  //filter(): it is use filter any array.
  //reduce(): it is use to get single result value.

///polyfilli
//polyfills means create your own e.g bind function
// our own custom map()

// const radius_arr=[4,5,2,3]

// const area= function(radius_arr){
//     return Math.PI* radius_arr*radius_arr;
// }

// const circumtances= function(radius_arr){
//  return 2* Math.PI* radius_arr;
// }

// const diameter= function(radius_arr){
//     return 2*radius_arr
// }

// Array.prototype.calculateArea= function(logic){
//  const output=[];
//     for(let i=0; i<this.length; i++){
//      output.push(logic(this[i]))
//     }
//     return output
// }

// console.log(radius_arr.map(area));
// console.log(radius_arr.calculateArea(area))

////Map, filter and reduce
// map function is used to transform an array.
// map() examples: double , triple, and binary
// const arr=[2,4,7,11]
// function double(x){
//     return x*2;
// }

// function triple(x){  
//     return x*3;
// }
// const output= arr.map( (x)=>{
//     return x.toString(2);
// })
// console.log(output)

//filter function is use to filter an array

//e.g 1> 
// const output= arr.filter( (x)=>{
//     return x%2;
// })
//e.g 2> 
// const output= arr.filter( (x)=>{
//     return x>4;
// })
// console.log(output)

//reduce is used for getting like maximum, sum values
// use reduce when we have to reduce an array to an object.
//The reduce() method executes a reducer function for array element. 
//The reduce() method returns a single value: the function's accumulated result. 
//The reduce() method does not execute the function for empty array elements. 
//The reduce() method does not change the original array.

//without reduce
// function findSum(array){
//     let sum =0;
//     for(let i=0; i<array.length;i++){
//         sum= sum + array[i]
//     }
//     return sum;
// }

//1>
// const output= arr.reduce(function(accu, curr){
//     accu= accu+curr;
//     return accu;
// },0)
// console.log(output);

//2>
// const output= arr.reduce(function(max,curr){
// if(curr>max){
//     max=curr;
//     return max
// }
// },0)
// console.log(output);


///find out max number
 //const arr=[6,4,5,8,11,3];

// function max(){
//     let maxN=0;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>maxN){
//             maxN= arr[i];
//         }
//     }
//     return maxN;
// }

// const output= arr.reduce(function(max, curr){

//     if(curr>max){
//         max=curr;
//     }
// return max;
// }, 0);
// console.log(output)


// console.log(max());
// function findSum(arr){
// let sum=0;
//     for(let i=0; i<arr.length;i++){
//     sum=sum+arr[i];
//     }
// return sum;
// }

// console.log(findSum(arr));

// const output= arr.reduce(function(acc, curr){
// acc= acc+curr;
// return acc
// },0)
// console.log(findSum(arr));

///filter();

// function isOdd(x){
//     return x>5;
// }

// const output= arr.filter(isOdd);
// console.log(output)

////map()

// function double(x){
//     return x*2;
// }

// const output= arr.map(double);

// console.log(output)


///more examples on map , reduce and filter function

// const user=[{firsName: "Naiyer", secondName: "Kalum", age: 32},
// {firsName: "Khusbu", secondName: "Khatoon", age: 26},
// {firsName: "Nahida", secondName: "Parween", age: 26}];

//map example
// const output= user.map(x=> x.firsName+" "+ x.secondName)
//  console.log(output);

//reduce example
// const output= user.reduce((acc, curr)=>{

//     if(acc[curr.age]){

//         acc[curr.age]=++acc[curr.age]

//     }else{
//         acc[curr.age]=1
//     }

//     return acc;

// },{})

//filter and map example
//problem
//  const output= user.filter(x=>x.age<30).map(x=>x.firsName);
//  console.log(output);

//  const output= user.reduce((acc, curr)=>{
//     if(curr.age<30){
//         acc.push(curr.age);
//     }
// return acc;
//  },[])

//  console.log(output);

////call, apply and bind
// by using call we can borrow a function from another object.
//e.g
// let name1={
//     firsrName: "Naiyer",
//     lastName: "Kalim"
// }
// let name2={
//     firsrName: "Naira",
//     lastName: "Ashraf"
// }

// function getUserDetails(hometown, game){
// console.log(this.firsrName+" "+this.lastName+" from "+ hometown+" and I like to play "+ game)
// }

// const result=getUserDetails.bind(name1, "Hyderabad", "football")
// result();

// getUserDetails.call(name2, "Nirsa", "Bollyball")
// getUserDetails.apply(name2, ["Nirsa", "Bollyball"])


////polyfill in Js
//A polyfill is a browser fallback, made in JavaScript, 
//“A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, e
//expect the browser to provide natively. Flattening the API landscape if you will.”.

////Transpiling
//New JavaScript versions also bring syntaxial updates as well which is not possible to be polyfilled as it would simply not get executed and instead will throw syntax errors in old JavaScript engines, 
//this is where a transpiler comes into play. It has got its name from the union of two operation it performs Transformation + Compiling. 
//In continuation, we can now define a “Transpiler” to be a tool that transforms code with newer syntax into older code equivalents and this process is called “Transpiling”.


// let userName={
//     firstName: "Naiyer",
//     secondName: "Kalim"
// }

// let  getName= function(hometown, state, country){
//     console.log(this.firstName+" "+ this.secondName+" from "+ hometown + " "+state+" "+country)
// }

// let result=getName.bind(userName, "Nirsa", "Jharkhand" );
// result("India");


// Function.prototype.mybind= function(...args){
//    let obj= this;
//    params= args.slice(1)
//    return function(...args1){
//     obj.apply(args[0], [...params,...args1]);
//    }

// }
// let result1=getName.mybind(userName, "Nirsa", "Jharkhand");
// result1("India");


////Currying

//using bind()
// function multiply(x, y){
// return x*y
// }
// const res= multiply.bind(this, 2)
// console.log(res(2));

//using closures
// function multiply(x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let res= multiply(2)
// res(3);

// debouncing and throtling concepts are used for performance optimization, rate limiting of certain function call in webapp.
   //Debouncing is a technique that can be used to prevent a function from being called too often. 
   //This can be useful for improving the performance of an application by preventing unnecessary calls to the function.
     //uses of Debouncing: 
       //Typing in a search bar, Scrolling a page, Clicking a button, Making an API call, Updating the UI.
  //debouncing: in this call api if no any activity get triggered at that interval of time 
//Throttling: Throttling is a technique that can be used to limit the number of requests that an application makes to a resource.
  //Uses:
    //API calls, Database queries, File system operations, Network requests, CPU usage. in this call api in a spcific time interval.
//debouncing
// let count=0;
// const getData=()=>{
//     //calls an api and get data
//     console.log("fetching data... "+ count++)

// }
// const debounce= function(fn, d){
//     let timer;
// return function(){

//     let context= this
//     args= arguments
//     clearTimeout(timer)
//  timer= setTimeout(()=>{
// fn.apply(context, args)
// },d)
// }
// }
// const betterFunction= debounce(getData, 300)

// //Debouncing vs Throttling:
// //e.g: search for any keywords in ecommerce websites and
// // e.g shooting game
// // both are good and should be used as per different scensrios

// const loggerFunc = () => {
//     console.count("Throttled Function");
//   }
  
//   const throttle = (fn, limit) => {
//     let flag = true;
//     return function(){
//       let context = this;
//       let args = arguments;
//       if(flag){
//         fn.apply(context, args);
//         flag = false;
//         setTimeout(() => {
//           flag=true;
//         }, limit);
//       }
//     }
//   }
  
//   const betterLoggerFunction = throttle(loggerFunc, 1000);
  
//   window.addEventListener("resize",betterLoggerFunction);
  
//   // This is the normal Function without Throttling
//   //Check the console for the difference between the calls of Normal Function and the Throttled Function 
//   const normalFunc = () => {
//     console.count("Normal Function");
//   }
  
//   window.addEventListener("resize",normalFunc);

////async vs defer attributes in Javascript
//these are boolean attributes which is use along with script tag to load the external script efficiently into our web page
//while loading browser 2 things happens.
//1. html parsing and loading of the script
//Normal Script: html parsing is blocked during script fetching and executing.
//Async Script: html parsing is blocked only during executing the script.
//defer script: html parsing and fetching script runs parallel, script executes only when the the html parsing completed.

////Event Bubbling and Capturing:
  //these are two ways of event propagation into DOM tree
    //Event Bubbling: it propagates from child to parent
    //Capturing: it propagates from parent to child.
//these are the two ways of event propagation in the DOM tree.
//first capturing happens the bubbling

// document.querySelector("#grandParent")
// .addEventListener('click', ()=>{
//     console.log("GrandParent Clicked")
// },true)

// document.querySelector("#patent")
// .addEventListener('click', (e)=>{
//     console.log("parent Clicked")
//     e.stopPropagation();
// }, true)

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("child Clicked")
// },true)

////Event Delegation
//its a technique to handling event s in our page in a better way.
//it is based on event bubbling
///ADAVANTAGES:It saves lots of memory here by putting single addclicklistener into parent element.
//writing less code.
//Dom manupulation
///DISADVANTAGES: all elements are not bubbled up
//use either stoppropagation ot event delegation.
// document.querySelector("#category").addEventListener('click', (e)=>{
//     console.log(e.target.id);
// })

////Prototype and Prototypal Inheritance in Javascript 
// whenever we create any object in javascript, js engine automatically attaches some hidden features to your object.
//one object is trying access the methods and properties of another object is called prototypal inheritence.

// let object={
//     uName: "Naiyer",
//     lName: "Kalim",
//      getIntro: function(){
// console.log(this.uName+" "+ this.lName)
//      }
// }

// let object1={
//     uName: "Maqsood"
// }
// //neve try this
// object1.__proto__= object

// object1.getIntro();

/////Local Storage & Session Storage
//web storage api is is used by developer to store some data  into web browser. these data are nothing but key values pairs of strings.
//session storage: data is persistence only for particular session.
//local storage: data is persistence as long as user wish. 
//cookies have less memory and sent request/response over network calls.
//origin: <1>Protocol. <2>host. <3>port.
//Store data into local storage into the form of key:value pair
//for store and fetch data we use localStorage.setItem and localStorage.getItem.

//namastejs season 02.
//callback issue
//1.Callback Hell
//2.inversion of control: give a control your function to another function.

// data encapsulation

// function outer(){
//     let count=0
//     return function counter(){
//         count++
//         console.log(count)
//     }
// }
// const res= outer();
// res();

