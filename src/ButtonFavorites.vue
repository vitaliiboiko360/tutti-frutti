<script setup>
import { ref } from 'vue';

const refImg = ref();
const onClick = () => {
  console.log(refImg.value);
};
</script>

<template>
  <div>
    <button @click="onClick" :class="$style.buttonFavourites">
      <img :ref="(el) => (refImg = el)" src="star.svg" />
    </button>
  </div>
</template>

<style module>
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
