<script setup lang="ts">
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

//
onMounted(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    init: false,
    slidesPerView: 'auto',

    //
    pagination: {
      el: '.swiper-pagination',
    },

    //
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      577: {
        spaceBetween: 20,
      },
    },
  });

  // Активация слайдера
  if (window.matchMedia('(max-width: 1468px)').matches) {
    swiper.init();
  }
});
</script>

<template>
  <div class="container">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <NuxtLink to="/">
            <img class="slide__img" src="/img/home/sliderServices/1.jpg" alt="" />

            <div class="slide_text">
              <div class="slide_text__title">Производство полного цикла</div>
              <p class="slide_text__desc">Собственные 12 фабрик в Узбекистане</p>

              <div class="slide_text__link">
                <span>Подробнее</span>
                <SvgArrow />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="swiper-slide">
          <NuxtLink to="/">
            <img class="slide__img" src="/img/home/sliderServices/2.jpg" alt="" />

            <div class="slide_text">
              <div class="slide_text__title">Более 3.5 млн.</div>
              <p class="slide_text__desc">
                Трикотажных изделий в наличии на складе более 6000 кв.м2 собственный склад в Москве
              </p>

              <div class="slide_text__link">
                <span>Подробнее</span>
                <SvgArrow />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="swiper-slide">
          <NuxtLink to="/">
            <img class="slide__img" src="/img/home/sliderServices/3.jpg" alt="" />

            <div class="slide_text">
              <div class="slide_text__title">Мерч под ключ</div>
              <p class="slide_text__desc">От идеи и концепции до готового тиража мерч-капсулы</p>

              <div class="slide_text__link">
                <span>Подробнее</span>
                <SvgArrow />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="swiper-slide">
          <NuxtLink to="/">
            <img class="slide__img" src="/img/home/sliderServices/4.jpg" alt="" />

            <div class="slide_text">
              <div class="slide_text__title">Футболки оптом</div>
              <p class="slide_text__desc">
                А также: толстовки, свитшоты, худи, бейсболки, шопперы и т.д.
              </p>

              <div class="slide_text__link">
                <span>Подробнее</span>
                <SvgArrow />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!--  -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.swiper {
  /* media */
  @media (max-width: 1468px) {
    padding: 0 30px 44px 30px;
    margin: 0 -30px 0 -30px;
  }

  @media (max-width: 576px) {
    padding: 0 15px 40px 15px;
    margin: 0 -15px 0 -15px;
  }
}

/*  */
.swiper-slide {
  width: 335px;

  /* media */
  @media (min-width: 1469px) {
    margin-right: 20px;
  }

  @media (max-width: 576px) {
    width: 330px;
  }
}

/*  */
.slide__img {
  border-radius: 20px;
}

/*  */
.slide_text {
  position: absolute;
  bottom: 0;
  left: 0;
  color: var(--white);
  padding: 20px 20px 30px 20px;
}

.slide_text__title {
  font-weight: 700;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.slide_text__desc {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 20px;
}

.slide_text__link {
  width: fit-content;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  align-items: center;
  column-gap: 14px;
  border-bottom: 1px solid var(--white);
  padding-bottom: 4px;
}
</style>

<style>
.swiper-pagination-bullet {
  width: 50px;
  height: 6px;
  background-color: #afafaf;
  border-radius: 4px;
}
</style>
