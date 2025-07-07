<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import TTypographyTitle from "@/components/atoms/TTypographyTitle.vue"
import { XMarkIcon } from "@heroicons/vue/24/outline"

const props = withDefaults(
  defineProps<{
    open: boolean
    title: string
  }>(),
  {
    open: false,
  },
)

const emit = defineEmits<{
  (e: "onClose"): void
}>()

const showBackdrop = ref(false)
const showModal = ref(false)

watch(() => props.open, async (val) => {
  if (val) {
    showBackdrop.value = true
    await nextTick()
    showModal.value = true
  } else {
    showModal.value = false
    setTimeout(() => {
      showBackdrop.value = false
    }, 350) // igual al tiempo de animación
  }
}, { immediate: true })

function handleClose() {
  showModal.value = false
  setTimeout(() => {
    showBackdrop.value = false
    emit('onClose')
  }, 350)
}
</script>

<template>
  <div v-if="showBackdrop" class="modal-root modal-root--active" role="dialog">
    <div :class="['modal', showModal ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-350']"></div>
    <div class="h-full w-full flex align-middle justify-center fixed inset-0 z-30 pointer-events-none">
      <transition name="modal-fade">
        <div v-if="showModal" class="bg-white m-auto rounded p-5 shadow w-[30rem] transform transition-all pointer-events-auto">
          <!--Cabecera-->
          <div class="flex mb-4 justify-between">
            <TTypographyTitle type="h6">{{ title }}</TTypographyTitle>
            <XMarkIcon class="h-6 w-6 ml-5 cursor-pointer" @click="handleClose" />
          </div>
          <!--Contenido-->
          <div>
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal-root {
  @apply fixed duration-[0.8s] transition-all -z-10 inset-0;
}
.modal {
  @apply bg-gray-500/75 z-10 fixed top-0 left-0 right-0 bottom-0 !ml-0 transition-all;
}
.modal-root--active {
  @apply z-20;
}

/* Animación pop y slide notoria para el modal blanco */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.modal-fade-enter-from {
  opacity: 0;
  transform: translateY(120px) scale(0.7);
}
.modal-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.modal-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(80px) scale(0.8);
}
</style>
