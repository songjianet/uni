import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

import tabbar from './components/tabbar.vue'

Vue.config.productionTip = false

Vue.use(uView)

Vue.component('tab-bar', tabbar)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
