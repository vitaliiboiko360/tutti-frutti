import { defineStore } from 'pinia';

declare type Counter = { count: number };

export const useCounterStore = defineStore('counter', {
  state: (): Counter => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
