// 1. При отправке пользователем формы, в консоли отобразить "отправлено"
let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name ='product-name']") // находим  input  с именем product-name
let productPrice = document.querySelector("input[name='product-price']") //находим  input  с именем product-price
let productsWrapper = document.querySelector(".products-wrapper") // находим контейнер с продуктами

let products = [ // коллекция данных - products. продукты
    { // документ - одна единица коллекции. один продукт
        name: "Велосипед",
        price: 40000
    },

    {
        name: "Самокат",
        price: 15000
    },

    {
        name: "Лыжи",
        price: 20000
    },

    {
        name: "Сноуборд",
        price: 25000
    },
// el - один объект, один элемент массива
     
]
// Слушаем сабмит (отправку) формы 
form.addEventListener("submit", function(event) {
    event.preventDefault() // отмена действия по умолчанию
    // console.log(productName.value) //название элемента, который хочет добавить пользователь
    // console.log(productPrice.value) //цена элемента, которую хочет добать пользователь

    // Создаем объект с продуктом, который хочет добавить пользователь, на основе введенных данных

    let newProduct = {
        name: productName.value, //тест
        price: Number(productPrice.value) //25500 -string/строка -> 25000 число
    }
    // Добавляем объект Products
    products.push(newProduct)
    
    // Вызываем отрисовку продуктов с обноленным массивом
    renderProducts(products)
    onHover()
    clearInputs()
    
    // console.log(products)
    
    // console.log(event)
    // console.log("отправлено")
})

function clearInputs(){
    productName.value =''
    productPrice.value =''

}
// переменная видна только внутри блока кода, в котором она создана
// создать фунцию renderProducts(), которая принимает массив arr в аргументы
// функция должна для каждого элемента  массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойствами name и price
// forEach innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// ${name} ${price}
function renderProducts(arr) {
    productsWrapper.innerHTML = ''
    arr.forEach(function(el)  {
  productsWrapper.innerHTML += `
  <div class="product">
                <p class="product-name">${el.name}</p>
                <p class="product-price">${el.price}</p>
                <button class="delete-btn">X</button>
            </div> 
  `
            
    });
}
renderProducts(products) // immediately invoke

// Функция, которая позволяет отображать кнопку удаления
function onHover () {
    let product = document.querySelectorAll(".product")
    product.forEach(function(el) {
        el.addEventListener("mouseover", function() {
            el.querySelector(".delete-btn").style.display = "block"
        }) 
        el.addEventListener("mouseout", function() {
            el.querySelector(".delete-btn").style.display = "none"
        })            
    }) 
}
onHover()

function deleteOnHover() {
    let deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove()
        })
    })

}
deleteOnHover()

/*
1. Находим форму и вешаем на нее слушатель события
При любом событии создается объект события - event, внутри которого лежит информация об этом событии 
- кто вызвал событие, 
- какие компоненты участвуют, элементы формы со значениями и т.д.
Иногда нужно отменять действия по умолчанию при создании события с помощью event.preventDefault

 У input есть атрибут value, в котором храниться введенное значение

 Валидация - проверка на правильность введенных данных.
 Шаблон для input.
 */


