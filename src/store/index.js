import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // 自定义tabbar数据
    vuex_tabbar: [
      {
        iconPath: 'home',
        selectedIconPath: 'home-fill',
        text: '首页',
        count: 2,
        isDot: true,
        customIcon: false,
        pagePath: '/pages/index/index'
      },
      {
        iconPath: 'photo',
        selectedIconPath: 'photo-fill',
        text: '页面1',
        customIcon: false,
        pagePath: '/pages/test1/index'
      },
      {
        iconPath: 'https://cdn.uviewui.com/uview/common/min_button.png',
        selectedIconPath: 'https://cdn.uviewui.com/uview/common/min_button_select.png',
        text: '发布/页面2',
        midButton: true,
        customIcon: false,
        pagePath: '/pages/test2/index'
      },
      {
        iconPath: 'play-right',
        selectedIconPath: 'play-right-fill',
        text: '页面3',
        customIcon: false,
        pagePath: '/pages/test3/index'
      },
      {
        iconPath: 'account',
        selectedIconPath: 'account-fill',
        text: '我的',
        count: 23,
        isDot: false,
        customIcon: false,
        pagePath: '/pages/my/index'
      }
    ]
  },
  mutations: {
  }
})

export default store
