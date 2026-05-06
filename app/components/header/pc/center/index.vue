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
            <SvgLogo />
          </NuxtLink>

          <SvgLogo v-else />
        </div>

        <!-- Поиск -->
        <UiInput placeholder="Поиск" v-model="search">
          <template>
            <SvgSearch data-allow-mismatch />
          </template>
        </UiInput>

        <!-- Адрес -->
        <HeaderPcCenterAddress class="center__address" />

        <!-- Телефон и почта -->
        <HeaderPcCenterTelMail class="center__tel_email" />

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

  /* .label */
  .label {
    svg {
      color: #909090;
    }
  }
}

/*  */
.center__address {
  /* media */
  @media (max-width: 1400px) {
    display: none;
  }
}

/*  */
.center__tel_email {
  /* media */
  @media (max-width: 1100px) {
    display: none;
  }
}
</style>
