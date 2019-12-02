<style scoped>
</style>


<template>
  <div>
    <Row>
      <i-input v-model="querys.kw">
        <Select v-model="querys.cateCode" slot="prepend" style="width: 80px">
          <Option value="">全部</Option>
          <Option v-for="category in categoryList" :value="category.code">{{category.name}}</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="loadData"></Button>
      </i-input>
    </Row>
    <br>
    <Row>
      <Table border stripe :columns="this.columns" :data="this.pageVo.data">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">查看</Button>
          <Button type="error" size="small" @click="edit(row)">编辑</Button>
        </template>
      </Table>
    </Row>
    <br>
    <Row>
      <Page :total="this.pageVo.total" show-sizer :page-size-opts="[5,10,20]" @on-change="changePage" @on-page-size-change="changeSize"/>
    </Row>
  </div>
</template>

<script>
export default {
  created(){
      this.init();
  },
  methods:{
    init(){
        this.loadData(1);
        this.loadCategory();
    },
    changeSize(size){
        this.pageVo.pageSize = size;
        this.pageVo.page = 1;
        this.loadData();
    },
    changePage(page){
        this.pageVo.page = page;
        this.loadData();
    },
    loadCategory(){
        this.request.get({
            url:"/api/category/base/list"
        }).then((response)=>{
            this.categoryList = response.data;
        });
    },
    loadData(){
        let queryParams = Object.assign(this.querys,{
            page:this.pageVo.page,
            pageSize:this.pageVo.pageSize
        });
        this.request.get({
            url:"/api/article/page",
            params:queryParams
        }).then((response)=>{
            this.pageVo = response.data;
        });
    },
    edit(row){
        this.$router.push("/admin/articlePublish/"+row.id);
    },
    show(row){
        alert(row.id);
    }
  },
  data () {
    return {
        categoryList:[],
        querys:{
            kw:'',
            cateCode:null
        },
        columns:[
            {
                title: '标题',
                key:'title'
             },
            {
                title: '分类',
                key: 'cateName'
            },
            {
                title: '摘要',
                key: 'summary'
            },
            {
                title: '点赞数',
                key: 'zan'
            },
            {
                title: '访问量',
                key: 'rate'
            },
            {
                title: '操作',
                slot: 'action',
                width: 150,
                align: 'center'
            }
        ],
        pageVo:{
            page:1,
            pageSize:10,
            data:[]
        }
    }
  }
}
</script>

