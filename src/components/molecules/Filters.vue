<script setup lang="ts">
import { reactive } from "vue"
import TInput from "@/components/atoms/TInput.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import AddModal from "@/components/molecules/AddModal.vue"

const filters = reactive({
  search: "",
  type: "",
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
      />
      <TSelect
        v-model:value="filters.type"
        label="Tipo"
        name="type"
        placeholder="Seleccione"
        :options="[{ value: 'todo', label: 'TODO' }]"
      />
    </div>
    <AddModal />
  </div>
</template>
