<script setup lang="ts">
import { reactive, computed, ref } from "vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import TButton from "@/components/atoms/TButton.vue"
import ModalTask from "@/components/molecules/ModalTask.vue"
import { LIST_STATUS } from "@/utils/status"
import { ButtonType } from "@/@types/button"

const filters = reactive({
  search: "",
  type: "",
})

const isModalOpen = ref(false)

const options = computed(() => {
  return Object.values(LIST_STATUS).map((option) => {
    return { label: option.title, value: option.status }
  })
})
</script>
<template>
  <div class="flex justify-between items-end">
    <div class="flex space-x-3">
      <TInput
        v-model:value="filters.search"
        label="Tarea"
        name="task"
        placeholder="Escribe aquí..."
        class="w-[250px]"
      />
      <TSelect
        v-model="filters.type"
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="options"
        class="w-[250px]"
      />
    </div>
    <TButton :type="ButtonType.Primary" @click="isModalOpen = true"> Crear tarea </TButton>
    <ModalTask v-model:open="isModalOpen" />
  </div>
</template>
