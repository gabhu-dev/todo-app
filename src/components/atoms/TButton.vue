<script setup lang="ts">
import { ButtonType } from "@/@types/button"
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

defineProps<{
  type: ButtonType
  loading?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="font-medium py-2 px-6 rounded-md border border-gray-400 border-solid text-gray-700 shadow-lg shadow-neutral-500/20 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:active:scale-100"
    :class="{ 'button--primary': type === 'primary' }"
    :disabled="disabled || loading"
    type="button"
  >
    <div class="flex items-center justify-center">
      <ArrowPathIcon v-if="loading" class="h-5 w-5 mr-2 animate-spin" />
      <slot></slot>
    </div>
  </button>
</template>

<style scoped></style>
