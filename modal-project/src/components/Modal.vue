<template>
  <div class="backdrop" @click.self="closeModal()">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <h1>{{ header }}</h1>
      <p>{{text}}</p>
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <div class="another-modal">
      <button @click="openModal2()">Show sale items</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  emits: ['close', 'open-modal2'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    openModal2() {
      this.$emit('open-modal2')
    }
  }
}
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal .actions {
  text-align:center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale .actions {
  color: black;
}
.modal.sale .actions a {
  color: white;
}

</style>

