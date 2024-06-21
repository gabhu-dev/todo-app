<script setup lang="ts">
interface SelectOption {
  label: string
  value: string
}

const props = defineProps<{
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
  options: SelectOption[]
  selected?: boolean
}>()
</script>
<template>
  <div>
    <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
    <select
      :id="name"
      name="select"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
    >
      <option v-for="optionItem in options" :key="optionItem.value" :selected="selected">
        {{ optionItem.label }}
      </option>
    </select>
  </div>
</template>
