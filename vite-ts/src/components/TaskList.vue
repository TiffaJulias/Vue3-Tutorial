<template>
  <article class ="boxes" v-for="task in props.tasks" :key="task.id">
    {{  task.title }}
  </article>
</template>

<script lang="ts" setup>
import type { Task } from "../types"

const props = defineProps<{
  tasks: Task[]
}>()
</script>
