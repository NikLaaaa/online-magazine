const delivery = document.querySelector('.delivery')
const about = document.querySelector('.about')
const deliveryOverlay = document.querySelector('.delivery-overlay')
const aboutOverlay = document.querySelector('.about-overlay')
const modalAboutClose = document.querySelector('.modal-about-close')
const modalDeliveryClose = document.querySelector('.modal-delivery-close')


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
