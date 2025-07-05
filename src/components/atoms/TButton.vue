<script setup lang="ts">
import { ButtonType } from "@/@types/button"

defineProps<{
  type: ButtonType
}>()
</script>

<template>
  <button
    class="font-medium inline-flex h-12 items-center justify-center rounded-md border border-gray-400 border-solid px-6 text-gray-700 shadow-lg shadow-neutral-500/20 transition active:scale-95"
    :class="{ 'button--primary': type === 'primary' }"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
