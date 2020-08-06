<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
      页面3
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
<!--    <u-tabbar v-model="current" :list="list" :mid-button="true" @change="changeTabbar"></u-tabbar>-->
    <u-tabbar :list="vuex_tabbar" :mid-button="true"></u-tabbar>

  </view>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>

</style>