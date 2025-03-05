const translations = {
    ua: {
        callRequest: "Замовити дзвінок",
        workHours: "з 10:00 до 22:00 сім днів на тиждень",
        searchPlaceholder: "пошук",
        home: "Головна",
        allProducts: "Всі товари",
        about: "Про нас",
        delivery: "Доставка",
        aboutTitle: "Про нас",
        aboutDescription: `Магазин стильних кросівок Nike – це місце, де якість, комфорт і сучасний дизайн 
        поєднуються в ідеальній гармонії. Ми пропонуємо широкий вибір 
        оригінальних кросівок Nike для тих, хто цінує активний спосіб життя, стиль і надійність.`,
        aboutDescription2: `У нас ви знайдете як класичні моделі, що стали легендами, так і найновіші колекції, які підкорюють світ моди та спорту.`,
        aboutButton: "Замовити зараз",
        deliveryTitle: "🚚 Доставка",
        deliveryName: "📦 Самовивіз з Нової Пошти",
        deliveryPayment: "💳 Оплата",
        paymentOptions: [
            "✅ Повна оплата на карту",
            "💰 Оплата при отриманні на Новій Пошті",
            "💳 Передоплата на карту і доплата на пошті"
        ],
        nikeTitle: "Поринь у світ Nike, відкриваючи всю колекцію",
        catalogBtn: "Перейти до каталогу",
        sizeSelectorTitle: "Виберіть розмір кросівок"
    },
    en: {
        callRequest: "Request a Call",
        workHours: "from 10:00 to 22:00 seven days a week",
        searchPlaceholder: "search",
        home: "Home",
        allProducts: "All Products",
        about: "About Us",
        delivery: "Delivery",
        aboutTitle: "About Us",
        aboutDescription: `The Nike sneaker store is a place where quality, comfort, and modern design 
        come together in perfect harmony. We offer a wide selection of 
        original Nike sneakers for those who appreciate an active lifestyle, style, and reliability.`,
        aboutDescription2: `Here you will find both classic models that have become legends, as well as the latest collections that are conquering the world of fashion and sports.`,
        aboutButton: "Order Now",
        deliveryTitle: "🚚 Delivery",
        deliveryName: "📦 Pickup from Nova Poshta",
        deliveryPayment: "💳 Payment",
        paymentOptions: [
            "✅ Full payment to the card",
            "💰 Payment upon receipt at Nova Poshta",
            "💳 Prepayment to the card and additional payment at the post office"
        ],
        nikeTitle: "Plunge into the world of Nike by opening the entire collection",
        catalogBtn: "Go to catalog",
        sizeSelectorTitle: "Select size of sneakers"
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

navBottomCenterSearch.addEventListener('focus', ()=> {
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
document.addEventListener('click', ()=> {
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
burgerProduct.addEventListener("click",()=> {
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



const navItems = document.querySelectorAll(".nav-bottom-categories-item");
const navTopCallRequest = document.querySelector(".nav-top-call-request");
const navTopDaysWork = document.querySelector(".nav-top-daysWork");
const searchInput = document.querySelector(".nav-bottom-center-search");
const aboutTitle = document.querySelector(".about-title");
const aboutDescription = document.querySelectorAll(".about-description");
const aboutDescription2 = document.querySelectorAll(".about-description2");
const aboutButton = document.querySelector(".about-button");
const aboutGuarantee = document.querySelector(".about-guarantee");
const deliveryTitle = document.querySelector(".modal-delivery-title");
const deliveryName = document.querySelectorAll(".modal-delivery-name");
const deliveryList = document.querySelector(".modal-delivery-list");
const paymentOptions = document.querySelectorAll(".modal-delivery-name");
const nikeTitle = document.querySelector(".nike-title");
const catalogBtn = document.querySelector(".catalog-btn");
const sizeSelectorTitle = document.querySelector(".shoe-size");

en.addEventListener("click", function () {
    navItems[0].textContent = translations.en.home;
    navItems[1].textContent = translations.en.allProducts;
    navItems[2].textContent = translations.en.about;
    navItems[3].textContent = translations.en.delivery;

    navTopCallRequest.textContent = translations.en.callRequest;
    navTopDaysWork.textContent = translations.en.workHours;
    searchInput.placeholder = translations.en.searchPlaceholder;

    aboutTitle.textContent = translations.en.aboutTitle;
    aboutDescription[0].textContent = translations.en.aboutDescription;
    aboutDescription2[0].textContent = translations.en.aboutDescription2;
    aboutButton.textContent = translations.en.aboutButton;

    aboutGuarantee.textContent = translations.en.aboutGuarantee;

    deliveryTitle.textContent = translations.en.deliveryTitle;
    deliveryName[0].textContent = translations.en.deliveryName;
    deliveryList.textContent = translations.en.deliveryPayment;
    paymentOptions[0].textContent = translations.en.paymentOptions[0];
    paymentOptions[1].textContent = translations.en.paymentOptions[1];
    paymentOptions[2].textContent = translations.en.paymentOptions[2];

    nikeTitle.textContent = translations.en.nikeTitle;
    catalogBtn.textContent = translations.en.catalogBtn;
    sizeSelectorTitle.textContent = translations.en.sizeSelectorTitle;
});

ua.addEventListener("click", function () {
    navItems[0].textContent = translations.ua.home;
    navItems[1].textContent = translations.ua.allProducts;
    navItems[2].textContent = translations.ua.about;
    navItems[3].textContent = translations.ua.delivery;

    navTopCallRequest.textContent = translations.ua.callRequest;
    navTopDaysWork.textContent = translations.ua.workHours;
    searchInput.placeholder = translations.ua.searchPlaceholder;

    aboutTitle.textContent = translations.ua.aboutTitle;
    aboutDescription[0].textContent = translations.ua.aboutDescription;
    aboutDescription2[0].textContent = translations.ua.aboutDescription2;
    aboutButton.textContent = translations.ua.aboutButton;

    aboutGuarantee.textContent = translations.ua.aboutGuarantee;

    deliveryTitle.textContent = translations.ua.deliveryTitle;
    deliveryName[0].textContent = translations.ua.deliveryName;
    deliveryList.textContent = translations.ua.deliveryPayment;
    paymentOptions[0].textContent = translations.ua.paymentOptions[0];
    paymentOptions[1].textContent = translations.ua.paymentOptions[1];
    paymentOptions[2].textContent = translations.ua.paymentOptions[2];

    nikeTitle.textContent = translations.ua.nikeTitle;
    catalogBtn.textContent = translations.ua.catalogBtn;
    sizeSelectorTitle.textContent = translations.ua.sizeSelectorTitle;
});

en.addEventListener("click", () => updateText("en"));
ua.addEventListener("click", () => updateText("ua"));