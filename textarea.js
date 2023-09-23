const textarea = document.getElementById("waiterName")
const acceptBtn = document.getElementById("acceptBtn")

function checkTextarea(){
    if(textarea.value.trim() != ''){
        acceptBtn.disabled = false
        console.log("botondis")
        acceptBtn.style.background = "var(--secondary)"
        acceptBtn.style.cursor = "pointer"
    }
    else{
        acceptBtn.disabled = true
        acceptBtn.style.cursor = "not-allowed"
        acceptBtn.style.background = "var(--hoverSecondary)"
    }
}

textarea.addEventListener('input', checkTextarea)
checkTextarea()

acceptBtn.addEventListener('click', q2Transition)

function preventEnter(event){
    if(event.keyCode === 13){
        event.preventDefault()
    }
}