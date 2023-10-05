const containerWelcome = document.querySelector('.container_welcome')
const containerQuestions = document.querySelector('.container_questions')
const startButton = document.querySelector('.start') 
const progressBarBg = document.querySelector('.progress-bar-bg') 
const progressBar = document.querySelector('.progress-bar') 
const checkingForm = document.getElementById('checking')

function welcomeTransition(){
    console.log("showing Checking")
    containerWelcome.style.transition = "opacity 0.5s, transform 0.5s"
    containerWelcome.style.opacity = "0"
    containerWelcome.style.transform = "translateY(-200px)"
    setTimeout(() => {
        containerWelcome.style.display = "none"
        containerQuestions.style.display = "flex"
        progressBarBg.style.opacity = "1"
        setTimeout(() => {
            progressBar.style.transform = "translateX(100px)"
            checkingForm.classList.add("active")
        }, 500);
    }, 1000);
}

startButton.addEventListener('click', welcomeTransition)

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        welcomeTransition()
    }
})


