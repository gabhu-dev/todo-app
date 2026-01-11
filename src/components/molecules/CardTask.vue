<script setup lang="ts">
import { ref } from "vue"

import { TaskStatus } from "@/@types/task"
import { ToastType } from "@/@types/toast"
import { StarIcon, TrashIcon, CheckCircleIcon } from "@heroicons/vue/24/outline"
import {
  StarIcon as StarSolidIcon,
  CheckCircleIcon as CheckCircleSolidIcon,
} from "@heroicons/vue/24/solid"
import TToast from "@/components/atoms/TToast.vue"

import { useTasksStore } from "@/store"

const props = defineProps<{
  description: string
  status: TaskStatus
  date: string
  starred?: boolean
  id: string
}>()

const tasksStore = useTasksStore()

const toast = ref<{ type: ToastType; message: string }>({
  type: "warning",
  message: "",
})

const handleDelete = async () => {
  toast.value.type = "loading"
  toast.value.message = "Eliminando tarea..."
  await tasksStore.delete(props.id)
  toast.value.message = ""
}

const handleStar = async () => {
  toast.value.type = "loading"
  toast.value.message = "Actualizando tarea..."
  await tasksStore.updateStar(!props.starred, props.id)
  toast.value.type = "success"
  toast.value.message = "Tarea actualizada"
  setTimeout(() => {
    toast.value.message = ""
  }, 1000)
}

const handleChangeStatus = async () => {
  toast.value.type = "loading"
  toast.value.message = "Actualizando tarea..."
  await tasksStore.updateStatus(TaskStatus.IsCompleted, props.id)
  toast.value.type = "success"
  toast.value.message = "Tarea actualizada"
  setTimeout(() => {
    toast.value.message = ""
  }, 1000)
}
</script>

<template>
  <div
    class="bg-white shadow-sm rounded border border-gray-100 border-solid h-max min-w-20 w-full p-5"
  >
    <TToast :type="toast.type" :message="toast.message" />
    <p class="text-xs text-gray-500 mb-2">Vencimiento: {{ date }}</p>
    <h5 class="text-xl font-medium mb-4">
      {{ description }}
    </h5>
    <div class="space-x-4 flex flex-row justify-end">
      <StarSolidIcon
        v-if="starred"
        @click.stop="handleStar"
        class="h-4 w-4 text-yellow-400 cursor-pointer"
      />
      <StarIcon
        v-else
        @click.stop="handleStar"
        class="h-4 w-4 text-gray-600 cursor-pointer hover:text-gray-900"
      />

      <CheckCircleSolidIcon
        v-if="status === TaskStatus.IsCompleted"
        class="h-4 w-4 text-green-600 cursor-pointer"
        @click.stop="() => {}"
      />
      <CheckCircleIcon
        v-else
        @click.stop="handleChangeStatus"
        class="h-4 w-4 text-gray-600 cursor-pointer hover:text-gray-900"
      />
      <TrashIcon
        @click.stop="handleDelete"
        class="h-4 w-4 text-gray-600 cursor-pointer hover:text-gray-900"
      />
    </div>
  </div>
</template>

<style scoped></style>
