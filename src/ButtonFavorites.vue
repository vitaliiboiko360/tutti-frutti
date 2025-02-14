<script setup>
import { ref } from 'vue';

const isSelected = ref();
const refImg = ref();
const onClick = () => {
  if (isSelected.value) {
    refImg.value.setAttribute('src', 'star.svg');
    isSelected.value = false;
  } else {
    refImg.value.setAttribute('src', 'selectedStar.svg');
    isSelected.value = true;
  }
};
</script>

<template>
  <div :class="$style.favouritesBlock">
    <button @click="onClick" :class="$style.buttonFavourites">
      <img :ref="(el) => (refImg = el)" :src="`star.svg`" />
    </button>
    <div :class="[$style.linkFavourites, { [$style.hidden]: !isSelected }]">
      <NuxtLink to="/favourites">favourites</NuxtLink>
    </div>
  </div>
</template>

<style module>
.favouritesBlock {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 2.5rem;
}
.hidden {
  display: none;
}
.linkFavourites {
  position: absolute;
  right: -0.3rem;
  bottom: -1rem;
}
.buttonFavourites {
  cursor: pointer;
  border: 0;
  background-color: transparent;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
