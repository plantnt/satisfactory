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