
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

const en = document.querySelector(".en")
const ua = document.querySelector(".ua")




const nameOfProducts = ['Dunk', 'Air Vapormax', 'Blazer', 'Jordan 1 Retro Mid/High', 'Air Force', 'Jordan 1 Retro Low', 'Jordan 4 Retro'];
const pricesProduct = ['3000 UAH', '4000 UAH', '3900 UAH', '3500 UAH', '4200 UAH', '4400 UAH', '3700 UAH'];
const sizesProduct = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];
const delivery = document.querySelector('.delivery')
const about = document.querySelector('.about')
const modalDeliveryClose = document.querySelector('.modal-delivery-close')
const modalAboutClose = document.querySelector('.modal-about-close')
// start modal func for hidden about and delivery
const aboutHidden = document.querySelector('.about-hidden')
const deliveryHidden = document.querySelector('.delivery-hidden')
const burgerProduct = document.querySelector(".burger-product")
const navHiddenProduct = document.querySelector(".nav-hidden-product")
const burgerLineHidden = document.querySelectorAll(".burger-line-hidden")

const productRequest = document.querySelector('.product-request')
const productRequestModal = document.querySelector('.product-request-modal')
const productRequestClose = document.querySelector(".product-request-close")
productRequestClose.addEventListener("click",function(){
    productRequestModal.style.scale = "0"
})
productRequest.addEventListener("click",function(){
    productRequestModal.style.scale = "1"
})
aboutHidden.addEventListener('click',function(){
    document.querySelector('.about-overlay').classList.add('show-overlay')
    navHiddenProduct.classList.remove("nav-active")
})
deliveryHidden.addEventListener('click',function(){
    document.querySelector('.delivery-overlay').classList.add('show-overlay')
    navHiddenProduct.classList.remove("nav-active")
})

about.addEventListener('click',function(){
    document.querySelector('.about-overlay').classList.add('show-overlay')
})
delivery.addEventListener('click',function(){
    document.querySelector('.delivery-overlay').classList.add('show-overlay')
})
modalDeliveryClose.addEventListener('click',function(){
    document.querySelector('.delivery-overlay').classList.remove('show-overlay')
})
modalAboutClose.addEventListener('click',function(){
    document.querySelector('.about-overlay').classList.remove('show-overlay')
})


const CategoryOfShoes = document.querySelector(".CategoryOfShoes");
const searchInfo = document.querySelector('.search-data');
const navBottomCenterSearch = document.querySelector(".nav-bottom-center-search");

navBottomCenterSearch.addEventListener('focus', ()=>{
    searchInfo.classList.add('show-search-data')
});
function renderProducts(products = nameOfProducts) {
    CategoryOfShoes.innerHTML = '';
    products.forEach((element, index) => {
        CategoryOfShoes.innerHTML += `
            <div class="CategoryOfShoes-item">
                <img src="/src/img/product-${index + 1}.png" alt="" class="CategoryOfShoes-item-product">
                <p class="CategoryOfShoes-item-name">${element}</p>
                <p class="CategoryOfShoes-item-price">${pricesProduct[index]}</p>
            </div>
        `;
    });
    addModalEventListeners(); 
}

renderProducts(); 
document.addEventListener('click', ()=>{
    searchInfo.classList.remove('show-search-data')
    if(navBottomCenterSearch.value == ''){
        renderProducts(); 
    }
});
const categoryVariables = {
    categoryModal: document.querySelector(".categoryModal"),
    categoryModalContentClose: document.querySelector(".categoryModal-content-close"),
    categoryModalContentProduct: document.querySelector(".categoryModal-content-product"),
    categoryModalContentName: document.querySelector(".categoryModal-content-name"),
    categoryModalContentPrice: document.querySelector(".categoryModal-content-price"),
    shoeSize: document.getElementById("shoe-size")
};

function addModalEventListeners() {
    const items = document.querySelectorAll(".CategoryOfShoes-item");
    items.forEach((element) => {
        element.addEventListener('click', () => {
            categoryVariables.categoryModalContentName.textContent = element.children[1].textContent;
            categoryVariables.categoryModalContentPrice.textContent = element.lastElementChild.textContent;
            categoryVariables.categoryModalContentProduct.setAttribute('src', element.firstElementChild.getAttribute('src'));
            categoryVariables.categoryModal.style.display = 'flex';
        });
    });
}

categoryVariables.categoryModalContentClose.addEventListener("click", () => {
    categoryVariables.categoryModal.style.display = "none";
});

sizesProduct.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value", element);
    option.textContent = element;
    categoryVariables.shoeSize.append(option);
});

const search = _.debounce(() => {
    searchInfo.classList.add('show-search-data');
    searchInfo.innerHTML = ''; 
    let searchData = navBottomCenterSearch.value.trim().toLowerCase();
    
    if (searchData === '') {
        renderProducts(); 

    }

    nameOfProducts.forEach((element, index) => {
        if (element.toLowerCase().startsWith(searchData)) {
            searchInfo.innerHTML += `<p class="search-propose">${element}</p>`;
        }
    });

    enterSearchData();
}, 1000);

navBottomCenterSearch.addEventListener('input', search);


function enterSearchData() {
    const searchPropose = document.querySelectorAll(".search-propose");
    searchPropose.forEach((element) => {
        element.addEventListener("click", () => {
            const productName = element.textContent.trim();
            const productIndex = nameOfProducts.indexOf(productName);
            
            if (productIndex !== -1) {
                CategoryOfShoes.innerHTML = `
                    <div class="CategoryOfShoes-item">
                        <img src="/src/img/product-${productIndex + 1}.png" alt="" class="CategoryOfShoes-item-product">
                        <p class="CategoryOfShoes-item-name">${productName}</p>
                        <p class="CategoryOfShoes-item-price">${pricesProduct[productIndex]}</p>
                    </div>
                `;
            }
            
            addModalEventListeners(); 
            searchInfo.innerHTML = ''; 
        });
    });
}

// burger 
let hiddenBurgerCount = 1
burgerProduct.addEventListener("click",()=>{
    hiddenBurgerCount ++
    navHiddenProduct.classList.toggle("nav-active")
    if(hiddenBurgerCount%2==0){
        burgerLineHidden[1].style.display = "none"
        burgerLineHidden[0].style.rotate = "-45deg"
        burgerLineHidden[2].style.rotate = "45deg"
        burgerLineHidden[2].style.marginTop = "-12px"
    }
    else{
        burgerLineHidden[1].style.display = "block"
        burgerLineHidden[0].style.rotate = "0deg"
        burgerLineHidden[2].style.rotate = "0deg"
        burgerLineHidden[2].style.marginTop = "0px"
    }
})

const navItems = document.querySelectorAll(".nav-bottom-categories-item")
const navTopCallRequest = document.querySelector(".nav-top-call-request")
const navTopDaysWork = document.querySelector(".nav-top-daysWork")

en.addEventListener("click", function () {
    navItems[0].textContent = translations.en.home;
    navItems[1].textContent = translations.en.allProducts;
    navItems[2].textContent = translations.en.about;
    navItems[3].textContent = translations.en.delivery;

    navTopCallRequest.textContent = translations.en.callRequest;
    navTopDaysWork.textContent = translations.en.workHours;
    document.querySelector(".footer-author").textContent = translations.en.footer.author;
    document.querySelector(".footer-police").textContent = translations.en.footer.rights;
    
    document.querySelector(".modal-delivery-title").textContent = translations.en.deliveryTitle;
    document.querySelector(".modal-delivery-nova").textContent = translations.en.deliveryName;
    document.querySelector(".modal-delivery-payment").textContent = translations.ua.paymentTitle;


});

ua.addEventListener("click", function () {
    navItems[0].textContent = translations.ua.home;
    navItems[1].textContent = translations.ua.allProducts;
    navItems[2].textContent = translations.ua.about;
    navItems[3].textContent = translations.ua.delivery;

    navTopCallRequest.textContent = translations.ua.callRequest;
    navTopDaysWork.textContent = translations.ua.workHours;

    document.querySelector(".footer-author").textContent = translations.ua.footer.author;
    document.querySelector(".footer-police").textContent = translations.ua.footer.rights;

    document.querySelector(".modal-delivery-title").textContent = translations.ua.deliveryTitle;
    document.querySelector(".modal-delivery-nova").textContent = translations.ua.deliveryName;
    document.querySelector(".modal-delivery-payment").textContent = translations.ua.paymentTitle;

});
