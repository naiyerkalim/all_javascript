//Stack: Stacks in Data Structures is a linear type of data structure that follows the LIFO (Last-In-First-Out) principle 
//and allows insertion and deletion operations from one end of the stack data structure, that is top.
//e.g functions: push, pop, peek, length

//<1> Palindrom
//   var arr=[];//empty stack
//   var word="madam"
//   var rWord=""

//   //put letters into stack
//   for(var i=0; i<word.length; i++){
//     arr.push(word[i])
//   }

// //pop off the stack in reverse order

// for(var i=0; i<word.length; i++){
//     rWord += arr.pop();
    
// }
// if(word===rWord){
//     console.log(`${word} is a palindrom`)
// }else{
//     console.log(`${word} is not a palindrom`)
//}

// realTime problem
var Stack= function(){
    this.count=0;
    this.storage= {}
}

//Adds a value onto the end of the stack
this.push= function(value){
    this.storage[this.count]= value;
    this.count++;
}

//removes and returns the value at the end of the stack
this.pop = function(){
    if(this.count===0){
return undefined;
    }

    this.count--;
    var result= this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

this.size= function(){
    return this.count;
}

//returns the value at the end of the stack
this.peek= function(){
    return this.storage[this.count-1]
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());





//A set is a data structure that stores unique elements of the same type in a sorted order.