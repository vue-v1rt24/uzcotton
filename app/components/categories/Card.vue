<script setup lang="ts">
defineProps<{
  card: {
    id: string;
    img: string;
    title: string;
    link: string;
  };
}>();
</script>

<template>
  <NuxtLink :to="card.link">
    <div class="card">
      <div class="card__img">
        <img :src="card.img" :alt="card.title" />
      </div>

      <!--  -->
      <div class="card__body">
        <div class="card__body_title">{{ card.title }}</div>

        <div class="card__body_more">
          <span>Подробнее</span>
          <SvgArrow />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="css" scoped>
.card {
  position: relative;
}

.card__img {
  width: 205px;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /* media */
  @media (max-width: 576px) {
    width: 119px;
    height: 138px;
    margin-bottom: 10px;
  }
}

.card__body {
  background-color: var(--color-f7);
  border-radius: 20px;
  padding: 30px;

  /* media */
  @media (max-width: 576px) {
    padding: 16px 14px;
  }
}

.card__body_title {
  font-weight: 700;
  font-size: 26px;
  color: var(--black);
  margin-bottom: 10px;

  /* media */
  @media (max-width: 576px) {
    font-size: 18px;
  }
}

.card__body_more {
  width: fit-content;
  font-size: 18px;
  border-bottom: 1px solid var(--black);
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding-bottom: 4px;

  /* media */
  @media (max-width: 576px) {
    font-size: 14px;
    padding-bottom: 2px;
  }

  /* svg */
  svg {
    color: var(--black);
  }
}
</style>
