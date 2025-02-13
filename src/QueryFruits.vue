<script setup lang="ts">
import { queryFruits } from './etc';

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['fruits'],
  queryFn: queryFruits,
});
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error }}</span>
  <slot v-else :data></slot>
</template>
