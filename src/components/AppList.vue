<template>
    <div id="app">
        <h1>Filters & Mixins</h1>
        <hr>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from "../mixins/fruitMixin.js";
export default {
    name: "AppList",
    mixins: [fruitMixin],
    created() {
        console.log('Created by component')
    }
};
</script>
