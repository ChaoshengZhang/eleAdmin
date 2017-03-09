/**
 * Created by zhangchaosheng on 2017/3/8.
 */
import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import "./style/iconfont.css";
import './style/reset.css'
import './style/main.css'

Vue.use(ElementUI);

new Vue({
    router:Router,
    render: h => h(App)
}).$mount("#app")