import './assets/reset.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import './assets/reload.js'
import Vuex from 'vuex';
Vue.use(Vuex);


// 引入vant组件
import {
  Button,
  Col,
  Row,
  Search,
  Tab,
  Tabs,
  Sticky,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Sidebar,
  SidebarItem,
  Icon,
  Checkbox,
  CheckboxGroup,
  NavBar,
  Toast,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Card,
} from 'vant';
//使用vant组件
Vue.use(Button).use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Sticky).use(Tabbar).use(Card)
  .use(TabbarItem).use(Swipe).use(SwipeItem).use(GridItem).use(Grid).use(Sidebar).use(SidebarItem).use(Icon)
  .use(Checkbox).use(CheckboxGroup).use(NavBar).use(Toast).use(GoodsAction).use(GoodsActionIcon)
  .use(GoodsActionButton);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')