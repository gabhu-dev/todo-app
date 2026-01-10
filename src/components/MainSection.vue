<script setup lang="ts">
import { onMounted } from "vue"
import Panel from "@/components/organisms/Panel.vue"
import Filters from "@/components/molecules/Filters.vue"
import { LIST_STATUS } from "@/utils/status"

import { useTasksStore } from "@/store"

const tasksStore = useTasksStore()

onMounted(async () => {
  await tasksStore.get()
})
</script>

<template>
  <h4 class="text-3xl font-semibold mt-10 mb-6">MI TODO LIST</h4>
  <Filters class="mb-8" />
  <div class="grid grid-cols-12 gap-3" style="height: calc(100% - 14rem)">
    <Panel v-for="status in LIST_STATUS" :key="status.status" :status="status.status" />
  </div>
</template>
