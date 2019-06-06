<template>
  <div class="home">
    <el-row display="margin-top:10px">
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入书名"></el-input>
      </el-col>
      <el-button type="primary" @click="addBook()">新增</el-button>
    </el-row>
    <el-row>
      <el-table :data="bookList" style="width: 100%" border>
        <el-table-column prop="pk" label="编号" min-width="100">
        </el-table-column>
        <el-table-column prop="fields.book_name" label="书名" min-width="100">
          <template scope=" scope">
            <span>{{scope.row.fields.book_name}}</span>
            <el-button type="primary" @click="modifyBook(scope.row.pk)" style="float: right">修改</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="fields.add_time" label="添加时间" min-width="100">
        </el-table-column>
        <el-table-column label="操作" min-width="100">
          <template scope=" scope">
            <el-button type="primary" @click="delBook(scope.row.pk)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog title="修改书名" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="新的书名" label-width="200">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeName()">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import apis from '../service/api'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        input: '',
        dialogFormVisible:false,
        bookList: [],
        modPk:'',
        form: {
          name: ''
        },
      }
    },
    methods: {
      addBook() {
        if (this.input || this.input === 0) {
          apis.addBook(this.input).then(res => {
            if (res.data.msg === 'success') {
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.getBooks()
            }
          })
        } else {
          this.$message({
            message: '书名不能为空',
            type: 'warning'
          });
        }
      },
      getBooks() {
        apis.getBooks().then(res => {
          this.bookList = res.data.list
        })
      },
      delBook(id) {
        apis.delBook(id).then(res => {
          if (res.data.msg === 'success') {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getBooks()
          }
        })
      },
      modifyBook(pk) {
        this.dialogFormVisible = true
        this.modPk = pk
      },
      changeName(){
        if (this.form.name || this.form.name === 0) {
          apis.modifyBook(this.modPk,this.form.name).then(res => {
            if (res.data.msg === 'success') {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.dialogFormVisible = false
              this.getBooks()
            }
          })
        } else {
          this.$message({
            message: '书名不能为空',
            type: 'warning'
          });
        }
      }
    },
    async created() {
      this.getBooks()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
