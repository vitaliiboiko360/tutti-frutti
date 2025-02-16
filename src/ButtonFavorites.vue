<script setup>
import { LOCAL_STORAGE_FAVORITES_KEY } from './constants';
import { ref } from 'vue';
const { isFavorite, id } = defineProps(['isFavorite', 'id']);
const isSelected = ref(isFavorite);
const refImg = ref();

// this will need to be called for storage event to be propogated
// on the same browsing context
// read more at https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
const dispatchStorageEvent = (favoritesIds) => {
  const event = new StorageEvent('storage', {
    key: LOCAL_STORAGE_FAVORITES_KEY,
    newValue: favoritesIds.join(' '),
  });
  window.dispatchEvent(event);
};

const onClick = () => {
  if (isSelected.value) {
    const favoritesIds = window.localStorage
      .getItem(LOCAL_STORAGE_FAVORITES_KEY)
      ?.split(' ')
      ?.map((i) => {
        return parseInt(i, 10);
      })
      .filter((i) => !isNaN(i));
    const index = favoritesIds?.indexOf(id);
    if (index != -1) {
      favoritesIds.splice(index, 1);
    }
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVORITES_KEY,
      favoritesIds.join(' ')
    );
    dispatchStorageEvent(favoritesIds);
    refImg.value.setAttribute('src', 'star.svg');
    isSelected.value = false;
  } else {
    refImg.value.setAttribute('src', 'selectedStar.svg');
    const favoritesIds = window.localStorage
      .getItem(LOCAL_STORAGE_FAVORITES_KEY)
      .split(' ')
      .map((i) => {
        return parseInt(i, 10);
      })
      .filter((i) => !isNaN(i));
    favoritesIds.push(id);
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVORITES_KEY,
      favoritesIds.join(' ')
    );
    dispatchStorageEvent(favoritesIds);
    isSelected.value = true;
  }
};
</script>

<template>
  <div :class="$style.favoritesBlock">
    <button @click="onClick" :class="$style.buttonFavorites">
      <img
        :ref="(el) => (refImg = el)"
        :src="isSelected ? `selectedStar.svg` : `star.svg`"
      />
    </button>
    <div :class="[$style.linkFavorites, { [$style.hidden]: !isSelected }]">
      <NuxtLink to="/favorites">favorites</NuxtLink>
    </div>
  </div>
</template>

<style module>
.favoritesBlock {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 2.5rem;
}
.hidden {
  display: none;
}
.linkFavorites {
  position: absolute;
  right: -0.3rem;
  bottom: -1rem;
}
.buttonFavorites {
  cursor: pointer;
  border: 0;
  background-color: transparent;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
