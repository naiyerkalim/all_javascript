////React Security, Scalability, Maintenance & Performance
///ease of use
// scalability
// easy maintenance
// shallow learning curve
// great performance
// security
///Rethinking best practices.

////Problem: 01
// var add=    "500"-"10"
// console.log(add);

////problem: 02
let a=1;
// for(a<5;a++;)
// {
    
// }
// console.log(a)

///

////problem 01: 
const person={
    name: "kalim",
    age: 30
};
///output:
// [
//     ["name", "kalim"],
//     ["age", 30]
// ]
//console.log(Object.entries(person));
const getObjectEntries=(person)=>{
    const objkey= Object.keys(person)
    console.log(objkey);

    const result= objkey.map((key)=>{
        console.log(key);
        const value= person[key]
        
        return[key, value]
    })
return result
}

const res= getObjectEntries(person)
console.log(res)

