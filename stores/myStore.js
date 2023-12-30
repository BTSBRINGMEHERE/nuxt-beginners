export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Youngbin");
  const doubleCount = computed(() => count.value * 2);

  const increment = () => {
    count.value++;
  };

  return { count, name, doubleCount, increment };
});
