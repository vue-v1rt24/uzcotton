<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="logo">
    <NuxtLink v-if="route.path !== '/'" to="/">
      <SvgLogo />
    </NuxtLink>

    <SvgLogo v-else />
  </div>
</template>

<style lang="css" scoped></style>
