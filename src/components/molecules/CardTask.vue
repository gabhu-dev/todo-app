<script setup lang="ts">
import { TaskStatus } from "@/@types/task"
import { StarIcon, TrashIcon, CheckCircleIcon } from "@heroicons/vue/24/outline"
import { StarIcon as StarSolidIcon } from "@heroicons/vue/24/solid"

import { useTasksStore } from "@/store"

const props = defineProps<{
  description: string
  status: TaskStatus
  date: string
  starred?: boolean
  id: string
}>()

const tasksStore = useTasksStore()

const handleDelete = async () => {
  await tasksStore.delete(props.id)
}

const handleStar = async () => {
  await tasksStore.updateStar(!props.starred, props.id)
}

const handleChangeStatus = async () => {
  await tasksStore.updateStatus(TaskStatus.IsCompleted, props.id)
}
</script>

<template>
  <div class="bg-white shadow-sm rounded border border-gray-100 border-solid h-max min-w-20 w-full p-5">
    <p class="text-xs text-gray-500 mb-2">Vencimiento: Mañana a las 4:50pm</p>
    <h5 class="text-xl font-medium mb-4">
      {{ description }}
    </h5>
    <div class="space-x-4 flex flex-row justify-end">
      <StarSolidIcon v-if="starred" @click.stop="handleStar" class="h-4 w-4 text-yellow-400 cursor-pointer"/>
      <StarIcon v-else @click.stop="handleStar" class="h-4 w-4 text-gray-600 cursor-pointer" />
      <TrashIcon @click.stop="handleDelete" class="h-4 w-4 text-gray-600 cursor-pointer" />
      <CheckCircleIcon @click.stop="handleChangeStatus" class="h-4 w-4 text-gray-600 cursor-pointer" />
    </div>
  </div>
</template>

<style scoped></style>
