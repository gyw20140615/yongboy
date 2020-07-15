import Vue from 'vue'
import App from './App.vue'
//官方路由管理器
import router from './router'
//状态管理
import store from './store/'
//客户端存储
import Storage from 'vue-ls'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import config from '@/defaultSettings'
//权限
import '@/permission'
//过滤器
import '@/utils/filter'
//打印功能
import Print from 'vue-print-nb-jeecg'
//图表库
import VueApexCharts from 'vue-apexcharts'
//图片预览组件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
/*文件工具插件*/
import FilePlugin from '@views/plugins/FilePlugin.js'
//字典标签
import JDictSelectTag from './components/dict/index.js'
//动态路由和权限验证
import hasPermission from '@/utils/hasPermission'
//事件中心插件
import vueBus from '@/utils/vueBus';

import { VueAxios } from "@/utils/request"

//一些常量
import {
  ACCESS_TOKEN,
  DEFAULT_COLOR,
  DEFAULT_THEME,
  DEFAULT_LAYOUT_MODE,
  DEFAULT_COLOR_WEAK,
  SIDEBAR_TYPE,
  DEFAULT_FIXED_HEADER,
  DEFAULT_FIXED_HEADER_HIDDEN,
  DEFAULT_FIXED_SIDEMENU,
  DEFAULT_CONTENT_WIDTH_TYPE,
  DEFAULT_MULTI_PAGE
} from "@/store/mutation-types"


Vue.use(FilePlugin)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Storage, config.storageOptions)
Vue.use(Print)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(preview)
Vue.use(JDictSelectTag)
Vue.use(hasPermission)
Vue.use(vueBus)
Vue.use(VueAxios, router)


new Vue({
  router,
  store,
  //vue生命周期
  mounted () {
    store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true))
    store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
    store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
    store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
    store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))
    store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))
    store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))
    store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
    store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
    store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
    store.commit('SET_MULTI_PAGE',Vue.ls.get(DEFAULT_MULTI_PAGE,true))
  },
  render: h => h(App),
}).$mount('#app')
