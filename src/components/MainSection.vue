<script setup lang="ts">
import Panel from "@/components/organisms/Panel.vue"
import Filters from "@/components/molecules/Filters.vue"
</script>

<template>
  <h4 class="text-3xl font-semibold mt-10 mb-6">MI TODO LIST</h4>
  <Filters class="mb-8" />
  <div class="grid grid-cols-12 gap-3">
    <Panel v-for="i in 4" :key="i" class="grid col-span-3" />
  </div>
</template>
