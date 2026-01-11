<script setup lang="ts">
import { ref, watch } from "vue"
import draggable from "vuedraggable"
import TabPanel from "@/components/molecules/TabPanel.vue"
import CardTask from "@/components/molecules/CardTask.vue"
import ModalTask from "@/components/molecules/ModalTask.vue"
import TToast from "@/components/atoms/TToast.vue"

import { TaskStatus } from "@/@types/task"
import { Task } from "@/@types/services"
import { ToastType } from "@/@types/toast"

import { useTasksStore } from "@/store"

const tasksStore = useTasksStore()

const props = defineProps<{
  status: TaskStatus
}>()

const isModalOpen = ref(false)
const selectedTask = ref<Task | undefined>()

const toast = ref<{ type: ToastType; message: string }>({
  type: "warning",
  message: "",
})

const localTasks = ref<Task[]>([])

watch(
  () => tasksStore.filteredTasks,
  (newTasks) => {
    localTasks.value = newTasks.filter((task) => task.status == props.status)
  },
  { immediate: true, deep: true },
)

const onDragChange = async (event: any) => {
  if (event.added) {
    const task = event.added.element as Task
    toast.value.type = "loading"
    toast.value.message = "Actualizando tarea..."
    await tasksStore.updateStatus(props.status, task.id)
    toast.value.type = "success"
    toast.value.message = "Tarea actualizada"
    setTimeout(() => {
      toast.value.message = ""
    }, 1000)
  }
}

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
    <TToast :type="toast.type" :message="toast.message" />
    <div>
      <TabPanel class="mb-3" :status="status" :length="localTasks.length" />
      <div
        class="p-2 bg-teal-50 rounded-sm scrollbar-basic overflow-y-auto container-drag"
        style="height: 28rem"
      >
        <draggable
          v-model="localTasks"
          group="tasks"
          item-key="id"
          class="min-h-full"
          ghost-class="ghost-card"
          @change="onDragChange"
        >
          <template #item="{ element: task }">
            <CardTask
              :key="task.id"
              class="mb-3 cursor-pointer"
              :description="task.description"
              :status="task.status"
              :date="task.programatedAt"
              :id="task.id"
              :starred="task.starred"
              @click="openEditModal(task)"
            />
          </template>
        </draggable>
      </div>
    </div>
    <ModalTask v-model:open="isModalOpen" :task="selectedTask" @onClose="handleClose" />
  </div>
</template>

<style scoped>
.container-drag {
  transition: background-color 0.3s ease;
}

.container-drag:has(.ghost-card) {
  background-color: #f0fdfa; /* teal-50 */
}

/* When a ghost card is present, darken the background slightly */
.container-drag:has(.ghost-card) {
  background-color: #ccfbf1; /* teal-100 */
}

:deep(.ghost-card) {
  opacity: 0.5;
  border: 2px dashed #2dd4bf; /* teal-400 */
  background-color: #f0fdfa !important; /* teal-50 */
  box-shadow: none !important;
}
</style>
