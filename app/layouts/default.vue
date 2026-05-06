<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div>
    <header-pc v-if="viewport.isGreaterOrEquals('screen901')" />
    <header-mob v-else />

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="css" scoped></style>
