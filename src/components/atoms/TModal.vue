<script setup lang="ts">
import TTypographyTitle from "@/components/atoms/TTypographyTitle.vue"
import { XMarkIcon } from "@heroicons/vue/24/outline"

withDefaults(
  defineProps<{
    open: boolean
  }>(),
  {
    open: false,
  },
)

defineEmits<{
  (e: "onClose"): void
}>()
</script>

<template>
  <!--Mascara-->
  <div
    :class="{ hidden: !open, block: open }"
    class="bg-gray-400/75 z-10 fixed top-0 left-0 right-0 bottom-0 !ml-0"
    role="dialog"
  >
    <!--Contenedor de modal-->
    <div class="h-full w-full flex align-middle justify-center">
      <!--Modal-->
      <div class="bg-white m-auto rounded p-5 shadow">
        <!--Cabecera-->
        <div class="flex mb-4">
          <TTypographyTitle type="h6">This is a title</TTypographyTitle>
          <XMarkIcon class="h-6 w-6 ml-5 cursor-pointer" @click="$emit('onClose')" />
        </div>
        <!--Contenido-->
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
