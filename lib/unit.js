import Vue from 'vue';
import App from './App.vue';

export function add(container) {
  const node = document.createTextNode('hello world');
  container.appendChild(node);
}

export function createApp() {
  return new Vue({
    render: h => h(App),
    mounted() {
      this.$emit('mountedApp');
    }
  });
}
