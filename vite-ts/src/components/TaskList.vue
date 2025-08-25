<template>
  <article class ="boxes" v-for="task in props.tasks" :key="task.id">
    <label>
      <input type="checkbox" v-model="task.done">
      {{ task.title }}
    </label>
  </article>
</template>

<script lang="ts" setup>
import type { Task } from "../types"

const props = defineProps<{
  tasks: Task[]
}>()


</script>
