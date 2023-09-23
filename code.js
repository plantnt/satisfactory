const containerWelcome = document.querySelector('.container_welcome')
const containerQuestions = document.querySelector('.container_questions')
const startButton = document.querySelector('.start') 
const progressBar = document.querySelector('.progress-bar-bg') 

startButton.addEventListener('click', () => {
    containerWelcome.style.transition = "opacity 0.5s, transform 0.5s"
    containerWelcome.style.opacity = "0"
    containerWelcome.style.transform = "translateY(-200px)"
    setTimeout(() => {
        containerWelcome.style.display = "none"
        containerQuestions.style.display = "flex"
        progressBar.style.display = "flex"
    }, 500);
})
