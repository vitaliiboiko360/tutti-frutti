<script setup lang="ts">
import { LOCAL_STORAGE_FAVOURITES_KEY } from './constants';
import FruitCard from './FruitCard.vue';
import Filter from './Filter.vue';
import DisplayHead from './DisplayHead.vue';
const { data, groupName } = defineProps(['data', 'groupName']);

const caloriesFrom = defineModel('caloriesFrom');
const fatFrom = defineModel('fatFrom');
const sugarFrom = defineModel('sugarFrom');
const carbohydratesFrom = defineModel('carbohydratesFrom');
const proteinFrom = defineModel('proteinFrom');
const caloriesTo = defineModel('caloriesTo');
const fatTo = defineModel('fatTo');
const sugarTo = defineModel('sugarTo');
const carbohydratesTo = defineModel('carbohydratesTo');
const proteinTo = defineModel('proteinTo');

const storageValue = window.localStorage.getItem(LOCAL_STORAGE_FAVOURITES_KEY);

if (!storageValue) {
  window.localStorage.setItem(LOCAL_STORAGE_FAVOURITES_KEY, '');
}

const favouritesIds = storageValue
  ?.split(' ')
  ?.map((i) => {
    return parseInt(i, 10);
  })
  .filter((i) => !isNaN(i));

const fruitsToDisplay = ref(data);

watch(
  [
    caloriesTo,
    fatTo,
    sugarTo,
    carbohydratesTo,
    proteinTo,
    caloriesFrom,
    fatFrom,
    sugarFrom,
    carbohydratesFrom,
    proteinFrom,
  ],
  () => {
    fruitsToDisplay.value = data.filter((fruit) => {
      return (
        (typeof caloriesFrom.value == 'undefined' || caloriesFrom.value === ''
          ? true
          : fruit.nutritions.calories >= caloriesFrom.value) &&
        (typeof fatFrom.value == 'undefined' || fatFrom.value === ''
          ? true
          : fruit.nutritions.fat >= fatFrom.value) &&
        (typeof sugarFrom.value == 'undefined' || sugarFrom.value === ''
          ? true
          : fruit.nutritions.sugar >= sugarFrom.value) &&
        (typeof carbohydratesFrom.value == 'undefined' ||
        carbohydratesFrom.value === ''
          ? true
          : fruit.nutritions.carbohydrates >= carbohydratesFrom.value) &&
        (typeof proteinFrom.value == 'undefined' || proteinFrom.value === ''
          ? true
          : fruit.nutritions.protein >= proteinFrom.value) &&
        (typeof caloriesTo.value == 'undefined' || caloriesTo.value === ''
          ? true
          : fruit.nutritions.calories <= caloriesTo.value) &&
        (typeof fatTo.value == 'undefined' || fatTo.value === ''
          ? true
          : fruit.nutritions.fat <= fatTo.value) &&
        (typeof sugarTo.value == 'undefined' || sugarTo.value === ''
          ? true
          : fruit.nutritions.sugar <= sugarTo.value) &&
        (typeof carbohydratesTo.value == 'undefined' ||
        carbohydratesTo.value === ''
          ? true
          : fruit.nutritions.carbohydrates <= carbohydratesTo.value) &&
        (typeof proteinTo.value == 'undefined' || proteinTo.value === ''
          ? true
          : fruit.nutritions.protein <= proteinTo.value)
      );
    });
  }
);
</script>

<template>
  <DisplayHead :groupName />
  <div :class="$style.outerContainer">
    <div :class="$style.mainColumn">
      <Filter
        v-model:caloriesFrom.number="caloriesFrom"
        v-model:fatFrom.number="fatFrom"
        v-model:sugarFrom.number="sugarFrom"
        v-model:carbohydratesFrom.number="carbohydratesFrom"
        v-model:proteinFrom.number="proteinFrom"
        v-model:caloriesTo.number="caloriesTo"
        v-model:fatTo.number="fatTo"
        v-model:sugarTo.number="sugarTo"
        v-model:carbohydratesTo.number="carbohydratesTo"
        v-model:proteinTo.number="proteinTo"
      />
      <div>
        <p>total fruits displayed: {{ fruitsToDisplay?.length }}</p>
      </div>
      <div
        v-for="(fruit, index) in fruitsToDisplay"
        :key="index"
        :class="$style.cardWrap"
      >
        <FruitCard :fruit :isFavourite="favouritesIds?.includes(fruit.id)" />
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
