<template>
  <article class ="boxes" v-for="task in props.tasks" :key="task.id" :class="{ done: task.done }">
    <label>
      <input type="checkbox" @input="emit('toggleDone', task.id)" :checked="task.done" >
      <span>{{ task.title }}</span>
    </label>
  </article>
</template>

<script lang="ts" setup>
import type { Task } from "../types"

const props = defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  toggleDone: [id: string]
}>()

</script>

<style>
.done {
  text-decoration: line-through;
  background-color:#4ed78e;
}
</style>