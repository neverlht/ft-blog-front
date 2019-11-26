<style scoped>
</style>


<template>
  <div>
    <Row>
      <i-input v-model="querys.kw">
        <Select v-model="querys.cateCode" slot="prepend" style="width: 80px">
          <Option value="">全部</Option>
          <Option value="java">java</Option>
          <Option value="cms">cms</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click="loadData"></Button>
      </i-input>
    </Row>
    <br>
    <Row>
      <Table stripe :columns="this.columns" :data="this.pageVo.data">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">查看</Button>
          <Button type="error" size="small" @click="edit(row)">编辑</Button>
        </template>
      </Table>
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
        this.loadData();
    },
    loadData(){
        this.querys.page = this.pageVo.page;
        this.querys.pageSize = this.pageVo.pageSize;
        this.$http.get("/api/article/page",{params:this.querys}).then((res)=>{
            this.pageVo = res.data;
        });
    },
    edit(row){
        alert(row.id);
    },
    show(row){
        alert(row.id);
    }
  },
  data () {
    return {
        querys:{
            kw:'',
            cateCode:null,
            page:1,
            pageSize:10
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

