import { CartItem } from "./CartItem.js"

export const Cart = {
    components: {
        CartItem
    },
    data() {
        return {
            cartUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x50',
            isVisibleCart: false,
            cartItems: []
        }
    },
    methods: {
        addProduct(product) {
            this.getJson(`${this.$root.API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(product) {
            this.getJson(`${this.API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            find.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    }
                })
        }
    },
    mounted() {
        this.$root.getJson(`${this.$root.API + this.cartUrl}`)
            .then(data => {
                for (let product of data.contents) {
                    this.cartItems.push(product);
                }
            });
    },
    template: `<button @click="isVisibleCart = !isVisibleCart" class="btn-cart" type="button"><i
    class="fa fa-cart-plus" aria-hidden="true"></i></button>
                <div class="cart-block" v-show="isVisibleCart">
                    <p v-if="!cartItems.length">Корзина пуста</p>
                     <CartItem v-for="el of products" :key="el.id_product" :img="imgCart" :product="el"></CartItem>  
               </div>`
}