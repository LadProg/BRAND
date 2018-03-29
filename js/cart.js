'use strict';

let cart = {
    prodsArr: [],
    totalPrice: 0,
};

function refreshTotalPrice() {
    let x = 0;
    for (let i = 0; i < cart.prodsArr.length; i++) {
        x += cart.prodsArr[i].quantity * cart.prodsArr[i].price;
    }
    return x;
}
// Функция подсчета общей стоимости товаров в карте

function renderProducts() {

    $('.hidden-cart').empty();

    for (let i = 0; i < cart.prodsArr.length; i++) {
        if (cart.prodsArr[i].quantity > 0){
            let price = cart.prodsArr[i].price;
            let name = cart.prodsArr[i].title;
            let quantity = cart.prodsArr[i].quantity;
            let img = cart.prodsArr[i].image;
            let id =  cart.prodsArr[i].id;

            $('.hidden-cart').append(`
            <div class="cart-product-container" style="display: flex; padding: 10px 10px 30px; border-bottom: 1px solid #b9b9b9;">
                <div class="cart-product-img" style="padding-right: 5px">
                    <img src="${img}" width="75px" height="88px">
                </div>
                <div class="cart-product-info" style="display: flex; flex-direction: column; justify-content: space-around; width: 100px;">
                    <p class="name" style="font-size: 14px;">${name}</p>
                    <p class="raiting" style="font-size: 14px;"></p>
                    <p class="cost" style="font-size: 16px; color: #ef5b70;">
                    <span class="quantity">${quantity}</span> X <span class="prod-price">${price}</span>
                    </p>
                </div>
            </div>
            `)
        }
    }
    $('.hidden-cart').append(`<p class="total">total price: ${cart.totalPrice}</p>`);
}


//отрисовка товаров в корзину