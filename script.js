const nameOfProducts = ['Dunk','Air Vapormax','Blazer','Jordan 1 Retro Mid/High','Air Force','Jordan 1 Retro Low','Jordan 4 Retro']
const CategoryOfShoes = document.querySelector(".CategoryOfShoes")
const pricesProduct = ['3000 грн','4000 грн','3900 грн','3500грн','4200 грн','4400 грн','3700 грн']
nameOfProducts.forEach(function(element,index){
    CategoryOfShoes.innerHTML+=`
                <div class="CategoryOfShoes-item">
                    <img src="/src/img/product-${index+1}.png" alt="" class="CategoryOfShoes-item-product">
                    <p class="CategoryOfShoes-item-name">${element}</p>
                <p class="CategoryOfShoes-item-price">${pricesProduct[index]}</p>
                <button class="CategoryOfShoes-item-buy">Buy</button>
                </div>
    `
})