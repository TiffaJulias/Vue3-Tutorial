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
        { title: 'name of the wind', author: 'Patrick Rothfuss', age: 40, img:'assets/1.jpg', isFav: true },
        { title: 'the way of the kings', author: 'Brandon Sanderson', age: 45,img:'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'Brandon Sanderson', age: 45, img:'assets/3.jpg', isFav: true },
      ],
      x: 0,
      y: 0,
      url: 'http://www.thenetninja.co.uk'
    }
  },
  methods: {
    changeTitle(book, title) {
      console.log('Changing title...');
      book.title = title;
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
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  }
})

app.mount('#app')