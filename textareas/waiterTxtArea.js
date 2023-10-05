const textAreaOfWaiter = document.getElementById("waiterName")
const ButtonOfWaiter = document.getElementById("waiterBtn") 

textAreaOfWaiter.addEventListener('input', checkTextareaB)    
checkTextareaB()

function checkTextareaB(){
    if(textAreaOfWaiter.value.trim() != ''){
        ButtonOfWaiter.disabled = false
        ButtonOfWaiter.style.background = "var(--secondary)"
        ButtonOfWaiter.style.cursor = "pointer"
    }
    else{
        ButtonOfWaiter.disabled = true
        ButtonOfWaiter.style.cursor = "not-allowed"
        ButtonOfWaiter.style.background = "var(--hoverSecondary)"
    }
}