<template>
    <div id="report-analysis" class="admin-common-wrapper">
        <div class="crumbs my-crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 报表定制分析</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="report-analysis-search">
            <el-row>
                <el-col :span="12">
                    <div class="search-text">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-input
                                        placeholder="请选择日期"
                                        icon="date"
                                        v-model="startDate"
                                        :on-icon-click="handleIconClick">
                                </el-input>
                            </el-col>
                            <el-col :span="12">
                                <el-input
                                        placeholder="请选择日期"
                                        icon="date"
                                        v-model="endDate"
                                        :on-icon-click="handleIconClick">
                                </el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="search-submit">
                        <el-button type="warning" icon="delete">清空</el-button>
                        <el-button type="primary" icon="search">搜索</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="assets-report">
            <el-row :gutter="20" type="flex" align="middle">
                <el-col :sm="12" :md="6" :lg="6">
                    <div class="item item1">
                        <div class="item-left">
                            <i class="iconfont icon-zichan"></i>
                        </div>
                        <div class="item-right">
                            <span class="asset-num">106</span>
                            <p class="asset-name">总业务资产</p>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="6" :lg="6">
                    <div class="item item2">
                        <div class="item-left">
                            <i class="iconfont icon-zichan2"></i>
                        </div>
                        <div class="item-right">
                            <span class="asset-num">115</span>
                            <p class="asset-name">受损业务资产</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="chart-list">
            <el-row :gutter="10">
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-OA"></i>
                            </div>
                            <div class="text">
                                <span class="name">OA组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-yanfa"></i>
                            </div>
                            <div class="text">
                                <span class="name">研发组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-zhi"></i>
                            </div>
                            <div class="text">
                                <span class="name">质管组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-renshi"></i>
                            </div>
                            <div class="text">
                                <span class="name">人事组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-dmzyewuwang"></i>
                            </div>
                            <div class="text">
                                <span class="name">DMZ组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :md="12" :lg="8">
                    <div class="chart-item">
                        <div class="chart-item-title">
                            <div class="icon">
                                <i class="iconfont icon-zichan1"></i>
                            </div>
                            <div class="text">
                                <span class="name">资产组</span>
                                <div class="alarm-data">
                                    截止目前受损业务资产总计<span class="red">0</span>台
                                </div>
                            </div>
                            <div class="link">
                                <a href="#">告警详情</a>
                            </div>
                        </div>
                        <div class="chart-item-show">
                            <div class="echarts">
                                <VueChartV3 :option="line" ></VueChartV3>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .report-analysis-search,.assets-report{
        background: #ffffff;
        padding:25px;
    }
    .assets-report{
        margin-top:20px;
        .item{
            background-color: #ecf0f5;
            padding:10px 15px;
            border:1px solid #dce6f0;
            display: -webkit-flex;
            display: flex;
            align-items: stretch;
            .item-left{
                width: 60px;
                height:60px;
                border-radius: 50%;
                background: #679c32;
                color: #fff;
                text-align: center;
                line-height:60px;
                flex: none;
                i {
                    font-size: 30px;
                }
            }
            .item-right{
                margin-left:10px;
                padding:4px 0;
                .asset-num{
                    font-size: 18px;
                    color: #333;
                    font-weight: bold;
                }
                .asset-name{
                    color: #666;
                    margin-top:6px;
                }
            }
            &.item2{
                .item-left{
                    background-color: #f39800;
                }
            }
        }
    }
    .chart-list{
        margin-top:20px;
        .chart-item{
            background-color: #fff;
            margin-bottom:10px;
            .chart-item-title{
                display: -webkit-flex;
                display: flex;
                height:64px;
                border-bottom:1px solid rgba(0,0,0,0.15);
                padding:0 15px 5px 0;
                .icon{
                    width: 60px;
                    text-align: center;
                    line-height:60px;
                    flex: none;
                    i{
                        color: #8a8a8a;
                        font-size: 36px;
                    }
                }
                .text{
                    padding-top:6px;
                    flex: auto;
                    .name{
                        font-size: 16px;
                        font-weight: bold;
                        color: #333;
                    }
                    .alarm-data{
                        color: #999;
                        margin-top:4px;
                    }
                }
                .link{
                    width: 72px;
                    text-align: right;
                    padding-top:30px;
                    a:hover{
                        color: #20a0ff;
                    }
                }
            }
            .chart-item-show{
                overflow: hidden;
                .echarts{
                    position: relative;
                    margin-top:-22px;
                    height:300px;
                }
            }
        }
    }
</style>
<script>
    import VueChartV3 from 'vue-echarts-v3';
    export  default({
    	components:{
		    VueChartV3
        },
        data(){
            return {
                message:"报表定制分析",
	            line: {
		            color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
		            title: {
			            show: false,
                        title:"zcs"
		            },
                    tooltip:{
	                    trigger: 'axis',
                    },
		            xAxis: {
			            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		            },
		            yAxis:{},
		            series: [
			            {
				            name: "销量",
				            type: "line",
				            smooth:true,
				            data: [5, 20, 36, 10, 10, 20]
			            }
		            ]
	            }
            }
        },
        methods:{
	        handleIconClick:function(ev){
	        	console.log(ev);
            },
            randomData:function(){
	            var newData = this.line.series[0].data;
	            var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
	            newData.shift();
	            newData.push((Math.random() * 10 + 5).toFixed(1) - 0);
	            this.line.xAxis[0].data.shift();
	            this.line.xAxis[0].data.push(axisData);
	            console.log(axisData)
            }
        },
	    beforeMount(){
        	//this.randomData()
        },
	    mounted(){
        	document.querySelector(".main-wrapper").style.background = "#ebeef2";
        	setTimeout(this.randomData(),1000)
        }
    })

</script>