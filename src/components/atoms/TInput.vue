<script setup lang="ts">
const props = defineProps<{
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
}>()
</script>
<template>
  <div>
    <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
      type="text"
      :id="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
