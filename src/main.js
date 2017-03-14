import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'

Vue.config.productionTip = false

components.forEach(component => {
  Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
