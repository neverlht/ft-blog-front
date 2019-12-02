<style scoped>
</style>


<template>
  <div>
    <Form :model="data" label-position="left" :label-width="100">
      <FormItem label="名称">
        <Input v-model="data.name"></Input>
      </FormItem>
      <FormItem label="编码">
        <Input v-model="data.code"></Input>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="data.remark"></Input>
      </FormItem>
      <FormItem label="排序">
        <Input v-model="data.sort"></Input>
      </FormItem>
    </Form>
    <Row style="position:absolute;bottom: 10px;padding-right:30px;width:100%;text-align: right">
      <Button type="success" @click="save">保存</Button>
    </Row>
  </div>
</template>

<script>
export default {
  props:{
    close: {
        type:Function,
        default:function(){}
    }
  },
  created(){
  },
  methods:{
    init(){
        this.data={
            name:'',
            code:'',
            sort:1,
            remark:''
        }
    },
    loadData(id){
        this.request.get({
          url:'/api/category/base/info/'+id
        }).then((res)=>{
            this.data = res.data;
        });
    },
    save(){
        this.request.post({
            url:'/api/category/base/save',
            data:this.data
        }).then((res)=>{
            this.$Message.success("保存成功");
            this.init();
            this.close();
        });
    }
  },
  data () {
    return {
        data:{
            name:'',
            code:'',
            sort:1,
            remark:''
        }
    }
  }
}
</script>

