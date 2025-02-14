<script setup></script>

<template>
  <div>
    <button :class="$style.buttonFavourites">
      <img src="/star.svg" />
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
