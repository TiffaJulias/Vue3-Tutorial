<template>
  <main>
    <form @submit.prevent="formSubmitted()">
      <label>
        New Task
        <input v-model="newTask" name="newTask" :aria-invalid="!!error || undefined" @input="error = ''">
        <small v-if="error" id="invalid-helper">
          {{ error }}
        </small>
      </label>
      <div class="button-container">
        <button>Add</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const newTask = ref("")
const emit = defineEmits<{
  addTask: [newTask: string]
}>()
const error = ref("")

function formSubmitted() {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value.trim())
    newTask.value = ""
  } else {
    error.value = "Task cannot be empty!"
  }
}

</script>
<style>
.button-container {
  display: flex;
  justify-content: end;
}
button {
  background-color: #42b983;
  color: white;
}
label {
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
#invalid-helper {
  color: red;
  font-size: 0.9rem;
  margin-top: 4px; /* add spacing below input */
}

</style>