<template>
  <main>
    <h1>{{ message }}</h1> 
    <TaskForm @add-task="addATask"/>
    <h3>There are {{ tasks.length }} tasks.</h3>
  </main>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import TaskForm from "./components/TaskForm.vue"
import type { Task } from './types'

const message = ref("Tasks App")
const tasks = ref<Task[]>([])

function addATask(newTask: string) {
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTask,
    done: false
  })
}

</script>

<style scoped>


</style>