// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from '@rails/ujs'
import Vue from 'vue'
import App from '../app.vue'
import router from '../plugins/router'
import createAxios from '../plugins/axios'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Rails.start()

Vue.config.productionTip = false
Vue.prototype.$axios = createAxios

Vue.use(Vuetify)
const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
})

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        router,
        vuetify,
        render: (h) => h(App),
    }).$mount()
    document.body.appendChild(app.$el)
})
