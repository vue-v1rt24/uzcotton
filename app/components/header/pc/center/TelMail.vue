<script setup lang="ts"></script>

<template>
  <div class="tel_mail">
    <a class="tel" href="tel:+7 (499) 343-73-40">
      <span>
        <SvgTel />
      </span>

      <span>+7 (499) 343-73-40</span>
    </a>

    <a class="email" href="mailto:sale@uzcotton.ru">
      <span>
        <SvgEmail />
      </span>

      <span>sale@uzcotton.ru</span>
    </a>
  </div>
</template>

<style lang="css" scoped>
.tel_mail {
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  /* a */
  a {
    font-size: 16px;
    display: flex;
    align-items: center;
    column-gap: 11px;
  }
}

/*  */
.tel {
  font-weight: 600;
}

/*  */
.email {
  font-weight: 500;
}
</style>
