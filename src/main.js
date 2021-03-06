import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('to-lowercase', (value) => {
    return value.toLowerCase()
});

Vue.mixin({
    created() {
        console.log('Global Mixin by main.js')
    },
})

new Vue({
    render: h => h(App),
}).$mount('#app')