<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue"
import { ChevronDownIcon } from "@heroicons/vue/24/outline"

const props = withDefaults(
  defineProps<{
    label?: string
    options?: { label: string; value: any }[]
    modelValue?: any
  }>(),
  {
    options: () => [],
  },
)
const emit = defineEmits(["update:modelValue"])

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const selected = ref(props.modelValue ?? props.options[0]?.value)

const selectedLabel = computed(() => {
  const found = props.options.find((opt) => opt.value === selected.value)
  return found ? found.label : ""
})

function toggleDropdown() {
  open.value = !open.value
}
function selectOption(option: { label: string; value: any }) {
  selected.value = option.value
  emit("update:modelValue", option.value)
  open.value = false
}
function handleClickOutside(event: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
    open.value = false
  }
}
onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside)
})
watch(
  () => props.modelValue,
  (val) => {
    selected.value = val
  },
)
</script>

<template>
  <div class="relative w-full max-w-xs" ref="rootRef">
    <label v-if="label" class="block mb-1 text-sm font-medium text-gray-700">{{ label }}</label>
    <button
      type="button"
      class="flex items-center justify-between w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 cursor-pointer focus:outline-none focus:border-blue-500 focus-visible:border-blue-500"
      :class="{ 'border-blue-500': open }"
      @click="toggleDropdown"
    >
      <span :class="{ 'text-gray-400': !selectedLabel }">{{
        selectedLabel || "Selecciona una opción"
      }}</span>
      <ChevronDownIcon
        class="h-5 w-5 ml-2 transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
      />
    </button>
    <transition name="fade">
      <ul
        v-if="open"
        class="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-auto"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-900"
          :class="option.value === selected ? 'bg-blue-50 font-semibold' : ''"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
