<template>
  <div class="app-container">
    <!--搜索条件区-->
    <div class="filter-container">
      <el-input v-model="listQuery.deptName"
                placeholder="部门名称" style="width: 200px"
                class="filter-item" @keyup.enter.native="handleFilter"></el-input>
      <el-select @change="handleFilter" v-model="listQuery.personCount" class="filter-item">
        <el-option key="0" label="-请选择-" :value="0"></el-option>
        <el-option v-for="item in personCount" :key="item.key" :value="item.key" :label="item.value"></el-option>
      </el-select>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Add
      </el-button>
    </div>

    <!--部门数据表格-->
    <el-table v-loading="listLoading" :data="pageData">
      <el-table-column sortable width="100" prop="id" label="编号"></el-table-column>
      <el-table-column sortable width="120" prop="peoples" label="人员数量">
        <template slot-scope="scope">
          <el-tag :type="scope.row.peoples | hotTagType">{{scope.row.peoples}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="deptName" label="部门名称"></el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDel(row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--新增-->
    <el-dialog :visible.sync="showAddBox">
      <el-form  label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="编号" prop="id">
          <el-input v-model="addTempid" />
        </el-form-item>
        <el-form-item label="人员数量" prop="peoples">
          <el-input v-model="addTemppeoples"/>
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="addTempdeptName" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showEditBox = false">取消</el-button>
        <el-button type="primary" @click="createInfo()">确定</el-button>
      </div>
    </el-dialog>
    <!--修改-->
    <!-- 修改对话框 -->
    <el-dialog :visible.sync="showEditBox">
      <el-form ref="dataForm" :model="editTemp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="编号" prop="id">
          <el-input v-model="editTemp.id" readonly/>
        </el-form-item>
        <el-form-item label="人员数量" prop="peoples">
          <el-input v-model="editTemp.peoples"/>
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="editTemp.deptName" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showEditBox = false">取消</el-button>
        <el-button type="primary" @click="updateData()">确定</el-button>
      </div>
    </el-dialog>
    <!--分页组件-->
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
  import {fetchList} from '@/api/dept'
  import Pagination from '@/components/Pagination'

  export default {
    data() {
      return {
        editTemp:{
          id: undefined,
          peoples: '',
          deptName: '',
        },
        addTempid:'',
        addTemppeoples:'',
        addTempdeptName:'',
        addTemp:{
          id:undefined,
          peoples:'',
          deptName:''

        },
        showEditBox: false,
        showAddBox:false,
        //控制等待画面的显示与否
        listLoading:true,
        total:0,
        personCount:[
          {key:1,value:"<15"},
          {key:2,value:"15—25"},
          {key:3,value:">25"},
        ],
        //查询条件
        listQuery:{
          page: 1,
          limit: 10,
          deptName:'',
          personCount:0
        },
        //当前页的部门数据
        pageData:[],
        //全部部门数据
        deptList:[],

      }
    },
    components:{
      Pagination
    },
    filters:{
      //对部门人员数量进行数据格式化
      hotTagType(value){
        return value>=25 ? 'danger' : (value>=15?'warning':'success')
      }
    },
    mounted(){
      //显示等待画面
      this.listLoading=true;
      //初始获取所有部门数据列表
      fetchList(this.listQuery).then(res=>{
        console.log(res.data);
        this.deptList=res.data.deptList;
        this.total=res.data.deptList.length;
        //数据分页
        this.getList();
        //关闭等待页面
        this.listLoading=false;
      })
    },
    methods:{
      getList(){
        let {page,limit,deptName,personCount}=this.listQuery;

        //对deptList数据进行过滤
        let filterData=[];
        filterData=this.deptList.filter(item=>{
          //针对部门人员数量进行过滤
          if(personCount==1 && item.peoples>=15)
            return false;
          if(personCount==2 && (item.peoples<15 || item.peoples>=25))
            return false;
          if(personCount==3 && item.peoples<25)
            return false;

          //针对部门名称进行过滤
          if(deptName && item.deptName.indexOf(deptName)==-1)
            return false;

          return true;
        })

        //设置数据总数为过滤后的总数据量
        this.total=filterData.length;

        //对deptList数据进行分页检索
        //this.pageData=this.deptList.slice(limit*(page-1),limit*page);
        this.pageData=filterData.filter((item,idx)=>{
          return idx>=limit*(page-1) && idx<limit*page;
        })
      },
      handleFilter(){
        this.listQuery.page=1;
        this.getList();
      },
      handleUpdate(row) {
        this.editTemp = Object.assign({}, row) // copy obj
        this.edtRowId=row;
        this.showEditBox = true
      },
      // 修改框确认操作
      updateData() {
        let index=-1;
        index = this.pageData.indexOf(this.edtRowId);
        this.pageData.splice(index, 1, this.editTemp)
        this.showEditBox = false;
      },
      // 删除操作
      handleDel(row){
        this.pageData.splice(this.pageData.indexOf(row), 1);
        this.$notify({
          title: '提示',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
      },
      // 新增操作
      handleCreate(){
        this.showAddBox = true;
      },
      createInfo(){
        this.addTemp.id = parseInt(Math.random() * 100) + 1024;
        this.addTemp.peoples = this.addTemppeoples;
        this.addTemp.deptName = this.addTempdeptName;
        this.pageData.unshift(this.addTemp);
        this.showAddBox = false;
      }
    }
  }
</script>

<style>

</style>
