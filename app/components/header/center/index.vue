<script setup lang="ts"></script>

<template>
  <div class="header_center_wrap">
    <div class="container">
      <div class="header_center">
        <HeaderCenterLogo />
        <HeaderCenterSearch />
        <HeaderCenterAddress />
        <HeaderCenterPhoneMail />
        <UiButton title="Заказать звонок" class="header_center__btn" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.header_center_wrap {
  background-color: #f9f9f9;
  padding: 20px 0;
}

/*  */
.header_center {
  display: flex;
  align-items: center;
  column-gap: 30px;
}

/*  */
.header_center__btn {
  margin-left: auto;
}
</style>
