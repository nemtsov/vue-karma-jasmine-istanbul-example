import Vue from 'vue';
import { add, createApp } from '../../lib/unit';

describe('unit', function() {
  describe('add', function() {
    it('should append a hello world text to the first div', function() {
      const el = document.createElement('div');
      add(el);
      expect(el.innerHTML).toBe('hello world');
    });

    it('should append a hello world text to the first span', function() {
      const el = document.createElement('span');
      add(el);
      expect(el.innerHTML).toBe('hello world');
    });
  });

  describe('createApp', function() {
    it('should create an app', async function() {
      const container = document.createElement('div');

      const app = createApp();

      const el = document.createElement('div');
      container.appendChild(el);
      app.$mount(el);

      expect(container.innerHTML).toContain('name: nom');
    });
  });
});
