<script setup>
import FruitsFavoritesEntryPoint from '~/src/FruitsFavoritesEntryPoint.vue';
import QueryFruits from '~/src/QueryFruits.vue';
</script>

<template>
  <QueryFruits v-slot="slotProps">
    <FruitsFavoritesEntryPoint :data="slotProps.data" />
  </QueryFruits>
</template>
