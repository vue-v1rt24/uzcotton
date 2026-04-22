<script setup lang="ts">
defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  clickEvent: [];
}>();
</script>

<template>
  <button @click="emit('clickEvent')" type="button" class="btn">{{ title }}</button>
</template>

<style lang="css" scoped>
.btn {
  width: 178px;
  height: 44px;
  background-color: transparent;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--black);
  border: 1px solid var(--black);
  border-radius: 12px;
  display: block;
}
</style>
