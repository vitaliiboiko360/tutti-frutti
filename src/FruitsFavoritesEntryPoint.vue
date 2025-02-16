<script setup lang="ts">
import { ref } from 'vue';
import { LOCAL_STORAGE_FAVORITES_KEY } from './constants';
import DisplayFruits from './DisplayFruits.vue';

const { data } = defineProps(['data']);

const favoritesIds = ref([]);

const onStorage = (event) => {
  if (event.key != LOCAL_STORAGE_FAVORITES_KEY) {
    return;
  }
  favoritesIds.value = event.newValue
    ?.split(' ')
    ?.map((i) => {
      return parseInt(i, 10);
    })
    ?.filter((i) => !isNaN(i));
};

onBeforeMount(() => {
  const storageValue = window.localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);

  if (!storageValue) {
    window.localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, '');
  }

  favoritesIds.value = storageValue
    ?.split(' ')
    ?.map((i) => {
      return parseInt(i, 10);
    })
    ?.filter((i) => !isNaN(i));

  window.addEventListener('storage', onStorage);
});

const favorites = ref();

watch(
  [favoritesIds],
  () => {
    favorites.value = data.filter((fruit) => {
      return favoritesIds.value.includes(fruit.id);
    });
    console.log(`watch data.length = ${data.length}`);
  },
  { flush: 'sync' }
);

if (favoritesIds.value?.length > 0) {
  favorites.value = data.filter((fruit) => {
    return favoritesIds.value.includes(fruit.id);
  });
}

onUnmounted(() => {
  window.removeEventListener('storage', onStorage);
});
</script>

<template>
  <DisplayFruits
    :data="favorites"
    :disableFilter="true"
    :key="favorites.length"
  ></DisplayFruits>
</template>
