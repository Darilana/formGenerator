import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import createForm from './components/createForm.vue'
import formView from './components/formView.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: '/', component: createForm },
    { path: '/user/:formParams', component: formView, props: true }
];
const router = new VueRouter({
    routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});