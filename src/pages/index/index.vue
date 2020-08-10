<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
      首页
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="vuex_tabbar" :mid-button="true" />
  </view>
</template>

<script>
import { comment } from '@/api/test'

export default {
  name: 'Index',
  mounted() {
    this.getStory()
  },
  methods: {
    getStory() {
      comment().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
