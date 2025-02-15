<script setup>
const { groupName } = defineProps(['groupName']);
</script>

<template>
  <div :class="$style.headDisplay">
    <h3 v-if="groupName">Group {{ groupName }}</h3>
    <h2 v-else>All Fruits</h2>
  </div>
</template>

<style module>
.headDisplay {
  text-align: center;
  margin: 0 2rem;
}
</style>
