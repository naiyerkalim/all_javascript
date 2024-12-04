//var: function scope
//let and const: block scope

1.//Primitive datatypes
  //Number: let age= 25
         // let temp= -25
         // let price= 56.09
  //String: 'Kabir'
  //Boolean: true/false
  //undefined: let age;
         //console.log(age)//undefined.

  //BigInt: 
  //Symbol// unique.

2. //Structural Type
  //Object
  //1.1 Function
    //Non Data Structure
  //1.2 Arrays
  //1.3 Maps
  //1.4 Set
  //1.5 Date

3. //Structural Root
     //null

//Operators
  //1. Assignment operator:
      //let a=10;
      //let b;
      //b=a//console.log('b')
  //2. compound operatrs
      //let x=10;
      //let y=20;
      //x += y//30;
  //3. Logical Operator
  //4. Arithmatic Operator

  //operator precedence


//DOM: Documment -Object-Model
//4 major ways to get DOM elemnet
//1.getElementById
// const element= document.getElementById('header')
// console.log(element)

//2.getElementsById
//it returns Html Collections
// const heading= document.getElementsByTagName('h1')
// console.log(heading)

//3.getElementByClass
//it also returns collections
// const heading= document.getElementsByClassName('header')
// console.log(heading);

//4.querySelector//Important
//we can use it like css selector
//this one recommended method
//const heading= document.querySelector('#header')
// const heading= document.querySelector('.header')
// console.log(heading)

//5.querySelectorAll
// const heading = document.querySelectorAll("#header");
// console.log(heading);

///Traversal DOM
//1. parentNode
// const child = document.querySelector(".header");
// const parent = child.parentNode;
// console.log(parent);

//2. childNode
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

//3. nextElementSiblings//Important
// const elSibling = document.querySelector(".header");
// console.log(elSibling.nextElementSibling);

//3. previousElementSiblings
// const elSibling = document.querySelector("h2");
// console.log(elSibling.previousElementSibling);

//VVVVIP Manipilation
//3. nextElementSiblings
//const headings = document.querySelector(".header");
// headings.innerHTML = "Web Development is Awesome";
// headings.style.color = "red";
// headings.style.fontSize = "50px";
// headings.classList.add("ttttt");
// headings.classList.remove("headers");

//Advance DOM manipulation
// const heading = document.createElement("h1");
// heading.innerHTML = "Javascript is Awesome!";
// heading.classList.add("title");
// const parentDiv = document.querySelector(".parent");
// parentDiv.appendChild(heading);
// console.log(heading);

// const subheading = document.createElement("h2");
// subheading.innerHTML = "React is Awesome!";
// heading.insertAdjacentElement('afterend',subheading);

//DOM events
// const btn = document.querySelector("#btn");
// const heading = document.querySelector("#heading");

// btn.addEventListener("click", function () {
//   heading.style.color = "green";
//   heading.style.fontSize = "50px";
// });



///DataTypes
//javascript is a dynamic-typed language

// let age=25
// age= 'twentyfive'
// console.console(age)//twentyfive

// primitive Data types
   //in primitive data types we can store only single value
   //Number
//    let num=25
//    let dec=2.5
//    let neg_num= -25

   //2. String
   //let x= 'ok'

   //3.Boolean
   //true/false
   //let isLoggin=true

   //4.BigInt
     //if you wanted to calculate beyond safe number
   
   //5.Symbol
      //unique


      //Structural Type
        //objects

//Operators
//1. Assignment Operator
// let x=10
// let y
// y=x
// console.log(y)//10

//2. compound operators
// let x= 20;
// let y= 10;
// x=x+y;//30
// x+=y//30
// x-=y//10
// x/=y//2
// x*=y//200

//Arithmatic Operator
// +
// -
// /
// *
// ++

//Logical Operator
// logical AND &&
// logical OR ||
// logical NOT !

//conditional operator
  //condtion?'':''

//comparision operator
// equal(==)
// not equal(!=)
// Strict equal(===)
// strict not equal(!==)
// greater than (>)
// less than (<)

//precedence: priority of operators to executes in code.






