<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  type: string
}>()

const classTitle = computed(() => {
  switch (props.type) {
    case "h6":
      return "text-xl"
    case "h5":
      return "text-2xl"
  }
})
</script>
<template>
  <component :is="type" class="font-semibold" :class="classTitle">
    <slot></slot>
  </component>
</template>
