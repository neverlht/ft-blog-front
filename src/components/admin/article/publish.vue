<style scoped>
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
        <Tag v-for="(tag,index) in article.tags" :key="index" :name="tag" closable @on-close="delTag(index)">{{tag}}</Tag>
      </div>
      <FormItem label="分类">
        <i-input v-model="article.cateCode"></i-input>
      </FormItem>
      <mavon-editor ref="mdEditor" class="content-editor" :value="article.textMd" v-model="article.content" @imgAdd="imgAddByServer" @save="save"/>
      <div style="margin-top: 10px;text-align: right">
        <Button type="success" @click="publish">发布</Button>
      </div>
    </Form>
  </div>
</template>

<script>
  import Upload from '@/utils/upload'
export default {
  data () {
    return {
      img_file:{},
      currentTag:'',
      article:{
        text:"",
        textMd:"",
        title:'',
        tags:[],
        cateCode:''
      }
    }
  },
  methods:{
    delTag(index){
      this.article.tags.splice(index,1);
    },
    addTag(){
        this.article.tags.push(this.currentTag);
    },
    imgAddByServer(pos,$file){
        this.$http.get('/api/upload/signature').then((res)=>{
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
        this.$http.post("/api/article/save",this.article).then(()=>{
            this.$Message.success("保存成功");
            this.$router.push("/admin/articleList");
        });
    }
  }
}
</script>

