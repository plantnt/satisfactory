
function checkTextarea2(){
    if(waiterTextarea.value.trim() != ''){
        ButtonOfWaiter.disabled = false
        console.log(waiterTextarea.value.trim())
        ButtonOfWaiter.style.background = "var(--secondary)"
        ButtonOfWaiter.style.cursor = "pointer"
    }
    else{
        ButtonOfWaiter.disabled = true
        ButtonOfWaiter.style.cursor = "not-allowed"
        ButtonOfWaiter.style.background = "var(--hoverSecondary)"
    }
}

waiterTextarea.addEventListener('input', checkTextarea2)
checkTextarea2()

ButtonOfWaiter.addEventListener('click', q2Transition)

function preventEnter(event){
    if(event.keyCode === 13){
        event.preventDefault()
    }
}
