<script setup lang="ts">
import { ButtonType } from "@/@types/button"

defineProps<{
  type: ButtonType
}>()
</script>

<template>
  <button :class="{ 'button--primary': type === 'primary' }" type="button">
    <slot></slot>
  </button>
</template>

<style scoped></style>
