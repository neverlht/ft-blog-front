<style scoped>
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
    padding-left: 100px;
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
    padding-top: 80px;
    margin-left: 50%;
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

  .otherOne-time{
    margin-left: -170px;
  }

  .otherOne-content{
    margin-left: -630px;
  }
</style>


<template>
  <div>
    <Affix>
      <div class="header">
          <div class="header-logo">
            <img src="../assets/logo.png">
          </div>
          <div class="header-menu">
            <Menu mode="horizontal" active-name="1">
              <MenuItem name="1">
                <Icon type="ios-home"></Icon>
                首页
              </MenuItem>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-list"></Icon>
                  分类
                </template>
                <MenuGroup title="技术">
                  <MenuItem name="3-1">java</MenuItem>
                  <MenuItem name="3-2">node.js</MenuItem>
                  <MenuItem name="3-3">前端</MenuItem>
                </MenuGroup>
                <MenuGroup title="其他">
                  <MenuItem name="3-4">随笔</MenuItem>
                  <MenuItem name="3-5">心情</MenuItem>
                </MenuGroup>
              </Submenu>
              <MenuItem name="4">
                <Icon type="ios-heart"></Icon>
                我的另一半
              </MenuItem>
            </Menu>
          </div>
          <div class="header-other">
            <Input icon="ios-search" style="width: 300px">
            </Input>
            <Button ghost shape="circle" size="large" style="color: #19be6b;border-color: #19be6b">登陆</Button>
            <Button type="success" shape="circle" size="large">注册</Button>
          </div>
      </div>
    </Affix>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'lj520'
    }
  }
}
</script>

