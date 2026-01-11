<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue"
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import TDate from "@/components/atoms/TDate.vue"
import TModal from "@/components/atoms/TModal.vue"

import { ButtonType } from "@/@types/button"
import { NewTask, Task } from "@/@types/services"
import { LIST_STATUS } from "@/utils/status"

import { useTasksStore } from "@/store"

const props = defineProps<{
  open: boolean
  task?: Task
}>()

const emit = defineEmits<{
  (e: "update:open", value: boolean): void
  (e: "onClose"): void
}>()

const tasksStore = useTasksStore()

const formState = reactive<NewTask>({
  description: "",
  status: 1,
  programatedAt: "",
  starred: false,
})
const loading = ref(false)

const options = computed(() => {
  return Object.values(LIST_STATUS).map((option) => {
    return { label: option.title, value: option.status }
  })
})

const clear = () => {
  formState.description = ""
  formState.status = 1
  formState.programatedAt = ""
  formState.starred = false
}

const setTask = (task: Task) => {
  formState.description = task.description
  formState.status = task.status
  formState.programatedAt = task.programatedAt
  formState.starred = task.starred
}

const handleAdd = async () => {
  loading.value = true
  if (props.task) {
    await tasksStore.update(formState, props.task.id)
  } else {
    await tasksStore.add(formState)
  }
  emit("update:open", false)
  loading.value = false
  clear()
}

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      setTask(newTask)
    } else {
      clear()
    }
  },
  { immediate: true },
)

const modalTitle = computed(() => (props.task ? "Editar tarea" : "Crear nueva tarea"))
const buttonText = computed(() => (props.task ? "Guardar cambios" : "Crear tarea"))

const handleClose = () => {
  emit("update:open", false)
  emit("onClose")
}
</script>
<template>
  <TModal :open="open" :title="modalTitle" @onClose="handleClose">
    <form class="flex flex-col items-center gap-5" @submit.prevent="handleAdd">
      <TInput
        v-model:value="formState.description"
        class="w-full max-w-full"
        label="Título de tarea"
        placeholder="Escribe aquí..."
        :required="true"
      />
      <TSelect
        v-model="formState.status"
        class="w-full !max-w-full"
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="options"
      />
      <TDate
        v-model:value="formState.programatedAt"
        class="w-full max-w-full"
        label="Fecha"
        placeholder="Escribe aquí..."
      />
      <TButton class="my-5" :type="ButtonType.Primary" @click="handleAdd" :loading="loading">
        {{ buttonText }}
      </TButton>
    </form>
  </TModal>
</template>
