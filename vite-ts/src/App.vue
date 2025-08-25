<template>
  <main>
    <h1>{{ message }}</h1> 
    <TaskForm @add-task="addATask"/>
    <h3 style="margin:20px">There are {{ tasks.length }} {{ checkTaskLength() }}</h3>
    <TaskList :tasks="tasks"/>
  </main>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import TaskForm from "./components/TaskForm.vue"
import TaskList from "./components/TaskList.vue"
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

function checkTaskLength() {
  if (tasks.value.length === 1) {
    return "task."
  } else {
    return "tasks."
  }
}

</script>

<style>
.boxes {
  text-align: left;
}

</style>