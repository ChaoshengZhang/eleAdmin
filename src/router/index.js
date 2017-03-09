/**
 * Created by zhangchaosheng on 2017/3/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/login"
        },
        {
            path: '/index',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    redirect:"/securitySituation"
                },
                {
                    path: '/securitySituation',
                    component: resolve => require(['../components/page/securitySituation.vue'], resolve)
                },
                {
                    path: '/attackStatistics',
                    component: resolve => require(['../components/page/attackStatistics.vue'], resolve)
                },
                {
                    path: '/attackSituation',
                    component: resolve => require(['../components/page/attackSituation.vue'], resolve)
                },
                {
                    path: '/vulnerabilityAlarm',
                    component: resolve => require(['../components/page/vulnerabilityAlarm.vue'], resolve)
                },
                {
                    path: '/fileAlarm',
                    component: resolve => require(['../components/page/fileAlarm.vue'], resolve)
                },
                {
                    path: '/flowAlarm',
                    component: resolve => require(['../components/page/flowAlarm.vue'], resolve)
                },
                {
                    path: '/caseManagement',
                    component: resolve => require(['../components/page/caseManagement.vue'], resolve)
                },
                {
                    path: '/intrusionData',
                    component: resolve => require(['../components/page/intrusionData.vue'], resolve)
                },
                {
                    path: '/reportAnalysis',
                    component: resolve => require(['../components/page/reportAnalysis.vue'], resolve)
                },
                {
                    path: '/systemLog',
                    component: resolve => require(['../components/page/systemLog.vue'], resolve)
                },
                {
                    path: '/systemUser',
                    component: resolve => require(['../components/page/systemUser.vue'], resolve)
                },
                {
                    path: '/systemConfiguration',
                    component: resolve => require(['../components/page/systemConfiguration.vue'], resolve)
                },
                {
                    path: '/systemUpgrade',
                    component: resolve => require(['../components/page/systemUpgrade.vue'], resolve)
                },
                {
                    path: '/assetManagement',
                    component: resolve => require(['../components/page/assetManagement.vue'], resolve)
                },
                {
                    path: '/businessManagement',
                    component: resolve => require(['../components/page/businessManagement.vue'], resolve)
                },
                {
                    path: '/deviceManagement',
                    component: resolve => require(['../components/page/deviceManagement.vue'], resolve)
                },
                {
                    path: '/policyConfiguration',
                    component: resolve => require(['../components/page/policyConfiguration.vue'], resolve)
                },
                {
                    path: '/permissionConfiguration',
                    component: resolve => require(['../components/page/permissionConfiguration.vue'], resolve)
                },
                {
                    path: '/roleManagement',
                    component: resolve => require(['../components/page/roleManagement.vue'], resolve)
                },
                {
                    path: '/menuManagement',
                    component: resolve => require(['../components/page/menuManagement.vue'], resolve)
                }
            ]
        },
        {
            path:"/login",
            component: resolve => require(['../components/page/Login.vue'], resolve)
        }
    ]
})


/**
 * ,
 {
     path: '/basetable',
     component: resolve => require(['../components/page/BaseTable.vue'], resolve)
 },
 {
     path: '/vuetable',
     component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
 },
 {
     path: '/baseform',
     component: resolve => require(['../components/page/BaseForm.vue'], resolve)
 },
 {
     path: '/vueeditor',
     component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
 },
 {
     path: '/markdown',
     component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
 },
 {
     path: '/upload',
     component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
 },
 {
     path: '/basecharts',
     component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
 },
 {
     path: '/mixcharts',
     component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
 }
 *
 *
 * **/