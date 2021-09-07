const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const color = document.querySelector(".color");
const button = document.getElementById("btn");

button.addEventListener("click",() => {

    let colorChange = "#"
    let i = 0;
    while(i < 6){
        i++;
        colorChange += colors[getRandomNumber()];
    }
    
    document.body.style.backgroundColor = colorChange;
    color.textContent = colorChange;
})

function getRandomNumber(){
    return (Math.floor(Math.random() * colors.length)); 
}