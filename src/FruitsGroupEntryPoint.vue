<script setup>
import DisplayFruits from './DisplayFruits.vue';
import QueryFruits from './QueryFruits.vue';
const { groupName } = defineProps(['groupName']);
</script>

<template>
  <QueryFruits v-slot="slotProps" :groupName
    ><DisplayFruits :data="slotProps.data" :groupName
  /></QueryFruits>
</template>
