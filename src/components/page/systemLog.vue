<template>
    <div id="system-log-table" class="admin-table">
        <div class="crumbs my-crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 防御平台管理</el-breadcrumb-item>
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>系统日志</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table
                :data="systemLogData"
                style="width: 100%">
            <el-table-column
                    prop="operator"
                    label="操作人">
            </el-table-column>
            <el-table-column
                    prop="modular"
                    label="模块">
            </el-table-column>
            <el-table-column
                    prop="remarks"
                    label="备注">
            </el-table-column>
            <el-table-column
                    prop="level"
                    label="级别">
            </el-table-column>
            <el-table-column
                    prop="IPAddress"
                    label="IP地址">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    sortable>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                systemLogData: [],
                currentPage:4
            }
        },
        beforeMount(){
            axios.get('/src/assets/data/systemLogData.json').then( (res) => {
                this.systemLogData = res.data['result'];
            })
        },
        updated(){
            console.log("already updated11111");
        },
        methods:{
	        handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
	        },
	        handleCurrentChange(val) {
		        this.currentPage = val;
		        console.log(`当前页: ${val}`);
	        }
        }
    }

</script>