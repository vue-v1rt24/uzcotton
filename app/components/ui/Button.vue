<script setup lang="ts">
const { type = 'button' } = defineProps<{
  type?: 'button' | 'submit';
  title: string;
}>();

const emit = defineEmits<{
  clickEvent: [];
}>();
</script>

<template>
  <button :type class="btn" @click="emit('clickEvent')">
    {{ title }}
  </button>
</template>

<style lang="css" scoped>
.btn {
  width: 178px;
  height: 44px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: var(--black);

  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 12px;
}
</style>
