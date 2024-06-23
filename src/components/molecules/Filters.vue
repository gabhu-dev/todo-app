<script setup lang="ts">
import { ref } from "vue"
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import TModal from "@/components/atoms/TModal.vue"

import { tasksService } from "@/services"

import { ButtonType } from "@/@types/button"

const open = ref(false)

const handleGet = async () => {
  await tasksService.get()
}

const handleAdd = async () => {
  const newTask = {
    description: "ddd",
    status: 1,
    programatedAt: "hdhd",
    starred: true,
  }
  await tasksService.add(newTask)
}
</script>
<template>
  <div class="flex justify-between items-end">
    <div class="flex space-x-3">
      <TInput label="Tarea" name="task" placeholder="Escribe aquí..." />
      <TSelect
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="[{ value: 'todo', label: 'TODO' }]"
      />
      <TButton :type="ButtonType.Primary" @click="open = !open">Abrir modal</TButton>
      <TModal :open="open" @onClose="open = false">hehehehe9he </TModal>
    </div>
    <TButton :type="ButtonType.Primary" @click="handleAdd"> Agregar tarea </TButton>
  </div>
</template>
