const bulb= document.getElementById('bulb')
const btn= document.getElementById('btn')

btn.addEventListener('click', function(){
    console.log(bulb.src)
   

    if(bulb.src.match('off')){
        bulb.src= './on_bulb.png'
    }else{
        bulb.src= './off_bulb.png'
    }
})