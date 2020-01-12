<style scoped>
    .container{
        padding-bottom: 50px;
    }
    .title{
        font-size: 34px;
        padding-bottom: 20px;
    }
    .content{
        padding: 5px 15px;
    }
</style>


<template>
      <div class="container">
          <h1 class="title">{{article.title}}</h1>
          <div class="markdown-body content" v-html="article.text"></div>
      </div>
</template>

<script type="text/babel">
import 'mavon-editor/dist/markdown/github-markdown.min.css'
export default {
  name: 'article',
  created(){
      this.id = this.$route.params.id;
      if(this.id){
          this.init();
      }else{
          this.router.push("/");
      }

  },
  data () {
    return {
        article:"",
        id:''
    }
  },
  methods: {
      init(){
          this.request.get({
              url:'/display/article/'+this.id
          }).
          then((res)=>{
              this.article = res.data;
          });
      }
  }
}
</script>

