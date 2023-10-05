function preventEnter(event){
    if(event.keyCode === 13){
        event.preventDefault()
    }
}

const textAreaOfChecking = document.getElementById("codeValue")
const buttonOfCodeCheck = document.getElementById("checkingBtn")

textAreaOfChecking.addEventListener('input', checkTextareaA)    
checkTextareaA()

function checkTextareaA(){
    if(textAreaOfChecking.value.trim() != ''){
        buttonOfCodeCheck.disabled = false
        buttonOfCodeCheck.style.background = "var(--secondary)"
        buttonOfCodeCheck.style.cursor = "pointer"
    }
    else{
        buttonOfCodeCheck.disabled = true
        buttonOfCodeCheck.style.cursor = "not-allowed"
        buttonOfCodeCheck.style.background = "var(--hoverSecondary)"
    }
}


