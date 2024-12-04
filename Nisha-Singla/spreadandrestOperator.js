//what is spread array
  //It expands the array into individual elements so that it can be used to expand the array 
// let user=['user1', 'user2']
// console.log(...user)

//1. Spread Operator with Arrays
     
        //   const team1=['user1', 'user2', 'user3']
        //   const team2=['user4','user5' ]
        //   const newTeam= [...team1, ...team2]
        //   console.log(newTeam)//when we have more than 2 array then use ...spread otherwise use cancatenate

        //copying array
      const productList1= ['phone', 'mobile']
      const newProduct= [...productList1]
      newProduct.push('tablet');
      console.log(productList1)
      console.log(newProduct)

//spread operator with objects
    //   const obj1= {name:'kalim', city: 'Hyderabad'}
    //   const obj2= {age:'30'}
    //   const newObj= {...obj1,...obj2}
    //   console.log(newObj)

//3.spread operator in functions call
    //   const sortlist= [100,50, 30, 20]
    //   console.log(Math.min(...sortlist));
    //   console.log(Math.max(...sortlist));

//4. immutability with spread operator
    //   const todo=[{task:'cooking', status:'done'},
    //               {task:'reading', status:'Not done'}]

    //               function adtodo(newtodo){
    //                 return[
    //                     ...todo,
    //                     {...newtodo}
    //                 ]
    //               }
    //               const newList= adtodo({
    //                 task: 'working', statu:'done'
    //               })
    //               console.log(todo)
    //               console.log(newList)
                  

//rest parameter
      //The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
        function sum(...values){
            let sum=0;
            values.map(s=>sum+=s)
            console.log(sum) 
        }
        sum(3,4,5,6,7,8,9);