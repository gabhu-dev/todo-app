<script setup lang="ts">
import { reactive, computed } from "vue"
import TInput from "@/components/atoms/TInput.vue"
// import TSelect from "@/components/atoms/TSelectXX.vue"
import TSelect from "@/components/atoms/TSelect.vue"
import ModalTask from "@/components/molecules/ModalTask.vue"
import { LIST_STATUS } from "@/utils/status"

const filters = reactive({
  search: "",
  type: "",
  typeDemo: ""
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
      />
      <!-- <TSelect
        v-model:value="filters.type"
        label="Tipo (TSelect)"
        name="type"
        placeholder="Seleccione"
        :options="options"
      /> -->
      <TSelect
        v-model="filters.typeDemo"
        label="Tipo"
        name="typeDemo"
        placeholder="Seleccione"
        :options="options"
      />
    </div>
    <ModalTask />
  </div>
</template>
