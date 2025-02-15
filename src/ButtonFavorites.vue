<script setup>
import { LOCAL_STORAGE_FAVOURITES_KEY } from './constants';
import { ref } from 'vue';
const { isFavourite, id } = defineProps(['isFavourite', 'id']);
const isSelected = ref(isFavourite);
const refImg = ref();
const onClick = () => {
  if (isSelected.value) {
    refImg.value.setAttribute('src', 'star.svg');

    const favouritesIds = window.localStorage
      .getItem(LOCAL_STORAGE_FAVOURITES_KEY)
      ?.split(' ')
      ?.map((i) => {
        return parseInt(i, 10);
      })
      .filter((i) => !isNaN(i));
    const index = favouritesIds?.indexOf(id);
    if (index != -1) {
      favouritesIds.splice(index, 1);
    }
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVOURITES_KEY,
      favouritesIds.join(' ')
    );
    isSelected.value = false;
  } else {
    refImg.value.setAttribute('src', 'selectedStar.svg');
    const favouritesIds = window.localStorage
      .getItem(LOCAL_STORAGE_FAVOURITES_KEY)
      .split(' ')
      .map((i) => {
        return parseInt(i, 10);
      })
      .filter((i) => !isNaN(i));
    favouritesIds.push(id);
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVOURITES_KEY,
      favouritesIds.join(' ')
    );
    isSelected.value = true;
  }
};
</script>

<template>
  <div :class="$style.favouritesBlock">
    <button @click="onClick" :class="$style.buttonFavourites">
      <img
        :ref="(el) => (refImg = el)"
        :src="isSelected ? `selectedStar.svg` : `star.svg`"
      />
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
