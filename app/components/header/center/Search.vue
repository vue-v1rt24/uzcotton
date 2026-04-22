<script setup lang="ts"></script>

<template>
  <form>
    <label class="search">
      <SvgSearch class="search_img" />
      <input type="search" name="search" placeholder="Поиск" />
    </label>
  </form>
</template>

<style lang="css" scoped>
.search {
  position: relative;
  width: 371px;
  height: 46px;
  display: block;

  /* SvgSearch */
  .search_img {
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translateY(-50%);
  }

  /* input */
  input {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;

    border: 1px solid #e3e3e3;
    border-radius: 12px;
    padding-left: 45px;
    box-sizing: border-box;

    font-family: var(--font-family);
    font-weight: 300;
    font-size: 18px;
    color: #909090;
  }
}
</style>
