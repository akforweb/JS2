class Product {
    constructor(title, price, id = false) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    renderProduct(title, price) {
        document.querySelector('.products').innerHTML = `<div class="product-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                </div>`;
    }
}

const product1 = new Product('Notebook', 2000);
product1.renderProduct('Notebook', 2000);

const product2 = new Product('Keyboard', 200);
product2.renderProduct('Keyboard', 200);

const product3 = new Product('Mouse', 100);
product3.renderProduct('Mouse', 100);

const product4 = new Product('Gamepad', 87);
product4.renderProduct('Gamepad', 87);


// const products = [
//     { id: 1, title: 'Notebook', price: 2000 },
//     { id: 2, title: 'Keyboard', price: 200 },
//     { id: 3, title: 'Mouse', price: 100 },
//     { id: 4, title: 'Gamepad', price: 87 }
// ];

// function renderProduct(title, price) {
//     return `<div class="product-item">
//     <h3>${title}</h3>
//     <p>${price}</p>
//     </div>`;
// }

// const render = productsList => {
//     const productsElements = productsList.map(product => renderProduct(product.title, product.price));
//     document.querySelector('.products').innerHTML = productsElements;
// };

// render(products);