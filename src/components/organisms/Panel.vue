<script setup lang="ts">
import { computed } from "vue"
import TabPanel from "@/components/molecules/TabPanel.vue"
import CardTask from "@/components/molecules/CardTask.vue"

import { TaskStatus } from "@/@types/task"

import { useTasksStore } from "@/store"

const tasksStore = useTasksStore()

const props = defineProps<{
  status: TaskStatus
}>()

const listTasksByStatus = computed(() => {
  return tasksStore.tasks.filter((task) => task.status === props.status)
})
</script>
<template>
  <div>
    <TabPanel class="mb-5" :status="status" />
    <div>
      <CardTask
        v-for="task in listTasksByStatus"
        class="mb-3"
        :title="task.description"
        :status="task.status"
        :date="task.programatedAt"
      />
    </div>
  </div>
</template>
