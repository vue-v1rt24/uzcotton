<script setup lang="ts">
const { type = 'text' } = defineProps<{
  type?: 'text' | 'password';
  placeholder?: string;
}>();

//
const id = useId();

//
const modelValue = defineModel({ required: true });
</script>

<template>
  <label class="label">
    <span v-if="$slots.default" class="label__img">
      <slot />
    </span>

    <input :type :id :placeholder v-model="modelValue" />
  </label>
</template>

<style lang="css" scoped>
.label {
  position: relative;
  width: 371px;
  height: 46px;
  background-color: var(--color-f2f2f2);
  border: 1px solid var(--color-e3e3e3);
  border-radius: 12px;
  overflow: hidden;

  /* input */
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    padding: 0 24px;

    font-family: var(--font-family);
    font-weight: 400;
    color: #868686;

    /* .label__img */
    .label__img + & {
      padding: 0 24px 0 48px;
    }
  }
}

/*  */
.label__img {
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
}
</style>
