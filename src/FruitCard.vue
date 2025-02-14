<script setup>
const { fruit } = defineProps(['fruit']);
</script>

<template>
  <div :class="$style.fruitItem">
    <p>
      {{ fruit.name }}
    </p>
    <p></p>
    <div :class="$style.detailsInfo">
      <div :class="$style.firstColumn">
        <p>family:</p>
        <p>order:</p>
        <p>genus:</p>
      </div>
      <div>
        <p>{{ fruit.family }}</p>
        <p>{{ fruit.order }}</p>
        <p>{{ fruit.genus }}</p>
      </div>
    </div>
  </div>
</template>

<style module>
.firstColumn {
  margin-right: 0.3rem;
}
.detailsInfo {
  display: flex;
}
.fruitItem {
  padding-left: 1rem;
  padding-top: 1rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 14rem;
  --parent-border-color: #e5e5e5;
  --color-snow: #fffafa;
  border: solid transparent;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  &::before {
    background-color: var(--color-snow);
    border: 2px solid var(--parent-border-color);
    border-radius: 12px;
    bottom: -2px;
    box-shadow: 0 2px 0 var(--parent-border-color);
    content: '';
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    z-index: -1;
  }
}
</style>
