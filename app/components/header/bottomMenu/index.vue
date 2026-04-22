<script setup lang="ts"></script>

<template>
  <div class="bottom_menu">
    <div class="container">
      <ul class="menu">
        <li>
          <NuxtLink to="#" class="active">
            <span>Каталог</span>
            <SvgWindows />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>Услуги</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>Продукция</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>О компании</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>Контакты</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bottom_menu {
  width: 1920px;
  height: 52px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
}

/*  */
.menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;

  /* li */
  li {
    &:last-child a::after {
      display: none;
    }
  }

  /* a */
  a {
    position: relative;
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;

    /* .active */
    &.active,
    &:hover {
      color: var(--white);
      background-color: var(--red);
    }

    /* after */
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -1px;
      transform: translateY(-50%);
      width: 1px;
      height: 21px;
      background-color: #d4d4d4;
    }

    &.active::after,
    &:hover:after {
      background-color: transparent;
    }
  }

  /* svg */
  svg {
    flex-shrink: 0;
  }
}
</style>
