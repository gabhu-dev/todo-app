<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"

import { ButtonType } from "@/@types/button"
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
    <TButton :type="ButtonType.Primary"> Agregar tarea </TButton>
  </div>
</template>
