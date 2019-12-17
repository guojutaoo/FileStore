import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHistory, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import routes from './routes'
import VueInputUi from 'vue-input-ui';
import 'vue-input-ui/dist/vue-input-ui.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUserSecret, faHistory, faStar, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-input-ui', VueInputUi);

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({mode: 'history', routes});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
