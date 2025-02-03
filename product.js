const nameOfProducts = ['Dunk','Air Vapormax','Blazer','Jordan 1 Retro Mid/High','Air Force','Jordan 1 Retro Low','Jordan 4 Retro']
const CategoryOfShoes = document.querySelector(".CategoryOfShoes")
const pricesProduct = ['3000 грн','4000 грн','3900 грн','3500грн','4200 грн','4400 грн','3700 грн']
const categoryModal = document.querySelector(".categoryModal")
const categoryModalContentClose = document.querySelector(".categoryModal-content-close")
nameOfProducts.forEach(function(element,index){
    CategoryOfShoes.innerHTML+=`
                <div class="CategoryOfShoes-item">
                    <img src="/src/img/product-${index+1}.png" alt="" class="CategoryOfShoes-item-product">
                    <p class="CategoryOfShoes-item-name">${element}</p>
                <p class="CategoryOfShoes-item-price">${pricesProduct[index]}</p>
                </div>
    `
})

const CategoryOfShoesItemBuy = document.querySelectorAll(".CategoryOfShoes-item")
const categoryModalContentProduct = document.querySelector(".categoryModal-content-product")
const categoryModalContentName = document.querySelector(".categoryModal-content-name")
const categoryModalContentPrice = document.querySelector(".categoryModal-content-price")

CategoryOfShoesItemBuy.forEach(function(element,index){
    element.addEventListener('click',()=>{
        categoryModalContentName.textContent = element.children[1].textContent
        categoryModalContentPrice.textContent = element.lastElementChild.textContent
        categoryModalContentProduct.setAttribute('src',element.firstElementChild.getAttribute('src'))
        categoryModal.style.display = 'flex'
    })
})
categoryModalContentClose.addEventListener("click",()=>{
    categoryModal.style.display = "none"
})

const sizesProduct = ["36","37","38","39","40","41","42","43","44","45"]
const shoeSize = document.getElementById("shoe-size")
sizesProduct.forEach(function(element,index){
    const option = document.createElement("option")
    option.setAttribute("value",element)
    option.textContent = element
    shoeSize.append(option)
})