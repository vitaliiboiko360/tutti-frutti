<script setup>
import FruitsGroupEntryPoint from '~/src/FruitsGroupEntryPoint.vue';

const route = useRoute();
const groupName = route.query.name;
</script>

<template><FruitsGroupEntryPoint :groupName /></template>
