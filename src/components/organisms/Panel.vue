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
  return tasksStore.tasks.filter((task) => task.status == props.status)
})
</script>
<template>
  <div class="grid col-span-3">
    <div>
      <TabPanel class="mb-3" :status="status" />
      <div class="p-2 bg-teal-50 rounded-sm" style="height: calc(100% - 60px)">
        <CardTask
          v-for="task in listTasksByStatus"
          class="mb-3"
          :description="task.description"
          :status="task.status"
          :date="task.programatedAt"
          :id="task.id"
        />
      </div>
    </div>
  </div>
</template>
