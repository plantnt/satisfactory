const textarea = document.getElementById("waiterName")
const inputValue = textarea.value.trim()
const acceptBtn = document.getElementById("acceptBtn")
const employeeNames = [ 'Juan','Carlos','Ian','David' ]

function checkTextarea(){
    if(inputValue != ''){
        acceptBtn.disabled = false
        console.log(inputValue)
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