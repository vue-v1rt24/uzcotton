<script setup lang="ts">
const isHamburgerActive = ref(false);

const hamburgerHandler = () => {
  isHamburgerActive.value = !isHamburgerActive.value;
  document.body.classList.toggle('open', isHamburgerActive.value);
};

// Клик по кнопке "Заказать звонок"
const zvonok = () => {
  console.log('Звонок');
};
</script>

<template>
  <div class="mob_menu_wrap">
    <!-- Гамбургер -->
    <HeaderMobMenuHamburger @click-hamburger="hamburgerHandler" />

    <!-- Меню -->
    <div :class="['mob_menu', { active: isHamburgerActive }]">
      <div class="mob_menu__content">
        <!-- Вход / Регистрация -->
        <HeaderMobMenuAuth />

        <!-- Телефон и почта -->
        <HeaderPcCenterTelMail />

        <!-- Адрес -->
        <HeaderPcCenterAddress />

        <!-- Заказать звонок -->
        <UiButton title="Заказать звонок" @click-event="zvonok" class="mob_menu__content_zvonok" />

        <!-- Меню -->
        <div class="mob_menu__content_menu">
          <NuxtLink to="#" class="mob_menu__content_menu__akcii">% Акции</NuxtLink>
          <NuxtLink to="#">Доставка</NuxtLink>
          <NuxtLink to="#">Оплата</NuxtLink>
          <NuxtLink to="#">FAQ</NuxtLink>
          <NuxtLink to="#">Новости</NuxtLink>
          <NuxtLink to="#">Отзывы</NuxtLink>
        </div>

        <!-- Меню категорий -->
        <HeaderMobMenuCategories />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mob_menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  transform: translateX(-100%);
  transition: transform 1s cubic-bezier(0.87, -1.38, 0.03, 1.54);
  padding: 70px 15px 15px 15px;

  /* .active */
  &.active {
    transform: translateX(0);
  }

  /*  */
  .auth {
    margin-bottom: 20px;
  }

  .address {
    margin: 20px 0 16px 0;
  }
}

/*  */
.mob_menu__content {
  width: 330px;
  box-sizing: content-box;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 30px;
  margin: 0 auto;

  /* media */
  @media (max-width: 425px) {
    padding: 30px 10px 0 0px;
  }

  /* media max-height */
  @media (max-height: 700px) {
    height: 500px;
  }

  @media (max-height: 600px) {
    height: 350px;
  }

  @media (max-height: 460px) {
    height: 250px;
  }
}

/*  */
.mob_menu__content_zvonok {
  width: 100%;
}

/*  */
.mob_menu__content_menu {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px 45px;
  margin: 20px 0 30px 0;
}

.mob_menu__content_menu__akcii {
  width: 98px;
  height: 32px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
