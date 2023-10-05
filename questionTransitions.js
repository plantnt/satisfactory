const q1Form = document.getElementById("q1")

buttonOfCodeCheck.addEventListener('click', transitionToQ1)

function transitionToQ1(){
    console.log("showing Q1")
    setTimeout(() => {
        checkingForm.style.transition = ".3s ease"
        setTimeout(() => {
            checkingForm.style.opacity = "0"
            setTimeout(() => {
                checkingForm.style.display = "none"
                q1Form.style.display = "flex"
                setTimeout(() => {
                    q1Form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}


const q2Form = document.getElementById("q2")

function transitionToQ2(){
    console.log("showing Q2")
    setTimeout(() => {
        q1Form.style.transition = ".3s ease"
        setTimeout(() => {
            q1Form.style.opacity = "0"
            setTimeout(() => {
                q1Form.style.display = "none"
                q2Form.style.display = "flex"
                setTimeout(() => {
                    q2Form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}


const q3Form = document.getElementById("q3")

ButtonOfWaiter.addEventListener('click', transitionToQ3)

function transitionToQ3(){
    console.log("showing Q3")
    setTimeout(() => {
        q2Form.style.transition = ".3s ease"
        setTimeout(() => {
            q2Form.style.opacity = "0"
            setTimeout(() => {
                q2Form.style.display = "none"
                q3Form.style.display = "flex"
                setTimeout(() => {
                    q3Form.classList.add("active")
                }, 500);
            }, 500);
        }, 100);
    }, 1000);
}

const q4form = document.getElementById("q4")

const buttonsOfQ3 = document.querySelectorAll(".q3Btn")


buttonsOfQ3.forEach((button) => {
    button.addEventListener('click', transitionToQ4)
})

function transitionToQ4(){
    console.log("showing Q4")
    setTimeout(() => {
        q3Form.style.transition = ".3s ease"
        setTimeout(() => {
            q3Form.style.opacity = "0"
            setTimeout(() => {
                q3Form.style.display = "none"
                q4form.style.display = "flex"
                setTimeout(() => {
                    q4form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q5form = document.getElementById("q5")

const buttonsOfQ4 = document.querySelectorAll(".q4Btn")


buttonsOfQ4.forEach((button) => {
    button.addEventListener('click', transitionToQ5)
})

function transitionToQ5(){
    console.log("showing Q5")
    setTimeout(() => {
        q4form.style.transition = ".3s ease"
        setTimeout(() => {
            q4form.style.opacity = "0"
            setTimeout(() => {
                q4form.style.display = "none"
                q5form.style.display = "flex"
                setTimeout(() => {
                    q5form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q6form = document.getElementById("q6")

const buttonsOfQ5 = document.querySelectorAll(".q5Btn")


buttonsOfQ5.forEach((button) => {
    button.addEventListener('click', transitionToQ6)
})

function transitionToQ6(){
    console.log("showing Q6")
    setTimeout(() => {
        q5form.style.transition = ".3s ease"
        setTimeout(() => {
            q5form.style.opacity = "0"
            setTimeout(() => {
                q5form.style.display = "none"
                q6form.style.display = "flex"
                setTimeout(() => {
                    q6form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q7form = document.getElementById("q7")

const buttonsOfQ6 = document.querySelectorAll(".q6Btn")


buttonsOfQ5.forEach((button) => {
    button.addEventListener('click', transitionToQ7)
})

function transitionToQ7(){
    console.log("showing Q7")
    setTimeout(() => {
        q6form.style.transition = ".3s ease"
        setTimeout(() => {
            q6form.style.opacity = "0"
            setTimeout(() => {
                q6form.style.display = "none"
                q7form.style.display = "flex"
                setTimeout(() => {
                    q7form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q8form = document.getElementById("q8")

const buttonsOfQ7 = document.querySelectorAll(".q7Btn")


buttonsOfQ7.forEach((button) => {
    button.addEventListener('click', transitionToQ8)
})

function transitionToQ8(){
    console.log("showing Q8")
    setTimeout(() => {
        q7form.style.transition = ".3s ease"
        setTimeout(() => {
            q7form.style.opacity = "0"
            setTimeout(() => {
                q7form.style.display = "none"
                q8form.style.display = "flex"
                setTimeout(() => {
                    q8form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q9form = document.getElementById("q9")

const buttonsOfQ8 = document.querySelectorAll(".q8Btn")


buttonsOfQ8.forEach((button) => {
    button.addEventListener('click', transitionToQ9)
})

function transitionToQ9(){
    console.log("showing Q9")
    setTimeout(() => {
        q8form.style.transition = ".3s ease"
        setTimeout(() => {
            q8form.style.opacity = "0"
            setTimeout(() => {
                q8form.style.display = "none"
                q9form.style.display = "flex"
                setTimeout(() => {
                    q9form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}

const q10form = document.getElementById("q10")

const buttonsOfQ9 = document.querySelectorAll(".q9Btn")


buttonsOfQ9.forEach((button) => {
    button.addEventListener('click', transitionToQ10)
})

function transitionToQ10(){
    console.log("showing Q10")
    setTimeout(() => {
        q9form.style.transition = ".3s ease"
        setTimeout(() => {
            q9form.style.opacity = "0"
            setTimeout(() => {
                q9form.style.display = "none"
                q10form.style.display = "flex"
                setTimeout(() => {
                    q10form.classList.add("active")
                }, 100);
            }, 500);
        }, 100);
    }, 1000);
}