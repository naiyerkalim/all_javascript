//timeouts with var 
// function x(){
//     for(var i=1; i<=5;i++){
//         function close(s){
//             setTimeout(function(){
//                 console.log(s)
//                 },i*1000);
//         }
// close(i)
//     }

    
// }
// x()

// timeouts with let

// function x(){
//     for(let i=1; i<=5;i++){
        
//             setTimeout(function(){
//                 console.log(i)
//                 },i*1000);
//     }
// }
// x()
//Closures

// let c=6;
// function outest(b){
//     var d=7;
//     function outer(){
//         let a=10
//         function inner(){
//             console.log(a, b,c, d)
//         }
//         inner()
//     }
//     outer()
// }
// outest("kalim")

//Data hiding and encapsulation
// function counter(){
// var a=0;
// return function increament(){
//     a++;
//     console.log(a)
// }
// }

// var count = counter()
// count()

//make scalable

// function counter(){
//     var a=0;
//     this.increment=  function(){
//         a++;
//         console.log(a)
//     }
//     this.decrement=  function (){
//         a--;
//         console.log(a) 
//     }
//     }
    
//     var count = new counter()
//     count.increment();
//     count.decrement();

///scope demo with addlistener by Namaste Javascript.
function callClicklistener(){
    let count=0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
 
 console.log("button Clicked: ", count++);
    })
}

callClicklistener();

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
// class Rating extends React.Component {
//     render() {
//       return null;
//     }
//   }
  
//   document.body.innerHTML = "<div id='root'> </div>";
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<Rating />, rootElement);
  
//   document.querySelectorAll("span")[2].click();
//   console.log(document.getElementById("rating").outerHTML);




