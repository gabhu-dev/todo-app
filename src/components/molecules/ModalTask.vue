<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import TDate from "@/components/atoms/TDate.vue"
import TModal from "@/components/atoms/TModal.vue"

import { ButtonType } from "@/@types/button"
import { NewTask } from "@/@types/services"
import { LIST_STATUS } from "@/utils/status"

import { useTasksStore } from "@/store"

const tasksStore = useTasksStore()

const open = ref(false)
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

const handleAdd = async () => {
  console.log("submit")
  loading.value = true
  await tasksStore.add(formState)
  open.value = false
  loading.value = false
  clear()
}
</script>
<template>
  <TButton :type="ButtonType.Primary" @click="open = !open"> Crear tarea </TButton>
  <TModal :open="open" title="Crear nueva tarea" @onClose="open = false">
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
        class="w-full max-w-full"
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="options"
      />
      <TDate v-model:value="formState.programatedAt"
        class="w-full max-w-full"
        label="Fecha"
        placeholder="Escribe aquí..." />
      <TButton class="my-5" :type="ButtonType.Primary" @click="handleAdd" :loading="loading">Crear tarea</TButton>
    </form>
  </TModal>
</template>
