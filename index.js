const translations = {
    ua: {
        callRequest: "Замовити дзвінок",
        workHours: "з 10:00 до 22:00 сім днів на тиждень",
        searchPlaceholder: "пошук",
        home: "Головна",
        allProducts: "Всі товари",
        about: "Про нас",
        delivery: "Доставка",
        aboutGuarantee: "💥 Гарантія якості, доступні ціни, швидка доставка!",
        aboutTitle: "Про нас",
        requestModal: {
            nameLabel: "Введіть ваше ім'я",
            phoneLabel: "Введіть ваш номер телефону",
            callText: "Ми вам зателефонуємо протягом цього дня",
            sendButton: "Залишити заявку"
        },
        footer: {
            author: "NikLaStore",
            rights: "© 2025 NikLaStore. Всі права захищені."
        },
        aboutDescription: `Магазин стильних кросівок Nike – це місце, де якість, комфорт і сучасний дизайн 
        поєднуються в ідеальній гармонії. Ми пропонуємо широкий вибір 
        оригінальних кросівок Nike для тих, хто цінує активний спосіб життя, стиль і надійність.`,
        aboutButton: "Замовити зараз",
        deliveryTitle: "🚚 Доставка",
        deliveryName: "📦 Самовивіз з Нової Пошти",
        paymentTitle: "💳Оплата",
        paymentOptions: [
            "✅Повна оплата на карту",
            "💰Оплата при отримані на Новій Пошті",
            "💳Передоплата на карту і доплата на пошті"
        ],
        nikeTitle: "Поринь у світ Nike, відкриваючи всю колекцію",
        catalogBtn: "Перейти до каталогу"
    },
    en: {
        callRequest: "Request a Call",
        workHours: "from 10:00 to 22:00 seven days a week",
        searchPlaceholder: "search",
        home: "Home",
        allProducts: "All Products",
        about: "About Us",
        delivery: "Delivery",
        aboutGuarantee: "💥 Quality guarantee, affordable prices, fast delivery!",
        aboutTitle: "About Us",
        requestModal: {
            nameLabel: "Enter your name",
            phoneLabel: "Enter your phone number",
            callText: "We will call you back during the day",
            sendButton: "Submit Request"
        },
        footer: {
            author: "NikLaStore",
            rights: "© 2025 NikLaStore. All rights reserved."
        },
        aboutDescription: `The Nike sneaker store is a place where quality, comfort, and modern design 
        come together in perfect harmony. We offer a wide selection of 
        original Nike sneakers for those who appreciate an active lifestyle, style, and reliability.`,
        aboutButton: "Order Now",
        deliveryTitle: "🚚 Delivery",
        deliveryName: "📦 Pickup from Nova Poshta",
        paymentTitle: "💳 Payment",
        paymentOptions: [
            "✅ Full payment to the card",
            "💰 Payment upon receipt at Nova Poshta",
            "💳 Prepayment to the card and additional payment at the post office"
        ],
        nikeTitle: "Plunge into the world of Nike by opening the entire collection",
        catalogBtn: "Go to catalog"
    }
};



const navItems = document.querySelectorAll(".nav-bottom-categories-item")

const en = document.querySelector(".en")
const ua = document.querySelector(".ua")








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
    navHidden.classList.remove("nav-active")
})
aboutIndex.addEventListener('click',()=>{
    showOrHiddenModal(aboutOverlay)
    navHidden.classList.remove("nav-active")
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
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // Когда пользователь нажимает на (x), закрываем модальное окно
// span.onclick = function() {
//   modal.style.display = "none";
// }

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// class="about-overlay + show-overlay"

const imgNikeTitle = document.querySelector(".img-nike-title")

const catalogBtn = document.querySelector(".catalogbtn")

const navTopDaysWork = document.querySelector(".nav-top-daysWork")

const aboutTitle = document.querySelector(".about-title")

const aboutDescription = document.querySelectorAll(".about-description")

const aboutGuarantee = document.querySelector('.about-guarantee')

const aboutButton = document.querySelector(".about-button")

const modalDeliveryTitle = document.querySelector(".modal-delivery-title")

const modalDeliveryNova = document.querySelector(".modal-delivery-nova")

const modalDeliveryPayment = document.querySelector(".modal-delivery-payment")



en.addEventListener("click",function(){
    navItems[0].textContent = translations.en.home
    navItems[1].textContent = translations.en.allProducts
    navItems[2].textContent = translations.en.about
    navItems[3].textContent = translations.en.delivery
    imgNikeTitle.textContent = translations.en.nikeTitle
    catalogBtn.textContent = translations.en.catalogBtn
    navTopCallRequest.textContent = translations.en.callRequest
    navTopDaysWork.textContent = translations.en.workHours
    aboutTitle.textContent = translations.en.aboutTitle
    aboutDescription[0].textContent = translations.en.aboutDescription
    aboutDescription[1].textContent = translations.en.aboutDescription
    aboutGuarantee.textContent = translations.en.aboutGuarantee
    aboutButton.textContent = translations.en.aboutButton
    modalDeliveryTitle.textContent = translations.en.deliveryTitle
    modalDeliveryNova.textContent = translations.en.deliveryName
    modalDeliveryPayment.textContent = translations.en.paymentTitle

    
})
ua.addEventListener("click",function(){
    navItems[0].textContent = translations.ua.home
    navItems[1].textContent = translations.ua.allProducts
    navItems[2].textContent = translations.ua.about
    navItems[3].textContent = translations.ua.delivery
    imgNikeTitle.textContent = translations.ua.nikeTitle
    catalogBtn.textContent = translations.ua.catalogBtn
    navTopCallRequest.textContent = translations.ua.callRequest
    navTopDaysWork.textContent = translations.ua.workHours
    aboutTitle.textContent = translations.ua.aboutTitle
    aboutDescription[0].textContent = translations.ua.aboutDescription
    aboutDescription[1].textContent = translations.ua.aboutDescription
    aboutGuarantee.textContent = translations.ua.aboutGuarantee
    aboutButton.textContent = translations.ua.aboutButton
    modalDeliveryTitle.textContent = translations.ua.deliveryTitle
    modalDeliveryNova.textContent = translations.ua.deliveryName


})