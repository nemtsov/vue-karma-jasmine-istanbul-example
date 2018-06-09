import { mount } from '@vue/test-utils';
import App from '../../lib/App.vue';

describe('App', function() {
  it('should mount', async function() {
    const wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('div').html()).toContain('name: joe');
  });
});
