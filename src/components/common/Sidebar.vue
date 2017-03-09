<template>
    <div id="side-bar">
        <el-menu :default-active="onRoutes" theme="dark" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="securitySituation"><i class="iconfont icon-anquan"></i>安全态势感知</el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="iconfont icon-fengxian"></i>风险告警展示</template>
                <el-menu-item index="attackStatistics">攻击统计</el-menu-item>
                <el-menu-item index="attackSituation">攻击态势</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="iconfont icon-ajdc"></i>案件行为回溯</template>
                <el-menu-item index="vulnerabilityAlarm">漏洞告警</el-menu-item>
                <el-menu-item index="fileAlarm">文件告警</el-menu-item>
                <el-menu-item index="flowAlarm">流量告警</el-menu-item>
                <el-menu-item index="caseManagement">案件管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="intrusionData"><i class="iconfont icon-sjwj"></i>入侵数据挖掘</el-menu-item>
            <el-menu-item index="reportAnalysis"><i class="iconfont icon-tjbb"></i>报表定制分析</el-menu-item>
            <el-submenu index="4">
                <template slot="title"><i class="iconfont icon-guanli"></i>防御平台管理</template>
                <el-submenu index="4-1">
                    <template slot="title">系统管理</template>
                    <el-menu-item index="systemLog">系统日志</el-menu-item>
                    <el-menu-item index="systemUser">系统用户</el-menu-item>
                    <el-menu-item index="systemConfiguration">系统配置</el-menu-item>
                    <el-menu-item index="systemUpgrade">系统升级</el-menu-item>
                </el-submenu>
                <el-submenu index="4-2">
                    <template slot="title">业务管理</template>
                    <el-menu-item index="assetManagement">资产管理</el-menu-item>
                    <el-menu-item index="businessManagement">业务组管理</el-menu-item>
                </el-submenu>
                <el-menu-item index="deviceManagement">设备管理</el-menu-item>
                <el-menu-item index="policyConfiguration">策略配置</el-menu-item>
                <el-submenu index="4-3">
                    <template slot="title">权限管理</template>
                    <el-menu-item index="permissionConfiguration">权限配置</el-menu-item>
                    <el-menu-item index="roleManagement">角色管理</el-menu-item>
                </el-submenu>
                <el-menu-item index="menuManagement">菜单权限管理</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style scoped>
    #side-bar{
        position: absolute;
        left:0;
        width: 200px;
        top:50px;
        bottom:0px;
        background: #324157;
    }
    .iconfont{
        margin-right:6px;
    }
</style>
<script>

    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }

</script>