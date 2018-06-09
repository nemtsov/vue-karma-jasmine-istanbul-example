import Vue from 'vue';

Vue.config.devtools = false;
Vue.config.productionTip = false;

const testsContext = require.context('./specs', true);
testsContext.keys().forEach(testsContext);
