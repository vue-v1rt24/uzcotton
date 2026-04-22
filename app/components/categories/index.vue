<script setup lang="ts">
const cards = [
  { id: '1', title: 'Футболки', img: '/img/categories/futbolki.png', link: '#' },
  { id: '2', title: 'Поло', img: '/img/categories/polo.png', link: '#' },
  { id: '3', title: 'Толстовки', img: '/img/categories/tolstovki.png', link: '#' },
  { id: '4', title: 'Свитшоты', img: '/img/categories/svitshots.png', link: '#' },
  { id: '5', title: 'Лонгсливы', img: '/img/categories/longslivi.png', link: '#' },
  { id: '6', title: 'Брюки', img: '/img/categories/bruki.png', link: '#' },
  { id: '7', title: 'Бейсболки', img: '/img/categories/beisbolki.png', link: '#' },
  { id: '8', title: 'Юбки', img: '/img/categories/yabki.png', link: '#' },
];
</script>

<template>
  <section class="categories_wrap">
    <div class="container">
      <h2 class="h2">Категории</h2>

      <!--  -->
      <div class="categories">
        <CategoriesCard v-for="card in cards" :key="card.id" :card />
      </div>

      <!--  -->
      <UiButton title="Показать ещё" class="categories__more" />
    </div>
  </section>
</template>

<style lang="css" scoped>
.categories_wrap {
  margin-top: 120px;

  /* media */
  @media (max-width: 1300px) {
    margin-top: 60px;
  }
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;

  /* media */
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
}

/*  */
.categories__more {
  margin: 30px auto 0 auto;

  /* media */
  @media (max-width: 576px) {
    width: 100%;
  }
}
</style>
