//Arrays and loops
const arr=['javascript', 'java', 'css','html']
// console.log(arr.length)//4
// console.log(arr[2])//css
arr.push('c')//it will add element in last
// arr.unshift('Dart')//it will add element at first
// console.log(arr)//"Dart", "javascript", "java", "css", "html", "c"
// arr.pop()//it will remove last item
console.log(arr)//"Dart", "javascript", "java", "css", "html"
// arr.shift()//it will remove first item

//loop
// const obj=[
//     {
//         name:'kalim',
//         salary:10000
//     },
//     {name:'Wazeer',
//     salary:1000000},
//     {
//         name:'Noushad',
//         salary:100000
//     }]
// // obj.forEach((element)=>{
// //     element.salary=element.salary-100
// // console.log(element)
// // })

// for(items of obj){
//     console.log(items)
// }



//filter example
// const students=[
//     {
//         name:'student01',
//         score:80
//     },
//     {name:'student02',
//     score:40},
//     {
//         name:'student03',
//         score:20
//     }]

//     const result= students.filter((student)=>student.score<45)
//     console.log(result)


//map
// const users=[
//     {
//         firsname:'Naiyer',
//         lastname:'kalim'
//     },
//     {firsname:'Wazeer',
//     lastname:'Ansari'},
//     {
//         firsname:'Noushad',
//         lastname:'Kalim'
//     }]

//     const result= users.map((user)=>{
//         return{
//             UserName: `${user.firsname} ${user.lastname}`
//         }
//     })

//     console.log(result)


//reduce
// const movies=[
//     {
//         movie:'Avatar 2',
//         budget:140
//     },
//     {movie:'KFG 3',
//     budget:260},
//     {
//         movie:'Pushpa 2',
//         budget:100
//     }]

//     const result= movies.reduce((acc, curr)=>{

// return acc+=curr.budget
//     },0)

//     console.log(result)


//indexof
//  const admins= [2,5,7,1]
// const user= {
//     name:'kalim',
//     index:7
// }
// const isAdmin= admins.indexOf(user.index)>-1 
// console.log(isAdmin)//true

//includes
//console.log(admins.includes(user.index))

//find
// const users=[{
//     name:'abc',
//     id:1
// },
// {
//     name:'pqr',
//     id:2
// },
// {name:'xyz',
// id:3}]

// const result=users.find((user)=>{
//     return user.id==3
// })
// console.log(result)//{ name: "xyz", id: 3 }

//splice
// const users=['ram','rahim','kalim','salim', 'akram', 'shankar']
// users.sort()
// console.log(users)// "akram", "kalim", "rahim", "ram", "salim", "shankar" ]
// users.splice(2,1)//
// console.log(users)//[ "akram", "kalim", "ram", "salim", "shankar" ]