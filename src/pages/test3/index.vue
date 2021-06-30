<template>
  <div>
    <div class="u-page">
      <!-- 所有内容的容器 -->
      <div @click="pageHook">点击跳转测试页面3分包</div>
    </div>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="vuex_tabbar" :mid-button="true" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    pageHook() {
      uni.navigateTo({ url: '/pagesE/index/index' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
