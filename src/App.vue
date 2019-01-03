<template>
    <div id="app">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list/>
    </div>
</template>

<script>
import AppList from "./components/AppList.vue";
import { fruitMixin } from "./mixins/fruitMixin.js";
export default {
    mixins: [fruitMixin],
    name: "app",
    data() {
        return {
            text: "Hello there!"
        };
    },
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        AppList
    }
};
</script>
