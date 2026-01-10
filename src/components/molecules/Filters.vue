<script setup lang="ts">
import { reactive, computed } from "vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import ModalTask from "@/components/molecules/ModalTask.vue"
import { LIST_STATUS } from "@/utils/status"

const filters = reactive({
  search: "",
  type: "",
})

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
    <ModalTask />
  </div>
</template>
