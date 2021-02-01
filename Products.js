import { Product } from "./Product.js"

export const Products = {
    components: {
        Product
    },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            imgCatalog: 'https://placehold.it/200x150',
            products: []
        }
    },
    // methods: {

    // },
    mounted() {
        this.$root.getJson(`${this.$root.API + this.catalogUrl}`)
            .then(data => {
                for (let product of data) {
                    this.products.push(product);
                }
            });
        this.$root.getJson(`getProducts.json`)
            .then(data => {
                for (let product of data) {
                    this.products.push(product);
                }
            })
    },
    template: `<div class="products products-wrap">
                   <Product v-for="el of products" :key="el.id_product" :img="imgCatalog" :product="el"></Product>
                </div>`
}