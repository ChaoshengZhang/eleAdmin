<template>
    <div id="table">
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
                    label="时间">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                systemLogData: [],
                currentPage:1
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
            consoleFn:function(){
                console.log("abc")
            }
        }
    }

</script>