<script setup lang="ts"></script>

<template>
  <div class="address">
    <div class="address__img">
      <SvgLocation />
    </div>

    <p class="address__p">
      115477, г. Москва, ул. Кантемировская, дом 61, 2 этаж, помещение 1 - склад 115477, г. Москва,
      ул. Кантемировская, дом 61, 6 этаж - офис
    </p>
  </div>
</template>

<style lang="css" scoped>
.address {
  display: flex;
  align-items: center;
  column-gap: 10px;

  /* media */
  @media (max-width: 1400px) {
    display: none;
  }
}

.address__p {
  width: 328px;
  font-size: 14px;
}
</style>
