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
        <el-table-column prop="id" label="编号" min-width="100">
          <template scope="scope"> {{scope.row.pk}}</template>
        </el-table-column>
        <el-table-column prop="book_name" label="书名" min-width=" 100">
          <template scope="scope"> {{scope.row.fields.book_name}}}</template>
        </el-table-column>
        <el-table-column prop="add_time" label="添加时间" min-width="100">
          <template scope=" scope"> {{scope.row.fields.add_time}}</template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
  import apis from '../service/api'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        input:'',
        bookList:[]
      }
    },
    methods:{
      addBook(){

      }
    },
    async created() {
      apis.getBooks().then(res => {
        console.log(res,'@@@')
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
