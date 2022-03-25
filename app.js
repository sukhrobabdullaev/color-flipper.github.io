const colors=['green','red',"rgba(133,122,200)",'#f15025']

const btn=document.getElementById('btn');
const color=document.querySelector('.color');


document.addEventListener('DOMContentLoaded',()=>{

    btn.addEventListener('click',function() {
        // get random number between 0-3
        const randomNumber=getRandomNumber();
        console.log(randomNumber);
        document.body.style.backgroundColor=colors[randomNumber];
        color.textContent=colors[randomNumber];

    });

});
// slect from random number from colors array
function getRandomNumber(){
        return Math.floor(Math.random()*colors.length);

}
