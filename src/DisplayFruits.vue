<script setup>
import FruitCard from './FruitCard.vue';
const { data } = defineProps(['data']);
</script>

<template>
  <div :class="$style.outerContainer">
    <div>
      <div v-for="(fruit, index) in data" :key="index">
        <FruitCard :fruit />
      </div>
    </div>
  </div>
</template>

<style module>
.outerContainer {
  display: grid;
}
</style>
