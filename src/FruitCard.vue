<script setup>
const { fruit } = defineProps(['fruit']);
</script>

<template>
  <div :class="$style.fruitItem">
    <p>
      {{ fruit.name }}
    </p>
    <p></p>
  </div>
</template>

<style module>
.fruitItem {
  padding-left: 1rem;
  padding-top: 1rem;
  margin-bottom: 2rem;
  height: 18rem;
  width: 16rem;
  --parent-border-color: #e5e5e5;
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
    background-color: var(
      --web-ui_card-background-color,
      rgb(var(--color-snow))
    );
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
