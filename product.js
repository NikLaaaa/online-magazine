const nameOfProducts = ['Dunk', 'Air Vapormax', 'Blazer', 'Jordan 1 Retro Mid/High', 'Air Force', 'Jordan 1 Retro Low', 'Jordan 4 Retro'];
const pricesProduct = ['3000 грн', '4000 грн', '3900 грн', '3500 грн', '4200 грн', '4400 грн', '3700 грн'];
const sizesProduct = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];
const delivery = document.querySelector('.delivery')
const about = document.querySelector('.about')
const modalDeliveryClose = document.querySelector('.modal-delivery-close')
const modalAboutClose = document.querySelector('.modal-about-close')

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
