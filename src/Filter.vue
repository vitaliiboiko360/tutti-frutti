<script setup>
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
</script>

<template>
  <div :class="$style.outerFilter">
    <div :class="$style.filterPanel">
      <div :class="$style.filterItem">
        <label :class="$style.filterItemTitle">calories</label>
        <label for="caloriesFrom">from</label>
        <input
          v-model.number="caloriesFrom"
          type="number"
          name="calories"
          step="0.01"
          min="0"
        />
        <label for="caloriesTo">to</label>
        <input
          v-model.number="caloriesTo"
          type="number"
          name="calories"
          step="0.01"
          min="0"
        />
      </div>
      <div :class="$style.filterItem">
        <label :class="$style.filterItemTitle">fat</label>
        <label for="fatFrom">from</label>
        <input
          v-model.number="fatFrom"
          type="number"
          name="fat"
          step="0.01"
          min="0"
        />
        <label for="fatTo">to</label>
        <input
          v-model.number="fatTo"
          type="number"
          name="fat"
          step="0.01"
          min="0"
        />
      </div>
      <div :class="$style.filterItem">
        <label :class="$style.filterItemTitle">sugar</label>
        <label for="sugarFrom">from</label>
        <input
          v-model.number="sugarFrom"
          type="number"
          name="sugar"
          step="0.01"
          min="0"
        />
        <label for="sugarTo">to</label>
        <input
          v-model.number="sugarTo"
          type="number"
          name="sugar"
          step="0.01"
          min="0"
        />
      </div>
      <div :class="$style.filterItem">
        <label :class="$style.filterItemTitle">carbohydrates</label>
        <label for="carbohydratesFrom">from</label>
        <input
          v-model.number="carbohydratesFrom"
          type="number"
          name="carbohydrates"
          step="0.01"
          min="0"
        />
        <label for="carbohydratesTo">to</label>
        <input
          v-model.number="carbohydratesTo"
          type="number"
          name="carbohydrates"
          step="0.01"
          min="0"
        />
      </div>
      <div :class="$style.filterItem">
        <label :class="$style.filterItemTitle">protein</label>
        <label for="proteinFrom">from</label>
        <input
          v-model.number="proteinFrom"
          type="number"
          name="protein"
          step="0.01"
          min="0"
        />
        <label for="proteinTo">to</label>
        <input
          v-model.number="proteinTo"
          type="number"
          name="protein"
          step="0.01"
          min="0"
        />
      </div>
    </div>
  </div>
</template>

<style module>
.outerFilter {
  display: flex;
  justify-content: center;
}
.filterPanel {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}
.filterItem {
  display: flex;
  flex-direction: column;
  input {
    width: 3.5rem;
    margin: 0 0.6rem 0 0.3rem;
  }
}
.filterItemTitle {
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0.5rem 0.3rem 0;
}
</style>
