const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am a template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle() {
      console.log('Changing title...');
      this.title = 'Words of Radiance';
    }
  }
})

app.mount('#app')