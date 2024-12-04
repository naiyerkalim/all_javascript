



function waitforsevensecond(){
    let ms= 7000 + new Date().getTime();
     while(new Date()<ms){
        console.log('waiting...')
     }
}

setTimeout(()=>{
    console.log('from Timeout')
},2000)

waitforsevensecond()