<template>
  <main>
    <h1>{{ message }}</h1> 
    <TaskForm @add-task="addATask"/>
    <h3 v-if="!tasks.length">Add a task to get started.</h3>
    <h3 v-else>
      There are {{ tasks.length }} {{ checkTaskLength() }}<br>
      {{ tasksDone() }} / {{ tasks.length }} tasks completed.
    </h3>
    <TaskList :tasks="tasks" @toggle-done="tasksDone"/>
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

function tasksDone() {
  let count = 0
  for (const task of tasks.value) {
    if (task.done) {
      count++
    }
  }
  return count
}

</script>

<style>
.boxes {
  text-align: left;
}
h3 {
  margin: 20px;
}
</style>