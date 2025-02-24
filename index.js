const delivery = document.querySelector('.delivery')
const about = document.querySelector('.about')
const modalAboutClose = document.querySelector('.modal-about-close')
const modalDeliveryClose = document.querySelector('.modal-delivery-close')


const deliveryIndex = document.querySelector('.delivery-index')
const aboutIndex = document.querySelector('.about-index')
const closeIndexAbout = document.querySelector('.close-index-about')
const closeIndexDelivery = document.querySelector('.close-index-delivery')

const deliveryOverlay = document.querySelector('.delivery-overlay')
const aboutOverlay = document.querySelector('.about-overlay')
const burger = document.querySelector(".burger")
const navHidden = document.querySelector(".nav-hidden")
const burgerLine = document.querySelectorAll(".burger-line")
const requestModal = document.querySelector(".Request-modal")
const navTopCallRequest = document.querySelector(".nav-top-call-request")
const RequestModalClose = document.querySelector(".Request-modal-close")

// start block modal

const descAboutClose = document.querySelector(".desc-about-close")
const descAboutOverlay = document.querySelector(".desc-about-overlay")

const descDeliveryClose = document.querySelector(".desc-delivery-close")
const descDeliveryOverlay = document.querySelector(".desc-delivery-overlay")


//end block modal
descAboutClose.addEventListener("click",function(){
    descAboutOverlay.classList.remove("show-overlay")
})
//end block modal
descDeliveryClose.addEventListener("click",function(){
    descDeliveryOverlay.classList.remove("show-overlay")
})
navTopCallRequest.addEventListener("click",function(){
    requestModal.style.scale = "1"
})
RequestModalClose.addEventListener("click",function(){
    requestModal.style.scale = "0"
})
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
    deliveryOverlay.classList.add('show-overlayd')
})
modalAboutClose.addEventListener('click',()=>{
    aboutOverlay.classList.add('show-overlayd')
})
// /////////////
deliveryIndex.addEventListener('click',()=>{
    showOrHiddenModal(deliveryOverlay)
})
aboutIndex.addEventListener('click',()=>{
    showOrHiddenModal(aboutOverlay)
})
closeIndexDelivery.addEventListener('click',()=>{
    deliveryOverlay.classList.add('show-overlayd')
})
closeIndexAbout.addEventListener('click',()=>{
    aboutOverlay.classList.add('show-overlayd')
})

////////////////

var modal = document.getElementById("CallRequestModal");
var btn = document.getElementById("callRequestBtn");
var span = document.getElementsByClassName("modal-call-request close")[0];

// Когда пользователь нажимает на кнопку, показываем модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на (x), закрываем модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// class="about-overlay + show-overlay"