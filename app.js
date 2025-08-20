const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am a template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'Patrick Rothfuss', age: 40 },
        { title: 'the way of the kings', author: 'Brandon Sanderson', age: 45 },
        { title: 'the final empire', author: 'Brandon Sanderson', age: 45 },
      ],
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