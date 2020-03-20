<style scoped>
  .container{
  }
  .header{
    height: 60px;
    background: #fffbf0;
    display: flex;
  }
  .header-menu{
    flex:1;
    padding-left: 100px;
  }
  .header-menu > ul{
    background: #fffbf0;
  }
  .header-logo{
    flex:1;
    padding: 10px;
  }
  .header-logo img{
    height: 100%;
  }
  .header-other{
    flex:1;
    align-items:center;
    text-align: right;
    display: flex;
  }
  .header-other > input{
    background-color: #fffbf0!important;
  }
  .header-other > button{
    margin-left: 20px;
  }
  .content{
    padding: 64px;
  }

  .time{
    padding-bottom: 10px;
  }

  .article{
    display: flex;
    height: 125px;
  }

  .article-img{
    padding: 0px 10px 10px 10px;
  }

  .article-img > img{
    height: 100%;
  }

  .article-content{
    border-bottom: 1px #efefef solid;
    width: 450px;
  }

  .article-content *{
    padding-bottom: 10px;
  }

  .article-title{
    font-size: 20px;
    font-weight: bold;
  }
  .article-summary{

  }
  .article-tag{

  }

</style>


<template>
  <div class="container">
    <Affix>
      <div class="header">
          <div class="header-logo">
            <img src="../assets/logo.png">
          </div>
          <div class="header-menu">
            <Menu mode="horizontal" active-name="1" @on-select="openTab">
              <MenuItem name="index">
                <Icon type="ios-home"></Icon>
                首页
              </MenuItem>
              <Submenu name="/category">
                <template slot="title">
                  <Icon type="ios-list"></Icon>
                  分类
                </template>
                <MenuItem v-for="category in categoryList" :name="category.code">{{category.name}}</MenuItem>
              </Submenu>
              <MenuItem name="../about">
                <Icon type="md-person"></Icon>
                关于我
              </MenuItem>
            </Menu>
          </div>
          <div class="header-other">
            <!--<Input icon="ios-search" style="width: 300px">-->
            <!--</Input>-->
            <!--<Button ghost shape="circle" size="large" style="color: #19be6b;border-color: #19be6b">登陆</Button>-->
            <!--<Button type="success" shape="circle" size="large">注册</Button>-->
          </div>
      </div>
    </Affix>
    <div class="content">
      <i-col span="14" offset="5">
        <router-view/>
      </i-col>
      <i-col span="5">
        <!--<Tags :tags="['java','cms','blog','日志']"></Tags>-->
      </i-col>
    </div>
  </div>
</template>

<script>
import Tags from "./index/tags.vue"
export default {
  name: 'Index',
  components:{Tags},
  data () {
    return {
      msg: 'lj520',
      categoryList: []
    }
  },
  created(){
      this.init();
  },

  methods:{
      openTab(name){
          this.$router.push("../home/"+name);
      },
      init(){
          this.request.get({
              url:'/display/category/list'
          }).
          then((res)=>{
              this.categoryList = res.data;
          });
      }
  }
}
</script>

