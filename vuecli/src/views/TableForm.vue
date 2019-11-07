<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" height="250">
      <el-table-column prop="num" label="编号" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="type" label="类别" width="120"></el-table-column>
      <el-table-column prop="title" label="标题" width="120"></el-table-column>
      <el-table-column prop="content" label="内容" width="500"></el-table-column>
      <el-table-column prop="hot" label="热度"
                       :filters="[{text:'热点',value:100},{text:'火爆',value:200}]"
                       :filter-method="filterHandler"
                       width="120">
      </el-table-column>
      <el-table-column prop="zip" label="操作" width="140">
        <el-button type="text">查看</el-button>
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
        <el-button type="text">删除</el-button>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible">
    <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
    <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
    <el-select v-model="form.region" placeholder="请选择活动区域">
    <el-option label="区域一" value="shanghai"></el-option>
    <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
  import Mock from 'mockjs';
    export default {
        data() {
            return {
              tableData:[],
              dialogFormVisible: false,
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
              formLabelWidth: '120px'
            }
        },
        mounted(){
          let data=Mock.mock({
            "data|10-15":[
              {
                "num|+1": 1001,
                "date":'@date',
                "type|1":[
                  "财经新闻",
                  "时事热点"
                ],
                "title":'@ctitle(4)',
                "content":'@cparagraph',
                "hot":'@integer(20,300)'
              }
            ]
          });
          this.tableData=data.data;
        },
        methods:{
          filterHandler(value, row) {
            if(value==100)
              return row.hot>100 && row.hot<=200;
            if(value==200)
              return row.hot>=200;
          }
        }
    }
</script>

<style>

</style>
