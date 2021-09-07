let count = 0;

const counterDisplay = document.getElementById("counterDisplay");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((item) => {
    item.addEventListener("click", function(e){
        const value = e.currentTarget.classList;

        if(value.contains("decrease"))
        {
            count--;
        }
        else if(value.contains("increase"))
        {
            count++;
        }
        else
        {
            count = 0;
        }

        counterDisplay.textContent = count;
    })
})
