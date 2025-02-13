// arrays
const nameOfProducts = ['Dunk', 'Air Vapormax', 'Blazer', 'Jordan 1 Retro Mid/High', 'Air Force', 'Jordan 1 Retro Low', 'Jordan 4 Retro']
const pricesProduct = ['3000 грн', '4000 грн', '3900 грн', '3500грн', '4200 грн', '4400 грн', '3700 грн']
const sizesProduct = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
// variable
const CategoryOfShoes = document.querySelector(".CategoryOfShoes")

nameOfProducts.forEach(function (element, index) {
    CategoryOfShoes.innerHTML += `
        <div class="CategoryOfShoes-item">
            <img src="/src/img/product-${index + 1}.png" alt="" class="CategoryOfShoes-item-product">
            <p class="CategoryOfShoes-item-name">${element}</p>
            <p class="CategoryOfShoes-item-price">${pricesProduct[index]}</p>
        </div>
    `
})
// All Variables
const categoryVariables = {
    categoryModal: document.querySelector(".categoryModal"),
    categoryModalContentClose: document.querySelector(".categoryModal-content-close"),
    CategoryOfShoesItemBuy: document.querySelectorAll(".CategoryOfShoes-item"),
    categoryModalContentProduct: document.querySelector(".categoryModal-content-product"),
    categoryModalContentName: document.querySelector(".categoryModal-content-name"),
    categoryModalContentPrice: document.querySelector(".categoryModal-content-price"),
    shoeSize:document.getElementById("shoe-size")
}
categoryVariables.CategoryOfShoesItemBuy.forEach(function (element, index) {
    element.addEventListener('click', () => {
        categoryVariables.categoryModalContentName.textContent = element.children[1].textContent
        categoryVariables.categoryModalContentPrice.textContent = element.lastElementChild.textContent
        categoryVariables.categoryModalContentProduct.setAttribute('src', element.firstElementChild.getAttribute('src'))
        categoryVariables.categoryModal.style.display = 'flex'
    })
})
categoryVariables.categoryModalContentClose.addEventListener("click", () => {
    categoryVariables.categoryModal.style.display = "none"
})
sizesProduct.forEach(function (element, index) {
    const option = document.createElement("option")
    option.setAttribute("value", element)
    option.textContent = element
    categoryVariables.shoeSize.append(option)
})


const navBottomCenterSearch = document.querySelector(".nav-bottom-center-search")
const searchInfo = document.querySelector('.search-data')
const search = _.debounce(function (event) {
    
    searchInfo.classList.add('show-search-data')
    let searchData = navBottomCenterSearch.value
    nameOfProducts.forEach(function (element, index) {
        
        if(navBottomCenterSearch.value == ''){
            console.log(navBottomCenterSearch.value)
            searchInfo.innerHTML = ''
        }
        else if (element.startsWith(searchData)) {
            searchInfo.innerHTML += `
                <p class="search-propose"> ${element} </p>
                `
        }
    })
}, 1000);


navBottomCenterSearch.addEventListener('input', search)
const searchPropose = document.querySelector(".search-propose")

searchPropose.forEach(function(element,index){
element.addEventListener("click",()=>{
    searchInfo.classList.add('show-search-data')
    searchInfo.innerHTML = ''
        CategoryOfShoes.innerHTML += `
            <div class="CategoryOfShoes-item">
                <img src="/src/img/product-${index + 1}.png" alt="" class="CategoryOfShoes-item-product">
                <p class="CategoryOfShoes-item-name">${element}</p>
                <p class="CategoryOfShoes-item-price">${pricesProduct[index]}</p>
            </div>
        `
    })
})