<script setup lang="ts"></script>

<template>
  <div class="bottom_wrap">
    <div class="container">
      <ul class="bottom_menu">
        <li>
          <NuxtLink to="#" class="bottom_menu__cat">
            <span>Каталог</span>
            <span>
              <SvgWindows />
            </span>
          </NuxtLink>

          <!--  -->
          <div class="bottom_menu__item_sub__wrap bottom_menu__item_sub__wrap_960">
            <ul class="bottom_menu__item_sub__menu">
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
            </ul>

            <!--  -->
            <ul class="bottom_menu__item_sub__menu">
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
          </div>
        </li>
        <li>
          <NuxtLink to="#">Услуги</NuxtLink>

          <!--  -->
          <div class="bottom_menu__item_sub__wrap">
            <ul class="bottom_menu__item_sub__menu">
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
          </div>
        </li>
        <li>
          <NuxtLink to="#">Продукция</NuxtLink>

          <!--  -->
          <div class="bottom_menu__item_sub__wrap">
            <ul class="bottom_menu__item_sub__menu">
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
          </div>
        </li>
        <li>
          <NuxtLink to="#">О компании</NuxtLink>

          <!--  -->
          <div class="bottom_menu__item_sub__wrap">
            <ul class="bottom_menu__item_sub__menu">
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
          </div>
        </li>
        <li>
          <NuxtLink to="#">Контакты</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bottom_wrap {
  background-color: var(--color-f9f9f9);
  border-top: 1px solid var(--color-eee);
}

/*  */

.bottom_menu {
  display: grid;
  grid-template-columns: 210px repeat(4, 1fr);
  align-items: center;

  /* li */
  > li {
    position: relative;

    /* &:not(:last-child) */
    &:not(:last-child):not(:first-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 21px;
      background-color: var(--color-d4d4d4);
    }

    /* a */
    > a {
      height: 52px;
      font-weight: 500;
      font-size: 20px;
      color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      transition: color var(--transition);

      /* media */
      @media (max-width: 1100px) {
        font-size: 16px;
      }

      /* hover, .active */
      &:hover,
      &.active {
        color: var(--red);
      }

      /* .bottom_menu__cat */
      &.bottom_menu__cat {
        font-weight: 600;
        color: var(--white);
        background-color: var(--red);

        /* svg */
        svg {
          /* media */
          @media (max-width: 1100px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

/* Всплывающее меню */
.bottom_menu__item_sub__wrap {
  position: absolute;
  top: 53px;
  left: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background: var(--white);
  display: flex;
  column-gap: 50px;
  border-radius: 20px;
  padding: 20px;

  /*  */
  transform: translateY(50px);
  opacity: 0;
  visibility: hidden;
  transition:
    transform var(--transition),
    opacity var(--transition),
    visibility var(--transition);

  /* hover */
  .bottom_menu > li:hover & {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
}

/*  */
.bottom_menu__item_sub__wrap_960 {
  width: 960px;

  /* media */
  @media (max-width: 1100px) {
    width: 765px;
  }
}

/*  */
.bottom_menu__item_sub__menu {
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  overflow: hidden;

  /*  */
  transform: translateY(50px);
  opacity: 0;
  visibility: hidden;
  transition:
    transform var(--transition),
    opacity var(--transition),
    visibility var(--transition);

  /* hover */
  .bottom_menu > li:hover & {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  /* a */
  a {
    height: 22px;
    font-weight: 400;
    font-size: 18px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    column-gap: 10px;
    transition: color var(--transition);

    /* media */
    @media (max-width: 1100px) {
      font-size: 14px;
    }

    /* hover, .active */
    &:hover,
    &.active {
      color: var(--red);
    }
  }

  /* svg */
  svg {
    color: var(--black);
    transform: translateY(1px);
    transition: color var(--transition);

    /* media */
    @media (max-width: 1100px) {
      width: 20px;
      height: 20px;
    }

    /* hover, .active */
    a:hover &,
    a.active & {
      color: var(--red);
    }
  }
}
</style>
