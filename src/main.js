// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
import * as VueGoogleMaps from 'vue2-google-maps'

import App from './App'
import router from './router'

// Webpack CSS import


Vue.use(VueOnsen);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBp-JtJsI065C43p7IBLWr-gD0VHdIS_II",
    libraries: "places" // necessary for places input
  }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
