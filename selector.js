const selectText = document.getElementById("selector-text")
const selectField = document.getElementById("selector-field")
const list = document.getElementById("list")

selectField.addEventListener('click', () => {
    console.log("clicked")
    list.style.display = "block"
    
})

const options = document.querySelectorAll(".options")

function pulse(event){
    const option = event.target
    let pulseCount = 0
    let pulseInterval

    function pulseAnimation(){
        const opacity = parseFloat(option.style.opacity) || 1
        if(opacity === 1){
            option.style.opacity = 0.1
        }
        else {
            option.style.opacity = 1
        }

        pulseCount++
        if(pulseCount === 5){
            clearInterval(pulseInterval)
        }
    }

    pulseInterval = setInterval(pulseAnimation, 100)

    setTimeout(() => {
        clearInterval(pulseInterval)
        option.style.opacity = 1
        
        
    }, 1000);
    selectText.textContent = option.textContent;
    selectField.style.borderBottom = "1px solid #000"
    selectField.style.borderRadius = "0"
    setTimeout(() => {
        list.style.display = "none"
    }, 1000)

}

options.forEach((option) => {
    option.addEventListener('click', pulse)
})