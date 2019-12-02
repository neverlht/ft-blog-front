<style scoped>
</style>


<template>
  <div>
    <Row>
        <Button type="success" @click="add">新增</Button>
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

    <Drawer width="400" title="编辑分类" :closable="true" v-model="openCard">
      <CategoryCard ref="cateRef" :close="close"></CategoryCard>
    </Drawer>
  </div>
</template>

<script>
import CategoryCard from './card.vue';
export default {
  created(){
      this.init();
  },
  components:{CategoryCard},
  methods:{
    init(){
        this.loadData(1);
    },
    add(){
      this.openCard = true;
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
            url:"/api/category/base/page",
            params:queryParams
        }).then((response)=>{
            this.pageVo = response.data;
        });
    },
    edit(row){
        this.openCard = true;
        this.$refs['cateRef'].loadData(row.id);
    },
    del(row){
        this.$Modal.confirm({
            title: '提示',
            content: '确认删除【'+row.name+'】分类吗',
            onOk: () => {
                this.request.post({
                    url:"/api/category/base/delete",
                    params:{id:row.id}
                }).then(()=>{
                    this.$Message.success("删除成功");
                    this.loadData();
                });
            },
            onCancel: () => {
            }
        });

    },
    close(){
        this.openCard = false;
        this.loadData();
    }
  },
  data () {
    let vm = this;
    return {
        openCard:false,
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
                key: 'updateTime',
                render: (h, params) => {
                    let date = vm.$Utils.DateFormat(params.row.updateTime,'YYYY-MM-DD HH:mm:ss');
                    return h("div",date);
                }
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

