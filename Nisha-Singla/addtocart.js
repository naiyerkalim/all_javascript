let products= document.getElementsByClassName('item');

let cartCounter= (function(){
        let count=0
        return{
            increment:()=> count+=1,
            decrement:()=> count-=1,
            totalCount:()=> count,
        }
})();

 function updateCount(){document.getElementById('count').innerHTML= cartCounter.totalCount();}
for(let i=0;i<products.length;i++){
    products[i].addEventListener('click', function(){
        console.log("clicked")
        if(this.className.indexOf('selected')<0){
            this.className+=' selected'
            cartCounter.increment();
            updateCount()
        }else{
            this.className= this.className.replace('selected', '');
            cartCounter.decrement();
            updateCount()
        }
    })
}