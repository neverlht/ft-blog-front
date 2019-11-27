<style scoped>
  .left-menu{
  }
  .content{
    /*background: #dddddd;*/
    padding: 20px 50px 0 50px;
    height: 600px;
  }
  .content-editor{
    height: 100%;
  }
</style>


<template>
  <div>
    <Row>
      <i-col span="4">
        <Menu class="left-menu" theme="dark" width="auto" @on-select="openTab">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <MenuItem name="articleList">文章管理</MenuItem>
            <MenuItem name="articlePublish/create">发布文章</MenuItem>
          </Submenu>
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
      this.$router.push('/admin/'+name);
    }
  }
}
</script>

