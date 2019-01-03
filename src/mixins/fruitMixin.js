export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Lemon", "Banana", "Melon"],
            filterText: ""
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
                return element.toLowerCase().match(this.filterText.toLowerCase())
            });
        }
    },
    created() {
        console.log('Created by mixins')
    },
}