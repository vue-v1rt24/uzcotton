<script setup lang="ts"></script>

<template>
  <NuxtLink to="#" class="top__menu_2__cart">
    <span class="top__menu_2__cart_count">0</span>
    <SvgCart />
  </NuxtLink>
</template>

<style lang="css" scoped>
.top__menu_2__cart {
  position: relative;

  /* svg */
  svg {
    color: var(--white);

    /* media */
    @media (max-width: 1100px) {
      width: 22px;
      height: 22px;
    }

    @media (max-width: 900px) {
      color: var(--black);
    }
  }
}

.top__menu_2__cart_count {
  position: absolute;
  top: -20px;
  right: -10px;
  height: 21px;

  font-family: var(--third-family);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: var(--white);

  background-color: var(--red);
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;

  /* media */
  @media (max-width: 1100px) {
    height: 20px;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    top: -5px;
    right: -5px;
    height: 14px;
    font-size: 10px;
    padding: 0 4px;
  }
}
</style>
