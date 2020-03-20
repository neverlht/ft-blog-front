<style scoped>
  .container{
  }

  .time{
    padding-bottom: 10px;
  }

  .article{
    display: flex;
    height: 140px;
    border-bottom: 1px #efefef solid;
  }

  .article-img-parent{
    padding: 8px;
  }

  .article-img-parent .article-img{
    padding: 0;
    width: 180px;
  }

  .article-img-parent .article-img > img{
    width: 180px;
    max-height: 100px;
  }

  .article-content{
    /*border-bottom: 1px #efefef solid;*/
  }

  .article-content *{
    padding-bottom: 10px;
  }

  .article-title{
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .article-summary{
    padding-bottom: 2px;
    min-height: 50px;
  }
  .article-tag{

  }


</style>


<template>
      <div class="container">

        <Timeline>
          <TimelineItem v-for="item in list">
            <p class="time">{{item.writeDate}}</p>
            <div class="article">
              <div class="article-img-parent">
                <div class="article-img" v-if="item.img">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="article-content">
                <div class="article-title" @click="gotoArticle(item.id)">{{item.title}}</div>
                <div class="article-summary">{{item.summary}}</div>
                <div class="article-tag">
                  <Tag color="volcano" v-for="tag in item.tagList">{{tag}}</Tag>
                </div>
              </div>
            </div>
          </TimelineItem>
        </Timeline>
        <div v-if="readMoreFlag" style="text-align: center;padding-bottom: 10px">
          <Button type="success" @click="readMore">加载更多</Button>
        </div>

      </div>
</template>

<script type="text/babel">
export default {
  name: 'home',
  data () {
    return {
        code:'',
        list:[],
        currentPage:1,
        readMoreFlag: true
    }
  },
  created(){
    this.init();
  },
  beforeRouteUpdate (to, from, next) {
      next();
      this.init();
  },

  methods: {
    init(){
      this.code = this.$route.params.code;
      if(this.code == 'index'){
          this.code = "";
      }
      this.loadData();
    },
    loadData(more){
      this.request.get({
          url:'/display/article/page/'+this.currentPage+'?code='+this.code
      }).
      then((res)=>{
          let list =  res.data.data.map(m=>{
              let t = m.tags.split(",");
              m.tagList = t;
              return m;
          });
          if(more){
              this.list = this.list.concat(res.data.data);
          }else{
              this.list = res.data.data;
          }
          if(this.list.length>=res.data.total){
              this.readMoreFlag = false;
          }
      });
    },
    gotoArticle (id) {
      this.$router.push('../article/'+id);
    },
    readMore(){
        this.currentPage = this.currentPage+1;
        this.loadData();
    }
  }
}
</script>

