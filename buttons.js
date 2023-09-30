const buttonSelected = document.querySelectorAll(".optionBtn")

function pulse(event){
    const button = event.target 
    let pulseCount = 0
    let pulseInterval

    function pulseAnimation(){
        const opacity = parseFloat(button.style.opacity) || 1
        if(opacity === 1){
            button.style.opacity = 0.1
        }
        else {
            button.style.opacity = 1
        }

        pulseCount++
        if(pulseCount === 5){
            clearInterval(pulseInterval)
        }
    }

    pulseInterval = setInterval(pulseAnimation, 100)

    setTimeout(() => {
        clearInterval(pulseInterval)
        button.style.opacity = 1
        
        
    }, 1000);
}

buttonSelected.forEach((button) => {
    button.addEventListener('click', pulse)
})

const ButtonQ3Back = document.getElementById("q3-back")

ButtonQ3Back.addEventListener('click', questionForm3Back)

function questionForm3Back(){
    setTimeout(() => {
        questionForm3.classList.remove("on")
        setTimeout(() => {
            questionForm3.style.opacity = "0"
            setTimeout(() => {
                questionForm3.style.display = "none"
                progressBar.style.width = "40vw"
                questionForm2.style.display = "flex"
                setTimeout(() => {                     
                    questionForm2.classList.add("on")                  
                    questionForm3.classList.remove("active")         
                    questionForm2.style.opacity = "1"

                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}