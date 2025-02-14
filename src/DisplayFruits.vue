<script setup>
import FruitCard from './FruitCard.vue';
import Filter from './Filter.vue';
const { data } = defineProps(['data']);

const calories = defineModel('calories', { number: true });
const fat = defineModel('fat');
const sugar = defineModel('sugar');
const carbohydrates = defineModel('carbohydrates');
const protein = defineModel('protein');
const fruitsToDisplay = ref(data);

watch([calories, fat, sugar], () => {
  fruitsToDisplay.value = data.filter((fruit) => {
    return (
      (typeof calories.value == 'undefined' || calories.value === ''
        ? true
        : fruit.nutritions.calories <= calories.value) &&
      (typeof fat.value == 'undefined' || fat.value === ''
        ? true
        : fruit.nutritions.fat <= fat.value) &&
      (typeof sugar.value == 'undefined' || sugar.value === ''
        ? true
        : fruit.nutritions.sugar <= sugar.value)
    );
  });
});
</script>
<!-- {
    "name": "Persimmon",
    "id": 52,
    "family": "Ebenaceae",
    "order": "Rosales",
    "genus": "Diospyros",
    "nutritions": {
      "calories": 81,
      "fat": 0.0,
      "sugar": 18.0,
      "carbohydrates": 18.0,
      "protein": 0.0
    }
  }, -->
<template>
  <div :class="$style.outerContainer">
    <div :class="$style.mainColumn">
      <Filter
        v-model:calories.number="calories"
        v-model:fat="fat"
        v-model:sugar="sugar"
        :carbohydrates
        :protein
      />
      <div>
        <p>total fruits displayed: {{ fruitsToDisplay.length }}</p>
      </div>
      <div
        v-for="(fruit, index) in fruitsToDisplay"
        :key="index"
        :class="$style.cardWrap"
      >
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
