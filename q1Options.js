const locationSelected = document.getElementById("location-text")
const locationSelector = document.getElementById("location-field")
const listOfLocations = document.getElementById("list")
const listArrow = document.getElementById("colapser")

locationSelector.addEventListener('click', () => {       //MOSTRAR LAS OPCIONES PARA LA UBICACION
    console.log("clicked")
    listOfLocations.style.display = "grid"
    listArrow.src = "/img/arrw_D.png"
    setTimeout(() => {
        listOfLocations.style.opacity = "1"
        listOfLocations.style.transform = "translateY(0px)" 
        listOfLocations.style.transition = ".2s ease"
    },100)
})




const options = document.querySelectorAll(".options")       //ANIMACION DE PARPADEO PARA LAS OPCIONES

options.forEach((option) => {                               //ACTIVAR LA ANIMACIÓN DE PARPADEA + ACTIVAR TRANSISIÓN A LA PREGUNTA 2
    option.addEventListener('click', pulse)
})

function disableOptions(){
    options.forEach((option) => {
        option.disabled = true
    })
}

function pulse(event){
    const option = event.target
    let pulseCount = 0
    let pulseInterval
    disableOptions()
    
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
        setTimeout(() => {
            locationSelected.textContent = option.textContent;
            locationSelector.style.borderBottom = "1px solid var(--fontColor)"
            locationSelector.style.borderRadius = "5px"
            listOfLocations.style.display = "none"
            transitionToQ2()
        }, 300)
        
    }, 1000);

}

