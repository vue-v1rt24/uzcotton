<script setup lang="ts"></script>

<template>
  <div class="top_wrap">
    <div class="container">
      <div class="top">
        <ul class="top__menu_1">
          <li>
            <NuxtLink to="#" class="top__akcii">
              <span>%</span>
              <span>Акции</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Доставка</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Оплата</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Новости</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Отзывы</NuxtLink>
          </li>
        </ul>

        <!--  -->

        <ul class="top__menu_2">
          <li class="top__menu_2__auth">
            <NuxtLink to="#" class="top__menu_2__auth_vhod">
              <span class="top__menu_2__auth_vhod__person"><SvgPerson /></span>
              <span>Вход</span>
            </NuxtLink>
            <span class="top__menu_2__auth_vhod__slash">/</span>
            <NuxtLink to="#">Регистрация</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="top__menu_2__favorite">
              <SvgFavorite />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="top__menu_2__cart">
              <span class="top__menu_2__cart_count">0</span>
              <SvgCart />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.top_wrap {
  background-color: var(--color-27292e);
}

.top {
  height: 54px;
  color: var(--color-afafaf);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*  */

.top__menu_1 {
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 40px;

  /* a */
  a {
    text-decoration: none;
    text-underline-offset: 4px;
    transition:
      color var(--transition),
      text-decoration var(--transition);

    /* hover */
    &:not(.top__akcii):hover,
    &.active {
      color: var(--white);
      text-decoration: underline;
    }
  }
}

/*  */
.top__akcii {
  width: 98px;
  height: 32px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
}

/*  */

.top__menu_2 {
  display: flex;
  column-gap: 33px;
  align-items: center;

  /* .top__menu_2__auth */
  .top__menu_2__auth {
    display: flex;
    align-items: center;
    column-gap: 3px;
    margin-right: 17px;
  }

  /* a */
  a {
    font-family: var(--third-family);
    font-size: 16px;
  }

  /* top__menu_2__auth_vhod__slash */
  .top__menu_2__auth_vhod__slash {
    display: block;
    height: 12px;
    overflow: hidden;
  }

  .top__menu_2__auth_vhod {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }
}

/*  */

.top__menu_2__cart {
  position: relative;
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
}
</style>
