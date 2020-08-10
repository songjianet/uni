<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
      页面1
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="vuex_tabbar" :mid-button="true" />
  </view>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>

</style>
