<style scoped>
  .about-text{
    font-size: 32px;
  }
  .about-text-span{
    font-size: 21px;
  }

</style>


<template>
      <div class="container">
        <Row>
          <i-col span="9">
            <Card>
              <p slot="title">关于我</p>
              <h2>可以叫我四号</h2>
              <p>高中开始编程，一名oier中的小菜鸡</p>
              <p>大学acm，从头酱油到尾</p>
              <p>工作后难以重新拥有当年的热血</p>
              <p>特此弄一个博客折腾自己，就为和自己过不去</p>
              <Divider>我是分割线</Divider>
              <Tag color="blue">90后</Tag>
              <Tag color="green">技术男</Tag>
              <Tag color="volcano">不宅</Tag>
              <Tag color="cyan">足球</Tag>
              <Tag color="purple">游戏</Tag>
              <Divider/>
              <Icon class="about-text" type="ios-mail-outline"/><span class="about-text-span">&nbsp;lihaotian_120@163.com</span>
            </Card>
          </i-col>
          <i-col span="14" offset="1">
          <Card>
            <p slot="title">本站里程碑</p>
            <Timeline>
              <TimelineItem>
                <p class="time">不记得什么时候</p>
                <p class="content">只知道我想变得比你强，所以我要在这里一步步的建立一个从无到有的世界</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2019年某月某日</p>
                <p class="content">FTBlog研发计划开始</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2020年1月13日</p>
                <p class="content">FTBlog初版v1.0正式上线</p>
              </TimelineItem>
              <TimelineItem color="green">
                <p class="time">2020年2月29日</p>
                <p class="content">FTBlog(v1.1)计划上线</p>
              </TimelineItem>
            </Timeline>
          </Card>
          </i-col>
        </Row>
      </div>
</template>

<script type="text/babel">
export default {
    name: 'home',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

