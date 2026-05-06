<script setup lang="ts"></script>

<template>
  <header class="header_mod">
    <!-- Лого -->
    <div class="logo">
      <SvgLogo />
    </div>

    <div class="header_mod__right">
      <!-- Поиска -->
      <div class="search">
        <SvgSearch />
      </div>

      <!-- Корзина -->
      <HeaderCart />

      <!-- Меню -->
      <HeaderMobMenu />
    </div>
  </header>
</template>

<style lang="css" scoped>
.header_mod {
  position: fixed;
  width: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

/*  */

.header_mod__right {
  display: flex;
  align-items: center;
  column-gap: 24px;
}

.logo {
  position: relative;
  z-index: 10;

  /* svg */
  svg {
    width: 155px;
    height: 40px;
  }
}

/*  */
.search {
  /* svg */
  svg {
    width: 22px;
    height: 22px;
    color: var(--black);
  }
}
</style>
