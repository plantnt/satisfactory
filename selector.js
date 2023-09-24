const selectText = document.getElementById("selector-text")
const selectField = document.getElementById("selector-field")
const list = document.getElementById("list")

selectField.addEventListener('click', () => {
    console.log("clicked")
    list.style.display = "block"
    setTimeout(() => {
        list.style.opacity = "1"
        list.style.transform = "translateY(0)"
        list.style.transition = ".3s ease"
    },100)
    list.style.opacity = "1"
    list.style.transform = "translateY(-10px)" 
    

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
        q1Transition()
    }, 1500)

}

options.forEach((option) => {
    option.addEventListener('click', pulse)
})



const buttonsOfQ3 = document.querySelectorAll(".q3Btn")

buttonsOfQ3.forEach((button) => {
    button.addEventListener('click', q3Transition)
})

const buttonsOfQ4 = document.querySelectorAll(".q4Btn")

buttonsOfQ4.forEach((button) => {
    button.addEventListener('click', q4Transition)
})

const buttonsOfQ5 = document.querySelectorAll(".q5Btn")

buttonsOfQ5.forEach((button) => {
    button.addEventListener('click', q5Transition)
})

const buttonsOfQ6 = document.querySelectorAll(".q6Btn")

buttonsOfQ6.forEach((button) => {
    button.addEventListener('click', q6Transition)
})

const buttonsOfQ7 = document.querySelectorAll(".q7Btn")

buttonsOfQ7.forEach((button) => {
    button.addEventListener('click', q7Transition)
})

const buttonsOfQ8 = document.querySelectorAll(".q8Btn")

buttonsOfQ8.forEach((button) => {
    button.addEventListener('click', q8Transition)
})

const buttonsOfQ9 = document.querySelectorAll(".q9Btn")

buttonsOfQ9.forEach((button) => {
    button.addEventListener('click', q9Transition)
})



const questionForm1 = document.getElementById("q1")

function q1Transition(){
    console.log("iwork")
    questionForm1.style.transform = "translateY(-200px)"
    questionForm1.style.transition = ".3s ease"
    setTimeout(() => {
        questionForm1.style.opacity = "0"
        setTimeout(() => {
            questionForm1.style.display = "none"
            progressBar.style.width = "20vw"
            questionForm2.style.display = "flex"
            setTimeout(() => {
                questionForm2.classList.add("active")
            }, 1000);
        }, 200);
    },100)    
}

const questionForm2 = document.getElementById("q2")

function q2Transition(){
    setTimeout(() => {
        questionForm2.style.transform = "translateY(-200px)"
        questionForm2.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm2.style.opacity = "0"
            setTimeout(() => {
                questionForm2.style.display = "none"
                progressBar.style.width = "30vw"
                questionForm3.style.display = "flex"
                setTimeout(() => {
                    questionForm3.classList.add("active")
                }, 1000);
            }, 200);
        },100)  
    }, 1500);
        
}

const questionForm3 = document.getElementById("q3")

function q3Transition(){
    setTimeout(() => {
        questionForm3.style.transform = "translateY(-200px)"
        questionForm3.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm3.style.opacity = "0"
            setTimeout(() => {
                questionForm3.style.display = "none"
                progressBar.style.width = "40vw"
                questionForm4.style.display = "flex"
                setTimeout(() => {
                    questionForm4.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm4 = document.getElementById("q4")

function q4Transition(){
    setTimeout(() => {
        questionForm4.style.transform = "translateY(-200px)"
        questionForm4.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm4.style.opacity = "0"
            setTimeout(() => {
                questionForm4.style.display = "none"
                progressBar.style.width = "50vw"
                questionForm5.style.display = "flex"
                setTimeout(() => {
                    questionForm5.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm5 = document.getElementById("q5")

function q5Transition(){
    setTimeout(() => {
        questionForm5.style.transform = "translateY(-200px)"
        questionForm5.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm5.style.opacity = "0"
            setTimeout(() => {
                questionForm5.style.display = "none"
                progressBar.style.width = "60vw"
                questionForm6.style.display = "flex"
                setTimeout(() => {
                    questionForm6.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm6 = document.getElementById("q6")

function q6Transition(){
    setTimeout(() => {
        questionForm6.style.transform = "translateY(-200px)"
        questionForm6.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm6.style.opacity = "0"
            setTimeout(() => {
                questionForm6.style.display = "none"
                progressBar.style.width = "70vw"
                questionForm7.style.display = "flex"
                setTimeout(() => {
                    questionForm7.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm7 = document.getElementById("q7")

function q7Transition(){
    setTimeout(() => {
        questionForm7.style.transform = "translateY(-200px)"
        questionForm7.style.transition = ".3s ease"
        setTimeout(() =>{
            questionForm7.style.opacity = "0"
            setTimeout(() => {
                questionForm7.style.display = "none"
                progressBar.style.width = "80vw"
                questionForm8.style.display = "flex"
                setTimeout(() => {
                    questionForm8.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm8 = document.getElementById("q8")

function q8Transition(){
    setTimeout(() => {
        questionForm8.style.transform = "translateY(-200px)"
        questionForm8.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm8.style.opacity = "0"
            setTimeout(() => {
                questionForm8.style.display = "none"
                progressBar.style.width = "90vw"
                questionForm9.style.display = "flex"
                setTimeout(() => {
                    questionForm9.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm9 = document.getElementById("q9")

function q9Transition(){
    setTimeout(() => {
        questionForm9.style.transform = "translateY(-200px)"
        questionForm9.style.transition = ".3s ease"
        setTimeout(() => {
            questionForm9.style.opacity = "0"
            setTimeout(() => {
                questionForm9.style.display = "none"
                progressBar.style.width = "100vw"
                questionForm10.style.display = "flex"
                setTimeout(() => {
                    questionForm10.classList.add("active")
                }, 1000);

            }, 200);
        },100)  
    }, 1500);
}

const questionForm10 = document.getElementById("q10")