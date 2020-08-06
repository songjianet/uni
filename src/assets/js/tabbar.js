const TABBAR_LIST = [
  {
    iconPath: "home",
    selectedIconPath: "home-fill",
    text: '首页',
    count: 2,
    isDot: true,
    customIcon: false,
    pagePath: 'pages/index/index'
  },
  {
    iconPath: "photo",
    selectedIconPath: "photo-fill",
    text: '放映厅',
    customIcon: false,
    pagePath: 'pages/test1/index'
  },
  {
    iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
    selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
    text: '发布',
    midButton: true,
    customIcon: false,
    pagePath: 'pages/test2/index'
  },
  {
    iconPath: "play-right",
    selectedIconPath: "play-right-fill",
    text: '直播',
    customIcon: false,
    pagePath: 'pages/test3/index'
  },
  {
    iconPath: "account",
    selectedIconPath: "account-fill",
    text: '我的',
    count: 23,
    isDot: false,
    customIcon: false,
    pagePath: 'pages/my/index'
  }
]

export default TABBAR_LIST