const codeTextarea = document.getElementById("codeValue")
const buttonOfCodeCheck = document.getElementById("checkingBtn")

function checkTextarea1(){
    if(codeTextarea.value.trim() != ''){
        buttonOfCodeCheck.disabled = false
        console.log(codeTextarea.value.trim())
        buttonOfCodeCheck.style.background = "var(--secondary)"
        buttonOfCodeCheck.style.cursor = "pointer"
    }
    else{
        buttonOfCodeCheck.disabled = true
        buttonOfCodeCheck.style.cursor = "not-allowed"
        buttonOfCodeCheck.style.background = "var(--hoverSecondary)"
    }
}

codeTextarea.addEventListener('input', checkTextarea1)
checkTextarea1()

buttonOfCodeCheck.addEventListener('click', locationTransition)

function preventEnter(event){
    if(event.keyCode === 13){
        event.preventDefault()
    }
}

const waiterTextarea = document.getElementById("waiterName")
const ButtonOfWaiter = document.getElementById("waiterBtn")

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
