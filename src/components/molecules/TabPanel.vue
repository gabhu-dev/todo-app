<script setup lang="ts">
import { computed } from "vue"
import { TaskStatus } from "@/@types/task"
import { LIST_STATUS } from "@/utils/status"

const props = defineProps<{
  status: TaskStatus
}>()

const classStatus = computed(() => {
  return `border-${LIST_STATUS[props.status].color}`
})

const titleStatus = computed(() => LIST_STATUS[props.status].title)
</script>
<template>
  <div class="w-full h-12 rounded bg-gray-200 border-t-4 px-2.5 py-2" :class="classStatus">
    {{ titleStatus }}
  </div>
</template>
