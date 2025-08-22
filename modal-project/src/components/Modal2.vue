<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal2" :class="{sale: theme === 'sale'}">
      <h1> {{ category }} Items</h1>
      <slot>
        default content for modal2
      </slot>
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {category: {type: String, required: true}},
  emits: ['close']
}
</script>

<style>
.modal2 {
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
.modal2 h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal2 p {
  font-style: normal;
}

.modal2 ul {
  padding-left: 0;      
  margin: 0; 
}
.modal2 p {
  font-size: small;
  color: #333;
  padding: 8px;
  border: 1px solid #aeadad;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  list-style: none;
  text-align: center;
}

</style>