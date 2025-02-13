<script setup>
import FruitCard from './FruitCard.vue';
const { data } = defineProps(['data']);
</script>

<template>
  <div :class="$style.outerContainer">
    <div :class="$style.mainColumn">
      <div v-for="(fruit, index) in data" :key="index" :class="$style.cardWrap">
        <FruitCard :fruit />
      </div>
    </div>
  </div>
</template>

<style module>
.outerContainer {
  display: grid;
  grid-template-columns: 2rem auto 2rem;
}
.mainColumn {
  grid-column-start: 2;
  grid-column-end: 2;
  justify-self: center;
}
.cardWrap {
  width: fit-content;
}
</style>
