<template>
  <div>
    <div style="height: 100rpx; background-color: red;">首页分包</div>
    <div @click="pageHook">点击跳转我的页分包</div>
  </div>
</template>

<script>
export default {
  methods: {
    pageHook() {
      uni.navigateTo({ url: '/pagesB/index/index?id=1' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
