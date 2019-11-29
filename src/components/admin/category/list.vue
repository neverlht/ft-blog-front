<style scoped>
</style>


<template>
  <div>
    <Row>
        <Button type="success">新增</Button>
    </Row>
    <br>
    <Row>
      <Table border stripe :columns="this.columns" :data="this.pageVo.data">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)">修改</Button>
          <Button type="error" size="small" @click="del(row)">删除</Button>
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
    loadData(){
        let queryParams = Object.assign({},{
            page:this.pageVo.page,
            pageSize:this.pageVo.pageSize
        });
        this.request.get({
            url:"/api/category/page",
            params:queryParams
        }).then((response)=>{
            this.pageVo = response.data;
        });
    },
    edit(row){
    },
    del(row){
    }
  },
  data () {
    return {
        columns:[
            {
                title: '名称',
                key:'name'
             },
            {
                title: '编码',
                key: 'code'
            },
            {
                title: '最新修改时间',
                key: 'updateTime'
            },
            {
                title: '备注',
                key: 'remark'
            },
            {
                title: '排序',
                key: 'sort'
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

