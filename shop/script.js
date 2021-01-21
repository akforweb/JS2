
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Если честно, я не совсем понимаю зачем нужен этот кусок кода. Я проверила, когда убрала его, скрипт все равно работал точно также. Или я что-то неправильно тут сделала? 
let getData = (url) => {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve();
        } else {
            reject('error')
        }
    })
};

class Product {
    constructor(product, img = 'https://placehold.it/150x100') {
        let { product_name = 'Товар', price = 0, id_product } = product;
        this.title = product_name;
        this.img = img;
        this.price = price;
        this.id = id_product;
        this.rendered = false
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn"  data-id="${this.id}"
                      data-price="${this.price}"
                      data-name="${this.title}">Купить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData().then(() => this._render());
    }

    calcSum() {
        return this.products.reduce((num, product) => num += product.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = data;
                for (let dataEl of this.data) {
                    const product = new Product(dataEl);
                    this.products.push(product);
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class Cart {
    constructor(product) {
        // сюда попадает созданный для корзины товар
    }
    /**считает сумму товаров в корзине */
    getSum() {
        let sum = 0;
        for (let product of this.products) {
            sum += product.price * product.count;
        }
        return sum;
    }

    /**показывает сумму на странице из getSum */
    showSum() {

    }

    /**удаляет товар из корзины по нажатию на крестик */
    removeItem() {

    }

    /**добавляет toggle для открытия и закрытия корзины */
    toggleCart() {

    }
}

class CartElem {
    constructor(button = '.buy-btn') {
        this.buttons = document.querySelectorAll(button);
    }
    /**метод находит кнопки купить*/
    _getBtns() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', evt => {
                let id = evt.target.dataset.id;
                let price = evt.target.dataset.price;
                let name = evt.target.dataset.name;
                this.addItem({ id: id, price: price, name: name })
            })
        })

    }
    /**метод создает товар для корзины*/
    addItem() {
        let item = new Cart(product)
    }

    /**создает рзаметку для товара корзины*/
    render() {
        return `<div class="item-container">
            <p>${product.title}</p>
            <p>${product.price}</p>
            <p class="count" data-id="${product.id}"></p>
            <span class="btn-remove" data-id="${product.id}">	
            &#10062;</span>
        </div>`
    }
}

const list = new ProductsList();
console.log(list.calcSum());