import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.use(firestorePlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

import HomeComp from './components/HomeComp.vue'
import ChatRoom from './components/ChatRoom.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: HomeComp },
    { path: '/chats/:id', component: ChatRoom, name: 'chat' }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
