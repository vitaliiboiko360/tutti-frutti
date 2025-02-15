<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { queryFruits } from './etc';
const { groupName } = defineProps(['groupName']);
const { isLoading, isError, data, error } = useQuery({
  queryKey: [`fruits-${groupName}`],
  queryFn: async () => {
    let data = await queryFruits();
    if (groupName) {
      data = data.filter((fruit) => {
        return fruit.family == groupName;
      });
    }
    return data;
  },
});
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error }}</span>
  <slot v-else :data></slot>
</template>
