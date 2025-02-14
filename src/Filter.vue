<script setup>
const calories = defineModel('calories');
const fat = defineModel('fat');
const sugar = defineModel('sugar');
</script>

<template>
  <div :class="$style.filterPanel">
    <label for="calories">calories</label>
    <input
      v-model.number="calories"
      type="number"
      name="calories"
      step="0.01"
      min="0"
    />
    <label for="fat">fat</label>
    <input v-model.number="fat" type="number" name="fat" step="0.01" min="0" />
    <label for="sugar">sugar</label>
    <input
      v-model.number="sugar"
      type="number"
      name="sugar"
      step="0.01"
      min="0"
    />
    <label for="carbohydrates">carbohydrates</label>
    <input type="number" name="carbohydrates" step="0.01" min="0" />
    <label for="protein">protein</label>
    <input type="number" name="protein" step="0.01" min="0" />
  </div>
</template>

<style module>
.filterPanel {
  display: flex;
  align-content: center;
  margin: 1rem 0;
  input {
    width: 3.5rem;
    margin: 0 0.6rem 0 0.3rem;
  }
}
</style>
