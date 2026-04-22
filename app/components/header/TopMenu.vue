<script setup lang="ts">
const menus = [
  { title: 'Акции', symbol: '%', link: '#' },
  { title: 'Доставка', symbol: '', link: '#' },
  { title: 'Оплата', symbol: '', link: '#' },
  { title: 'FAQ', symbol: '', link: '#' },
  { title: 'Новости', symbol: '', link: '#' },
  { title: 'Отзывы', symbol: '', link: '#' },
];
</script>

<template>
  <div class="top_menu_wrap">
    <div class="container">
      <div class="top_menu">
        <ul class="top_menu__list">
          <li v-for="{ title, symbol, link } in menus" :key="title" class="top_menu__list_item">
            <NuxtLink :to="link" :class="{ highlighting: symbol }">
              <span v-if="symbol">{{ symbol }}</span>
              <span>{{ title }}</span>
            </NuxtLink>
          </li>
        </ul>

        <!--  -->
        <div class="top_menu__dop">
          <ul class="auth">
            <li class="auth__person">
              <SvgPerson />
              <NuxtLink to="/">Вход</NuxtLink>
            </li>
            <li>/</li>
            <li>
              <NuxtLink to="/">Регистрация </NuxtLink>
            </li>
            <li></li>
          </ul>

          <!--  -->
          <ul class="top_menu__basket">
            <li>
              <NuxtLink to="#">
                <SvgHeart />
              </NuxtLink>
            </li>
            <li class="basket" data-count="0">
              <NuxtLink to="#">
                <SvgBasket />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.top_menu_wrap {
  background-color: #27292e;
}

.top_menu {
  height: 54px;
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*  */
.top_menu__list {
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  display: flex;
  column-gap: 40px;

  /* a */
  a {
    width: 98px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
  }
}

/*  */
.highlighting {
  color: var(--white);
  background-color: var(--red);
  border-radius: 12px;
}

/*  */

.top_menu__dop {
  display: flex;
  align-items: center;
  column-gap: 50px;
}

.auth {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--gray);
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.auth__person {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

/*  */

.top_menu__basket {
  display: flex;
  align-items: center;
  column-gap: 33px;
  padding-top: 6px;
}

/*  */
.basket {
  position: relative;

  /* before */
  &::before {
    content: attr(data-count);
    position: absolute;
    top: -8px;
    left: 18px;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-color: var(--red);
    border-radius: 1000px;
    /* padding: 0 8px; */
    /* width: 21px; */
    height: 21px;
    padding: 0 6px;
  }
}
</style>
