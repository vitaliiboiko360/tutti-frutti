<script setup>
import QueryFruits from './QueryFruits.vue';
import DisplayFruits from './DisplayFruits.vue';
</script>

<template>
  <QueryFruits v-slot="slotProps">
    <DisplayFruits :data="slotProps.data"></DisplayFruits>
  </QueryFruits>
</template>
