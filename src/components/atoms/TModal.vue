<script setup lang="ts">
import TTypographyTitle from "@/components/atoms/TTypographyTitle.vue"
import { XMarkIcon } from "@heroicons/vue/24/outline"

withDefaults(
  defineProps<{
    open: boolean
    title: string
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
  <div class="modal-root" :class="{ 'modal-root--active': open }" role="dialog">
    <div class="modal">
      <!--Contenedor de modal-->
      <div class="h-full w-full flex align-middle justify-center">
        <!--Modal-->
        <div class="bg-white m-auto rounded p-5 shadow w-[30rem]">
          <!--Cabecera-->
          <div class="flex mb-4 justify-between">
            <TTypographyTitle type="h6">{{ title }}</TTypographyTitle>
            <XMarkIcon class="h-6 w-6 ml-5 cursor-pointer" @click="$emit('onClose')" />
          </div>
          <!--Contenido-->
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal-root {
  @apply fixed duration-[0.8s] transition-all -z-10;
}
.modal {
  @apply bg-gray-500/75 z-10 fixed top-0 left-0 right-0 bottom-0 !ml-0 translate-y-[10%] opacity-0 duration-[0.5s] transition-all;
}
.modal-root--active {
  @apply z-20;
}
.modal-root--active .modal {
  @apply opacity-100 translate-y-[0%];
}
</style>
