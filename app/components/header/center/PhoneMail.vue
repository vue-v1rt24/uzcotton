<script setup lang="ts"></script>

<template>
  <div class="tel_mail">
    <a class="tel" href="tel:+7 (499) 343-73-40">
      <SvgTel />
      <span>+7 (499) 343-73-40</span>
    </a>

    <a class="mail" href="mailto:sale@uzcotton.ru">
      <SvgMail />
      <span>sale@uzcotton.ru</span>
    </a>
  </div>
</template>

<style lang="css" scoped>
.tel_mail {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  margin-left: 10px;

  /*  */
  a {
    font-size: 16px;
    font-weight: 600;
    color: var(--black);
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  /* svg */
  svg {
    flex-shrink: 0;
  }
}

/*  */
.mail {
  font-weight: 500;
}
</style>
