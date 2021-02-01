export const Search = {
    data() {
        return {
            searchLine: ''
        }
    },
    computed: {
        filtered() {
            return $root.filter(product => new RegExp(this.searchLine, 'i').test(product.product_name));
        }
    },
    template: `<form action="#" class="search-form" @submit.prevent="">
    <input type="text" class="search-field" v-model.lazy="searchLine">
    <button @click.prevent="filtered" class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
</form>`
}