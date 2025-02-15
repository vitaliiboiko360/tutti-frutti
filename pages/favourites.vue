<script setup>
import FruitsFavouritesEntryPoint from '~/src/FruitsFavouritesEntryPoint.vue';
import QueryFruits from '~/src/QueryFruits.vue';
</script>

<template>
  <QueryFruits v-slot="slotProps">
    <FruitsFavouritesEntryPoint :data="slotProps.data" />
  </QueryFruits>
</template>
