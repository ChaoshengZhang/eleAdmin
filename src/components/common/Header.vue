<template>
    <div id="header">
        <el-row>
            <el-col :span="12">
                <div class="topbar-title">
                    <img src="../../assets/images/logo.png" height="30" alt="">
                    <span>中新金盾高级持续性威胁防御平台</span>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="topbar-right">
                    <div class="topbar-item">
                        <el-tooltip effect="light" content="清除缓存" placement="bottom-end">
                            <a href="javascript:;"><i class="iconfont icon-qingchuhuancun"></i></a>
                        </el-tooltip>
                    </div>
                    <div class="topbar-item">
                        <el-tooltip effect="light" placement="bottom-end">
                            <div slot="content" v-html="CPUAlarmContent"></div>
                            <el-badge is-dot>
                                <a href="javascript:;"><i class="iconfont icon-ecs-disk"></i></a>
                            </el-badge>
                        </el-tooltip>
                    </div>
                    <div class="topbar-item">
                        <el-tooltip effect="light" placement="bottom-end">
                            <div slot="content" v-html="memoryAlarmContent"></div>
                            <el-badge is-dot>
                                <a href="javascript:;"><i class="iconfont icon-neicun"></i></a>
                            </el-badge>
                        </el-tooltip>
                    </div>
                    <div class="topbar-item">
                        <el-tooltip effect="light" placement="bottom-end">
                            <div slot="content" v-html="CPUAlarmContent"></div>
                            <el-badge is-dot>
                                <a href="javascript:;"><i class="iconfont icon-CPU"></i></a>
                            </el-badge>
                        </el-tooltip>
                    </div>
                    <div class="topbar-item">
                        <el-dropdown trigger="hover" class="topbar-toggle">
                              <span class="el-dropdown-link">
                                章超胜<i class="el-icon-caret-bottom el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item command="userMessage">个人信息</el-dropdown-item>
                                  <el-dropdown-item command="editPassword">修改密码</el-dropdown-item>
                                  <el-dropdown-item command="LogOut">退出</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    #header{
        height:50px;
        background: #212a38;
        position: absolute;
        left:0;
        right:0;
        top:0;
        color: #fff;
        align-items: center;
        font-size: 18px;
        text-align: center;
    }
    .topbar-title{
        height:50px;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        padding-left:20px;
        color: rgba(255,255,255,0.8);
    }
    .topbar-title span{
        margin-left:10px;
    }
    .topbar-right{
        height:50px;
        display: -webkit-flex;
        display: flex;
        align-items: stretch;
        justify-content: flex-end;
    }
    .topbar-right .topbar-item{
        padding: 0 13px;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left:1px solid rgba(0,0,0,0.4);

    }
    .topbar-right .topbar-item a{
        color: #ffffff;
    }
    .topbar-right .topbar-item a i{
        font-size: 24px;
    }
    .topbar-toggle{
        height:50px;
        color: #ffffff !important;
        line-height:50px;
    }
    /***zcs**/
    .demo{
        font-size: 14px;
        color: #000;
    }
</style>
<script>

    export  default({
        data(){
            return {
                diskAlarm:{
                    value:1,
                    text:"磁盘警告",

                },
                CPUAlarm:{
                    value:2,
                    text:"CPU警告"
                },
                memoryAlarm:{
                    value:2,
                    text:"内存警告"
                }
            }
        },
        computed:{
            diskAlarmContent: function(){
                return this.diskAlarm.text+'<span class="alarm-num">'+this.diskAlarm.value+'</span>'
            },
            CPUAlarmContent: function(){
                return this.CPUAlarm.text+'<span class="alarm-num">'+this.CPUAlarm.value+'</span>'
            },
            memoryAlarmContent: function(){
                return this.memoryAlarm.text+'<span class="alarm-num">'+this.memoryAlarm.value+'</span>'
            }
        }
    })



</script>