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
  </div>
</template>

<script>
export default {
  created(){
  },
  methods:{
    init(){
    },
    add(){
        
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

