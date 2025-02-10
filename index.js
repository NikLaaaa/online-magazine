const delivery = document.querySelector('.delivery')
const about = document.querySelector('.about')
const deliveryOverlay = document.querySelector('.delivery-overlay')
const aboutOverlay = document.querySelector('.about-overlay')
const modalAboutClose = document.querySelector('.modal-about-close')
const modalDeliveryClose = document.querySelector('.modal-delivery-close')
const burger = document.querySelector(".burger")
const navHidden = document.querySelector(".nav-hidden")
const burgerLine = document.querySelectorAll(".burger-line")
let burgerCount = 1
burger.addEventListener("click",()=>{
    burgerCount ++
    navHidden.classList.toggle("nav-active")
    if(burgerCount%2==0){
        burgerLine[1].style.display = "none"
        burgerLine[0].style.rotate = "-45deg"
        burgerLine[2].style.rotate = "45deg"
        burgerLine[2].style.marginTop = "-12px"
    }
    else{
        burgerLine[1].style.display = "block"
        burgerLine[0].style.rotate = "0deg"
        burgerLine[2].style.rotate = "0deg"
        burgerLine[2].style.marginTop = "0px"
    }
})

function showOrHiddenModal(overlay){
    overlay.classList.toggle('show-overlay')
}
delivery.addEventListener('click',()=>{
    showOrHiddenModal(deliveryOverlay)
})
about.addEventListener('click',()=>{
    showOrHiddenModal(aboutOverlay)
})
modalDeliveryClose.addEventListener('click',()=>{
    showOrHiddenModal(deliveryOverlay)
})
modalAboutClose.addEventListener('click',()=>{
    showOrHiddenModal(aboutOverlay)
})
