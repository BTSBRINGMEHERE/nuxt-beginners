<script setup>
// definePageMeta({
//   middleware: "auth",
// });

const response = await $fetch("api/hello");
</script>

<template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
  </div>
</template>

<style lang="scss" scoped></style>
