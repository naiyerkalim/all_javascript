//Callbacks and Promises
//  register
//  sendEmail
//  login
//  getuserdata
//  showUserData

//"Producing Code" (May take some time)
  //resolve/reject

//"Consuming Code" (Must wait for a fulfilled Promise)
 //then/catch

function register(){
return new Promise((resolve, reject)=>{

    setTimeout(()=>{
        //console.log('Register end')
        resolve('register end')
        
    },2000)
})
    

}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('sendEmail end')
            resolve('sendEmail')
        },1000)
    })
    
   

}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('login end')
            resolve('login first')
        },100)
    })
   
    
}

function getuserdata(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('getuserdata end')
        resolve()
    },1000)
})
    
    
}

function displayUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('displayUserData end')
           resolve()
        },1000)
    })
   
}

// register()
// .then(sendEmail)
// .then(login)
// .then(getuserdata)
// .then(displayUserData)
// .catch((error)=>{
// console.log('Error: ', error)
// })


//callback hell
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getuserdata(function(){
//                 displayUserData()
//             })
            
//         })
       
//     })

// })

//Async/Await: it handle async task but runs as a synchronous

// async function authenticate(){
//     try {
//        const message= await register();
//     await sendEmail();
//     await login();
//     await getuserdata();
//     await displayUserData();
//     console.log(message)
//     } catch (error) {
//         console.log('Error:', error)
        
//     }

// }

// authenticate().then(()=>{
//     console.log('All set!')

// }).catch((err)=>{
// console.log('Error:', err)
// })


let data= Promise.race([register(), sendEmail(), login(),getuserdata(), displayUserData()])
data.then((item)=>{
console.log('Item:', item)
}).catch((err)=>{
    console.log('Error:', err)
})

