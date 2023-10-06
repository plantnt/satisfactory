const textAreaOfEnding = document.getElementById("codeValue")
const buttonOfEnding = document.getElementById("endingBtn")

textAreaOfEnding.addEventListener('input', checkTextareaC)    
checkTextareaC()

function checkTextareaC(){
    if(textAreaOfEnding.value.trim() != ''){
        buttonOfEnding.disabled = false
        buttonOfEnding.style.background = "var(--secondary)"
        buttonOfEnding.style.cursor = "pointer"
    }
    else{
        buttonOfEnding.disabled = true
        buttonOfEnding.style.cursor = "not-allowed"
        buttonOfEnding.style.background = "var(--hoverSecondary)"
    }
}

