import Vue from 'vue';
import App from './App.vue';
import LightGallery from 'vue-light-gallery';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import pl from 'vee-validate/dist/locale/pl.json';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

localize({pl});
localize('pl');
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LightGallery);

new Vue({
    render: h => h(App),
}).$mount('#app');
