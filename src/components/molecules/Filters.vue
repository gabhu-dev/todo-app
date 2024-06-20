<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue"
import TInput from "@/components/atoms/TInput.vue"

import { ButtonType } from "@/@types/button"
</script>
<template>
  <div class="flex justify-between items-end">
    <TInput label="Tarea" name="task" placeholder="Escribe aquí..." />
    <TButton :type="ButtonType.Primary"> Agregar tarea </TButton>
  </div>
</template>
