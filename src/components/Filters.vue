<script setup lang="ts">
import TButton from "@/components/TButton.vue"
import { ButtonType } from "@/@types/button"
</script>
<template>
  <div class="flex justify-end">
    <TButton :type="ButtonType.Primary"> Agregar tarea </TButton>
  </div>
</template>
