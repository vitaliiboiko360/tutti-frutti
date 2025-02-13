<script setup>
const { data } = defineProps(['data']);
</script>

<template>
  <div>
    <div v-for="(element, index) in data" :key="index">
      <p>
        {{ element.name }}
      </p>
    </div>
  </div>
</template>
