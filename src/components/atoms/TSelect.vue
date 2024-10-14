<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/outline"

interface SelectOption {
  label: string
  value: any
}

defineProps<{
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
  options: SelectOption[]
  selected?: boolean
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
  <div class="relative">
    <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
    <select
      :id="name"
      name="select"
      class="t-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 pr-8 focus:ring-blue-500 focus:border-blue-500 block"
      :placeholder="placeholder"
      :value="value"
      @change="updateValue"
    >
      <option
        v-for="optionItem in options"
        :key="optionItem.value"
        :value="optionItem.value"
        :selected="selected"
      >
        {{ optionItem.label }}
      </option>
    </select>
    <ChevronDownIcon class="h-4 w-4 absolute right-2 top-[55%] pointer-events-none" />
  </div>
</template>

<style scoped>
.t-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
