<template>
<div>
	<el-button type="text" @click="dialogVisible = true">add学生</el-button>
	<el-dialog
	title="提示"
	:visible.sync="dialogVisible"
	width="30%">
	<span>这是一段信息</span>
	<span slot="footer" class="dialog-footer">
		<el-button @click="dialogVisible = false">取 消</el-button>
		<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	</span>
	</el-dialog>

 <el-table
    :data="studentList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="age"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
	<!-- scope.row可以找到绑定数据的对象 -->
        <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>


<script>
import axios from 'axios'
  export default {
    methods: {
		del(id) {
		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
			axios.delete(`http://127.0.0.1:3000/student${id}`).then(()=>{
          this.$message({
            type: 'success',
            message: '删除成功!'
          });				
		this.getStudentList();
	})

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
	},
	getStudentList(){
		axios.get("http://127.0.0.1:3000/student").then((res)=>{
			this.studentList=res.data;
		})
	}
    },
    data() {
      return {
        studentList: [],
	dialogVisible: false
      }
    },
	created(){
		this.getStudentList;
	}
  }
</script>




