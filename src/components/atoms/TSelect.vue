<script setup lang="ts">
import { onMounted, ref } from "vue"
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

const openDropdown = ref(false)

const updateValue = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).value)
}

const handleSetDropdown = () => {
  console.log("handleSetDropdown")
  openDropdown.value = !openDropdown.value
}

const handleMouseLeave = () => {
  console.log("handleMouseLeave")
}

const handleMouseDown = () => {
  console.log("handleMouseDown")
}

onMounted(() => {
  window.addEventListener("mousedown", handleMouseDown)
})
</script>
<template>
  <!-- <div class="relative">
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
  </div> -->
  <div class="t-select-root">
    <div @click="handleSetDropdown">
      <label :for="name" class="block mb-0.5 text-sm font-medium text-gray-900">{{ label }}</label>
      <div class="t-select">
        <span>{{ placeholder }}</span>
      </div>
    </div>
    <!--Lista-->
    <Transition>
      <div v-if="openDropdown" class="t-select__options">
        <li v-for="optionItem in options" :key="optionItem.value" class="t-select__option">
          {{ optionItem.label }}
        </li>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.t-select-root {
  @apply relative;
}
.t-select {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-2.5 pr-8 cursor-pointer;
}
.t-select__options {
  @apply bg-gray-50 mt-3 p-2 rounded-lg absolute z-10 overflow-hidden w-full transition-all duration-300;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.t-select__option {
  @apply list-none p-2 transition-all duration-300;
}
.t-select__option:hover {
  @apply bg-[#B5F9E6] cursor-pointer rounded;
}
</style>
