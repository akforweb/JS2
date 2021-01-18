class Product {
    constructor(product, img = 'https://placehold.it/150x100') {
        let { title = 'Товар', price = 0, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        // this.calcPrice();
        this._fetchData();
        this._render();
    }

    calcPrice() {
        let total = 0;
        this.products.map((product) => {
            console.log(total = total + product.price);
        })
        // for (let product of this.products) 
        // let sum = 0;
        // this.products.forEach.call(items, function (product) {
        // sum += product.price;
        // });
        // как получить все цены я разобралась, а дальше что-то не понимаю как их сложить

    }

    _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Keyboard', price: 200 },
            { id: 3, title: 'Mouse', price: 100 },
            { id: 4, title: 'Gamepad' },
        ];
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const list = new ProductsList().calcPrice();

class Cart {
    constructor(product) {
        // сюда будет попадать продукт
    }

    // createCartElem - метод будет создавать новый класс, в который будет копировать Product добавляя к нему метод удалить из корзины

    // calcPrice - метод будет считать стоимость всех товаров в корзине

    // showPrice - метод будет показывать стоимость всех товаров в корзине рядом с кнопкой Корзина, когда она закрыта

    // clearCart - метод будет очищать корзину

    // openCart/closeCart - в методы будут добавлены слушатели событий для нажатия на кнопку Корзина, чтобы открывать ее и закрывать
}

class CartElem extends Product {
    constructor(product) {
        super(product);
    }
    // remove() метод будет реагировать на нажатие кнопки удалить и будет удалять товар из корзины
}