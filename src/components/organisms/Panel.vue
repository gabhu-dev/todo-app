<script setup lang="ts">
import { computed, ref } from "vue"
import TabPanel from "@/components/molecules/TabPanel.vue"
import CardTask from "@/components/molecules/CardTask.vue"
import ModalTask from "@/components/molecules/ModalTask.vue"

import { TaskStatus } from "@/@types/task"
import { Task } from "@/@types/services"

import { useTasksStore } from "@/store"

const tasksStore = useTasksStore()

const props = defineProps<{
  status: TaskStatus
}>()

const isModalOpen = ref(false)
const selectedTask = ref<Task | undefined>()

const listTasksByStatus = computed(() => {
  return tasksStore.tasks.filter((task) => task.status == props.status)
})

const openEditModal = (task: Task) => {
  selectedTask.value = task
  isModalOpen.value = true
}

const handleClose = () => {
  selectedTask.value = undefined
}
</script>
<template>
  <div class="grid col-span-3">
    <div>
      <TabPanel class="mb-3" :status="status" />
      <div class="p-2 bg-teal-50 rounded-sm" style="height: calc(100% - 60px)">
        <CardTask
          v-for="task in listTasksByStatus"
          :key="task.id"
          class="mb-3 cursor-pointer"
          :description="task.description"
          :status="task.status"
          :date="task.programatedAt"
          :id="task.id"
          :starred="task.starred"
          @click="openEditModal(task)"
        />
      </div>
    </div>
    <ModalTask v-model:open="isModalOpen" :task="selectedTask" @onClose="handleClose" />
  </div>
</template>
