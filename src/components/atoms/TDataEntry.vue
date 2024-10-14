<script setup lang="ts">
import { computed, ref } from "vue"

const props = defineProps<{
  label?: string
  name?: string
  placeholder?: string
  required?: boolean
  modelValue: string
}>()

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void
}>()

const isWriting = ref(false)

const isEmpty = computed(() => {
  return isWriting.value ? !props.modelValue || !props.modelValue.length : false
})

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value)
  isWriting.value = true
}
</script>
<template>
  <div>
    <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
      type="text"
      :id="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:border-blue-500 block w-full p-2.5"
      :class="{ '!border-red-500': isEmpty }"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="updateValue"
    />
    <div class="h-5">
      <span v-if="isEmpty" class="text-red-500 text-sm"> Completa este campo </span>
    </div>
  </div>
</template>
