const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am a template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: true
    }
  },
  methods: {
    changeTitle(title) {
      console.log('Changing title...');
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
})

app.mount('#app')