<script setup lang="ts">
import { computed } from "vue"
import { TaskStatus } from "@/@types/task"
import { COLOR_STATUS } from "@/utils/colorsStatus"

const props = defineProps<{
  status: TaskStatus
}>()

const classStatus = computed(() => {
  return `border-${COLOR_STATUS[props.status]}`
})
</script>
<template>
  <div class="w-full rounded bg-gray-200 border-t-4 px-2.5 py-2" :class="classStatus">TITULO</div>
</template>
