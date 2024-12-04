
const button= document.getElementById('btn')
const root= document.getElementById('root')

btn.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then((data)=>{
        displayImage(data)
        
    })
})

function getItem(item){

//card
const container= document.createElement('div')
container.classList.add('card')

//image
const img= document.createElement('img')
img.src= item.thumbnailUrl; 

//title
const title= document.createElement('h4')
title.innerHTML=item.title

container.appendChild(img)
container.appendChild(title)
root.appendChild(container)
}

function displayImage(data){
data.forEach(item => {
    getItem(item)
});

}

