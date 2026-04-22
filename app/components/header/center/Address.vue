<script setup lang="ts"></script>

<template>
  <div class="address">
    <SvgLocation />

    <div class="address__text">
      115477, г. Москва, ул. Кантемировская, дом 61, 2 этаж, помещение 1 - склад 115477, г. Москва,
      ул. Кантемировская, дом 61, 6 этаж - офис
    </div>
  </div>
</template>

<style lang="css" scoped>
.address {
  font-size: 14px;
  color: var(--black);
  display: flex;
  align-items: center;
  column-gap: 10px;

  /*  */
  svg {
    flex-shrink: 0;
  }
}

.address__text {
  width: 328px;
  line-height: 120%;
}
</style>
