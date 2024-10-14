<script setup lang="ts">
import { reactive, ref } from "vue"
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import TDate from "@/components/atoms/TDate.vue"
import TModal from "@/components/atoms/TModal.vue"

import { tasksService } from "@/services"

import { ButtonType } from "@/@types/button"

const open = ref(false)
const formState = reactive({
  title: "",
})

const handleAdd = async () => {
  const newTask = {
    description: "ddd",
    status: 1,
    programatedAt: "hdhd",
    starred: true,
  }
  await tasksService.add(newTask)
}
const handleSubmit = () => {
  console.log("submit")
}
</script>
<template>
  <TButton :type="ButtonType.Primary" @click="open = !open"> Agregar tarea </TButton>
  <TModal :open="open" title="Agregar una tarea" @onClose="open = false">
    <form @submit.prevent="handleSubmit">
      <TInput
        v-model="formState.title"
        label="Título de tarea"
        placeholder="Escribe aquí..."
        :required="true"
      />
      <TSelect
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="[{ value: 'todo', label: 'TODO' }]"
      />
      <TDate label="Fecha" placeholder="Escribe aquí..." />
      <TButton :type="ButtonType.Primary" @click="handleSubmit">Agregar</TButton>
    </form>
  </TModal>
</template>
