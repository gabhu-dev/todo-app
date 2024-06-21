<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import { tasksService } from "@/services"

import { ButtonType } from "@/@types/button"

const handleGet = async () => {
  await tasksService.get()
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
    </div>
    <TButton :type="ButtonType.Primary" @click="handleGet"> Agregar tarea </TButton>
  </div>
</template>
