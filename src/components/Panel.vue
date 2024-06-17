<script setup lang="ts">
import TabPanel from "@/components/TabPanel.vue"
import CardTask from "@/components/CardTask.vue"
</script>
<template>
  <div>
    <TabPanel class="mb-5" />
    <div>
      <CardTask v-for="i in 6" class="mb-3" title="Message" :status="1" date="ee" />
    </div>
  </div>
</template>
