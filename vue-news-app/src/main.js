/*This next step will import the vuetify package and make sure that the
vue instance makes use of it*/
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);


Vue.config.productionTip = false

// eslint-disable no-new

new Vue({
  vuetify : new Vuetify(),
  el:'#app',
  components:{App},
  template:'<App/>'
})
