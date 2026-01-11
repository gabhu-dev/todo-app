<script setup lang="ts">
import { computed } from "vue"
import {
  ExclamationCircleIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/vue/24/outline"
import { ToastType } from "@/@types/toast"

const props = defineProps<{
  type: ToastType
  message?: string
}>()

const iconComponent = computed(() => {
  switch (props.type) {
    case "success":
      return CheckCircleIcon
    case "error":
      return XMarkIcon
    case "warning":
      return ExclamationTriangleIcon
    case "loading":
      return ArrowPathIcon
    case "info":
      return ExclamationCircleIcon
  }
})
</script>

<template>
  <div
    v-if="message"
    class="bg-white flex items-center w-full max-w-sm p-3 text-body rounded-lg shadow-md border border-default absolute top-10 right-8"
    role="alert"
  >
    <div
      class="p-1 rounded mr-2"
      :class="{
        'bg-green-100 text-green-600': type === 'success',
        'bg-red-200 text-red-600': type === 'error',
        'bg-yellow-100 text-yellow-600': type === 'warning',
        'bg-blue-100 text-blue-600': type === 'info',
        'bg-gray-200 text-gray-600': type === 'loading',
      }"
    >
      <component
        :is="iconComponent"
        class="w-5 h-5"
        :class="{ 'animate-spin': type === 'loading' }"
      />
    </div>
    <span>{{ message }}</span>
    <button
      type="button"
      class="ml-auto inline-flex items-center text-gray-700 hover:text-gray-900"
      @click="$emit('close')"
    >
      <span class="sr-only">Close</span>
      <XMarkIcon class="w-5 h-5" />
    </button>
  </div>
</template>

<style lang="sass" scoped></style>
