<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="theme" @close="toggleModal()" @open-modal2="openSaleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <p>Testing slots</p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal2 :category="category" @close="showModal2 = false">
      <h5>Items available:</h5>
      <template v-slot:list v-if="(category === 'Clothing')">
          <span><img class="hood" src="./assets/Hoodie.jpg"/><p>Hoodie</p></span>
          <span><img class ="sweats" src="./assets/Sweatshirt.jpg"/><p>Sweatshirt</p></span>
      </template>
    </Modal2>
  </div>
  <button @click.alt="toggleModal()">open modal (alt)</button>
  <input type="text" ref="name">
  <button @click="handleClick()">click me</button>
</template>

<script>
import Modal from './components/Modal.vue';
import Modal2 from './components/Modal2.vue';
export default {
  name: 'App',
  components: {
    Modal, Modal2
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      theme: 'sale',
      category: 'Clothing',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
      this.showModal2 = false; 
    },
    openSaleModal() {
      this.showModal = false; 
      this.showModal2 = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
img.sweats{
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
img.hood {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
</style>
