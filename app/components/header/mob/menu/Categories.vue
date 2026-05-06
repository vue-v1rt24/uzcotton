<script setup lang="ts">
const activeMenu = ref('');

const setTitle = (title: string) => {
  if (title === activeMenu.value) {
    return (activeMenu.value = '');
  }

  activeMenu.value = title;
};
</script>

<template>
  <ul class="categories">
    <li
      class="categories__item"
      @click="setTitle('Каталог')"
      :class="{ active: activeMenu === 'Каталог' }"
    >
      <div class="categories__item_parent_link">
        <span>Каталог</span>
        <span><SvgArrow /></span>
      </div>

      <!--  -->
      <ul class="categories__item_sub_menu">
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuFutbolka />
            </span>

            <span>Футболки</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuTolstovki />
            </span>

            <span>Толстовки</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuShorti />
            </span>

            <span>Свитшоты</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuPolo />
            </span>

            <span>Поло</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuVetrovki />
            </span>

            <span>Ветровки и жилеты</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuBeisbolki />
            </span>

            <span>Бейсболки</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuLeginsi />
            </span>

            <span>Леггинсы, велосипедки, лосины</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuKomplectFutbolok />
            </span>

            <span>Комплект футболок</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuLongslivi />
            </span>

            <span>Лонгсливы</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuMaiki />
            </span>

            <span>Майки</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuSumki />
            </span>

            <span>Сумки шоперы</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuBruki />
            </span>

            <span>Брюки</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>
              <SvgMenuShorti />
            </span>

            <span>Шорты</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>Сувенирная продукция для нанесения логотипа</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">
            <span>Оборудование и расходные материалы для декорации</span>
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li
      class="categories__item"
      @click="setTitle('Услуги')"
      :class="{ active: activeMenu === 'Услуги' }"
    >
      <div class="categories__item_parent_link">
        <span>Услуги</span>
        <span><SvgArrow /></span>
      </div>

      <!--  -->
      <ul class="categories__item_sub_menu">
        <li>
          <NuxtLink to="#">Шелкография</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">DTF печать</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Печать на одежде</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Машинная вышивка</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Пошив на заказ</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Оборудование</NuxtLink>
        </li>
      </ul>
    </li>
    <li
      class="categories__item"
      @click="setTitle('Продукция')"
      :class="{ active: activeMenu === 'Продукция' }"
    >
      <div class="categories__item_parent_link">
        <span>Продукция</span>
        <span><SvgArrow /></span>
      </div>

      <!--  -->
      <ul class="categories__item_sub_menu">
        <li>
          <NuxtLink to="#">Палитра цветов</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Правила ухода за изделием</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Обязательная маркировка</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Сертификаты и декларации</NuxtLink>
        </li>
      </ul>
    </li>
    <li
      class="categories__item"
      @click="setTitle('О компании')"
      :class="{ active: activeMenu === 'О компании' }"
    >
      <div class="categories__item_parent_link">
        <span>О компании</span>
        <span><SvgArrow /></span>
      </div>

      <!--  -->
      <ul class="categories__item_sub_menu">
        <li>
          <NuxtLink to="#">Условия оплаты</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Условия доставки</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Гарантия на товар</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Отзывы</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Наши работы</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Контакты</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Награды </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Вакансии</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="categories__item">
      <NuxtLink to="#" class="categories__item_parent_link">Контакты</NuxtLink>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.categories {
}

/*  */
.categories__item {
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;

  /*  */
  &:first-child {
    border-top: 1px solid #e2e2e2;
  }
}

/*  */
.categories__item_parent_link {
  width: 100%;
  height: 50px;
  font-weight: 600;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  /* svg */
  svg {
    color: var(--color-b6b6b6);
    transition: transform var(--transition);

    /*  */
    .categories__item.active & {
      transform: rotate(180deg);
    }
  }
}

/*  */
.categories__item_sub_menu {
  display: none;
  height: 200px;
  background-color: var(--white);
  flex-direction: column;
  row-gap: 20px;
  padding: 10px 10px 20px 20px;
  overflow-y: auto;

  /* .active */
  .categories__item.active & {
    display: flex;
  }

  /* a */
  a {
    display: flex;
    align-items: center;
    column-gap: 10px;

    /* active */
    &.active {
      color: var(--red);
    }
  }
}
</style>
