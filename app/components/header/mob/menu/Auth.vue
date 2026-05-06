<script setup lang="ts"></script>

<template>
  <div class="auth">
    <NuxtLink to="#" class="auth__person">
      <span class="auth__person"><SvgPerson /></span>
      <span>Вход / Регистрация</span>
    </NuxtLink>

    <!--  -->
    <NuxtLink to="#" class="auth__favorite">
      <SvgFavorite />
    </NuxtLink>

    <!--  -->
    <HeaderCart class="auth_cart" />
  </div>
</template>

<style lang="css" scoped>
.auth {
  display: flex;
  align-items: center;
}

/*  */
.auth__person {
  font-family: var(--third-family);
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 12px;

  /* svg */
  svg {
    color: var(--black);
  }
}

/*  */
.auth__favorite {
  margin-left: auto;
  margin-right: 33px;

  /* svg */
  svg {
    color: var(--black);
  }
}
</style>
