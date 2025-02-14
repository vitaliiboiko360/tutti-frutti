<script setup>
import ButtonFavorites from './ButtonFavorites.vue';
const { fruit, isFavourite } = defineProps(['fruit', 'isFavourite']);
</script>

<template>
  <div :class="$style.fruitItem">
    <div :class="$style.fruitHeader">
      <p>
        {{ fruit.name }}
      </p>
      <div :class="$style.favouritesBlock">
        <ButtonFavorites :isFavourite :id="fruit.id" />
      </div>
    </div>
    <div :class="$style.detailsInfo">
      <div :class="$style.firstColumn">
        <p>group:</p>
        <!-- <p>order:</p>
        <p>genus:</p> -->
      </div>
      <div>
        <p>{{ fruit.family }}</p>
        <!-- <p>{{ fruit.order }}</p>
        <p>{{ fruit.genus }}</p> -->
      </div>
    </div>
    <div :class="$style.nutritionsDetails">
      <p>nutritions:</p>
      <div :class="$style.nutritionsRows">
        <div :class="$style.nutritionsLabels">
          <p>calories</p>
          <p>fat</p>
          <p>sugar</p>
          <p>carbohydrates</p>
          <p>protein</p>
        </div>
        <div>
          <p>{{ fruit.nutritions.calories }}</p>
          <p>{{ fruit.nutritions.fat }}</p>
          <p>{{ fruit.nutritions.sugar }}</p>
          <p>{{ fruit.nutritions.carbohydrates }}</p>
          <p>{{ fruit.nutritions.protein }}</p>
        </div>
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
.fruitHeader {
  display: flex;
  justify-content: space-between;
  p {
    display: block;
  }
}
.favouritesBlock {
  align-self: flex-end;
}
.nutritionsDetails {
  font-size: 0.9rem;
  p {
    margin: 0;
  }
}
.nutritionsRows {
  display: flex;
  margin-left: 0.8rem;
  div p {
    margin: 0.1rem 0;
  }
}
.nutritionsLabels {
  margin-right: 1rem;
}
.fruitItem {
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 14rem;
  --parent-border-color: #e5e5e5;
  --color-snow: #fffafa;
  border: solid transparent;
  border-radius: 12px;
  border-width: 2px 2px 4px;
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
