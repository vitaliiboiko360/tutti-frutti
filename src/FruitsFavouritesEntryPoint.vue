<script setup lang="ts">
import { ref } from 'vue';
import { LOCAL_STORAGE_FAVOURITES_KEY } from './constants';
import DisplayFruits from './DisplayFruits.vue';

const { data } = defineProps(['data']);

const favouritesIds = ref([]);

const onStorage = (event) => {
  if (event.key != LOCAL_STORAGE_FAVOURITES_KEY) {
    return;
  }
  favouritesIds.value = event.newValue
    ?.split(' ')
    ?.map((i) => {
      return parseInt(i, 10);
    })
    ?.filter((i) => !isNaN(i));
};

onBeforeMount(() => {
  const storageValue = window.localStorage.getItem(
    LOCAL_STORAGE_FAVOURITES_KEY
  );

  console.log(`onMounted storageValue == ${storageValue}`);

  if (!storageValue) {
    window.localStorage.setItem(LOCAL_STORAGE_FAVOURITES_KEY, '');
  }

  favouritesIds.value = storageValue
    ?.split(' ')
    ?.map((i) => {
      return parseInt(i, 10);
    })
    ?.filter((i) => !isNaN(i));

  window.addEventListener('storage', onStorage);
});

const favourites = ref();

watch(
  [favouritesIds],
  () => {
    favourites.value = data.filter((fruit) => {
      return favouritesIds.value.includes(fruit.id);
    });
    console.log(`watch data.length = ${data.length}`);
  },
  { flush: 'sync' }
);

if (favouritesIds.value?.length > 0) {
  favourites.value = data.filter((fruit) => {
    return favouritesIds.value.includes(fruit.id);
  });
}

onUnmounted(() => {
  window.removeEventListener('storage', onStorage);
});
</script>

<template>
  <DisplayFruits
    :data="favourites"
    :disableFilter="true"
    :key="favourites.length"
  ></DisplayFruits>
</template>
