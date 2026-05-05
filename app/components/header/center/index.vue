<script setup lang="ts">
const route = useRoute();

// Поиск
const search = ref('');

// Клик по кнопке "Заказать звонок"
const zvonok = () => {
  console.log('Звонок');
};
</script>

<template>
  <div class="center_wrap">
    <div class="container">
      <div class="center">
        <!-- Логотип -->
        <div class="center__logo">
          <NuxtLink v-if="route.path !== '/'" to="/">
            <img src="/img/logo.svg" alt="" />
          </NuxtLink>

          <img v-else src="/img/logo.svg" alt="" />
        </div>

        <!-- Поиск -->
        <UiInput placeholder="Поиск" v-model="search">
          <template>
            <SvgSearch data-allow-mismatch />
          </template>
        </UiInput>

        <!-- Адрес -->
        <HeaderCenterAddress />

        <!-- Телефон и почта -->
        <HeaderCenterTelMail />

        <!-- Заказать звонок -->
        <UiButton title="Заказать звонок" @click-event="zvonok" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.center_wrap {
  background-color: var(--color-f9f9f9);
}

/*  */

.center {
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
