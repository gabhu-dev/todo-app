<script setup lang="ts">
defineProps<{
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
  value: any
}>()

const emit = defineEmits<{
  (event: "update:value", value: string): void
}>()

const updateValue = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div>
    <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
      type="date"
      :id="name"
      class="bg-white border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      :required="required"
      @change="updateValue"
    />
  </div>
</template>
