
let jsonFile;
// Файл json;


$(document).ready(function () {
   $('.add').removeAttr('href');
   $('.add').on('mousedown', function () {
       return false;
   })
});
// удаляем атрибут href у кнопок на товары (лень вручную)
// и отменяем выделение (нет времен переделывать, изначально сделал неправильно)



$.ajax({
    type: 'GET',
    url: 'ajax/products.json',
    context: this,
    success: function (data) {
        jsonFile = data;
    }
});
// определяем jsonFile для дальнейшей работы с ним без повторных запросов

$('.add').on('click', function () {
    let itemId = $(this).attr('id');
    //Определение id
    jsonFile[itemId].quantity++;
    console.log(jsonFile);
    //Изменяем количество товара для пользователя
    renderCart();
    renderProducts();
    //Вызываем функцию добавление в массив товаров в карте (cart.js)
});

function renderCart() {
    $('.hidden-cart').empty();
    // Очистить содержимое контейнера
    cart.prodsArr = [];
    for (let i = 1; i <= 8; i++ ) {
        if (jsonFile[i].quantity > 0) {
            cart.prodsArr.push(jsonFile[i]);
        }
    }
    cart.totalPrice = refreshTotalPrice();

    // Обновление итоговой цены всех товаров
}

