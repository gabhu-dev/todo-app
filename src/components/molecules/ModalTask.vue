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
const options = computed(() => {
  return Object.values(LIST_STATUS).map((option) => {
    return { label: option.title, value: option.status }
  })
})

const handleAdd = async () => {
  console.log("submit")
  await tasksStore.add(formState)
  open.value = false
}
</script>
<template>
  <TButton :type="ButtonType.Primary" @click="open = !open"> Agregar tarea </TButton>
  <TModal :open="open" title="Agregar una tarea" @onClose="open = false">
    <form @submit.prevent="handleAdd">
      <TInput
        v-model:value="formState.description"
        label="Título de tarea"
        placeholder="Escribe aquí..."
        :required="true"
      />
      <TSelect
        v-model:value="formState.status"
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="options"
      />
      <TDate v-model:value="formState.programatedAt" label="Fecha" placeholder="Escribe aquí..." />
      <TButton :type="ButtonType.Primary" @click="handleAdd">Agregar</TButton>
    </form>
  </TModal>
</template>
