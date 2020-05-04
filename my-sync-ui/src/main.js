import Vue from 'vue'
import App from './App.vue'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.prototype.window = window
console.log('window', window)

new Vue({
  render: h => h(App),
}).$mount('#app')
