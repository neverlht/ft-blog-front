<style scoped>
  .content-editor{
    z-index: 899;
    height: 540px;
  }
</style>


<template>
  <div>
    <Form :model="article" label-position="left" :label-width="100">
      <FormItem label="文章标题">
        <i-input v-model="article.title"></i-input>
      </FormItem>
      <FormItem label="标签">
        <i-input v-model="currentTag">
          <Button slot="append" icon="md-add" @click="addTag" style="height: 32px;"></Button>
        </i-input>
      </FormItem>
      <div style="margin-bottom: 24px;vertical-align: top;">
        <Tag v-for="(tag,index) in tags" :key="index" :name="tag" closable @on-close="delTag(index)">{{tag}}</Tag>
      </div>
      <FormItem label="分类">
        <Select v-model="article.cateCode">
          <Option v-for="category in categoryList" :value="category.code">{{category.name}}</Option>
        </Select>
      </FormItem>
      <mavon-editor ref="mdEditor" class="content-editor" :value="article.textMd" @imgAdd="imgAddByServer" @save="save"/>
      <div style="margin-top: 10px;text-align: right">
        <Button type="success" @click="publish">发布</Button>
      </div>
    </Form>
  </div>
</template>

<script>
  import Upload from '@/common/upload'
export default {
  data () {
    return {
      img_file:{},
      currentTag:'',
      article:{
        id:null,
        text:"",
        textMd:"",
        title:'',
        cateCode:''
      },
      tags:[],
      categoryList:[]
    }
  },
  created(){
    this.loadCategory();
    if(this.$route.params.id!='create'){
        this.article.id = this.$route.params.id;
        this.loadData();
        this.loadTagData();
    }
  },
  methods:{
    loadCategory(){
        this.request.get({
            url:"/api/category/base/list"
        }).then((response)=>{
            this.categoryList = response.data;
        });
    },
    loadData(){
        this.request.get({
            url:'/api/article/base/info/'+this.article.id
        }).then((res)=>{
            this.article = res.data;
        });
    },
    loadTagData(){
        this.request.get({
            url:'/api/article/tag/'+this.article.id
        }).then((res)=>{
            this.tags = res.data.map(t=> t.name);
        });
    },
    delTag(index){
      this.tags.splice(index,1);
    },
    addTag(){
        this.tags.push(this.currentTag);
        this.currentTag = "";
    },
    imgAddByServer(pos,$file){
        this.request.get({
            url:'/api/upload/signature'
        }).then((res)=>{
            Upload.uploadFile($file,res.data,(url)=>{
                this.$refs.mdEditor.$img2Url(pos, url);
            });
        });
    },
    publish(){
        this.save(this.$refs.mdEditor.d_value,this.$refs.mdEditor.d_render);
    },
    save(value,render){
        this.article.text = render;
        this.article.textMd = value;
        this.article.tags = this.tags;
        this.request.post({
            url:"/api/article/save",
            data:this.article
        }).then((res)=>{
            this.$Message.success("保存成功");
            this.$router.push("/admin/articleList");
        });
    }
  }
}
</script>

