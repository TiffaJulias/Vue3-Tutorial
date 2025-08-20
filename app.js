const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am a template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: true,
      x: 0,
      y: 0
    }
  },
  methods: {
    changeTitle(title) {
      console.log('Changing title...');
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e, e.type);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
})

app.mount('#app')