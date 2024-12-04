//primitive type=>immutable: string, Number, Boolean, symbol, undefined, null.
// //reference types=> mutable: objects, arrays
let x=20
let y=x
 
y=y+1
console.log(`X: ${x} and Y:${y}`)//20,21 because x, and y share diff memory.


//arrays and objects
// let a=['v1','v2']
// let b=[...a]//this give new memory location to b
// b.pop()
// console.log(`A: ${a} and B:${b}`)//both have same element V1

let a= {
    name:'user1',
    addres:'hyderabad'
}
let b={...a}//this will take separate memory.
b.age=30;
console.log(a)//both share come changes
console.log(b)

//we can achieve it by using spread opearator.



