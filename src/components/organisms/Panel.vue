<script setup lang="ts">
import TabPanel from "@/components/molecules/TabPanel.vue"
import CardTask from "@/components/molecules/CardTask.vue"
</script>
<template>
  <div>
    <TabPanel class="mb-5" :status="1" />
    <div>
      <CardTask v-for="i in 6" class="mb-3" title="Message" :status="1" date="ee" />
    </div>
  </div>
</template>
