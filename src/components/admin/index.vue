<style scoped>
  .container{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #EFEFEF;
  }
  .content-parent{
    height:100%;
  }
  .content{
    /*background: #dddddd;*/
    padding: 20px 50px 0 50px;
    height: 600px;
  }
  .content-left{
    height: 100%;
    background: #2d4475;
  }
  .content-editor{
    height: 100%;
  }
  .left-menu{
    background: #2d4475;
  }
  .header{
    height: 64px;
    background: #243961;
  }
  .header-title{
    color: #FFF;
    font-size: 24px;
    line-height: 60px;
    padding: 2px 20px;
    float: left;
  }
  .header-btn{
    float: right;
    line-height: 60px;
    padding: 2px 20px;
  }
</style>


<template>
  <div class="container">
    <Row class="header">
      <div class="header-title">FT-Blog后台管理</div>
      <div class="header-btn">
        <Button type="default" @click="logout">登出</Button>
      </div>
    </Row>
    <Row class="content-parent">
      <i-col span="4" class="content-left">
        <Menu class="left-menu" theme="dark" width="auto" @on-select="openTab">
          <MenuGroup title="内容管理">
            <MenuItem name="articleList">文章管理</MenuItem>
            <MenuItem name="articlePublish/create">发布文章</MenuItem>
            <MenuItem name="categoryList">分类管理</MenuItem>
            <MenuItem name="todo_remark">评论管理</MenuItem>
          </MenuGroup>
          <MenuGroup title="系统管理">
            <MenuItem name="todo_config">系统设置</MenuItem>
            <MenuItem name="todo_log">系统日志</MenuItem>
            <MenuItem name="todo_version">版本信息</MenuItem>
          </MenuGroup>
        </Menu>
      </i-col>
      <i-col span="20" class="content">
        <router-view/>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    openTab(name){
        if(name.indexOf("todo")>=0){
            this.$Message.info("功能正在开发中……");
        }else{
            this.$router.push('/admin/'+name);
        }
    },
    logout(){
        localStorage._login_token=undefined;
        this.$router.push("/");
    }
  }
}
</script>

