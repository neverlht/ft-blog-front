<style scoped>
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
    cursor: pointer;
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
      <div class="container">

      <Timeline>
        <TimelineItem>
          <p class="time">2017年2月12日21:00:33</p>
          <div class="article">
            <div class="article-img">
              <img src="http://upload-images.jianshu.io/upload_images/9132321-32b7c755bfa8599e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="">
            </div>
            <div class="article-content">
              <div class="article-title" @click="gotoArticle">男童抢夺陌生人蛋卷，家长：吃完了再要！</div>
              <div class="article-summary">11月20号下午6点左右，程小姐在搭乘地铁时，遇到一名男孩索要她手上的蛋卷，“你给我，我要吃”，被拒绝后，男孩居然……</div>
              <div class="article-tag">
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag>标签三</Tag>
                <Tag>标签四</Tag>
              </div>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem>
          <p class="time otherOne-time">2017年6月22日21:00:33</p>
          <div class="article otherOne-content">
            <div class="article-img">
            </div>
            <div class="article-content">
              <div class="article-title">女孩餐桌上懂敬酒礼仪，让大家觉得好有教养！</div>
              <div class="article-summary">其实，我觉得现在的餐桌礼仪为可以分为两种：一种是传统的白酒礼仪。一种是外来的红酒礼仪。就像现在的手机，分为苹果机和安卓机。……</div>
              <div class="article-tag">
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag>标签三</Tag>
                <Tag>标签四</Tag>
              </div>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem>
          <p class="time otherOne-time">2017年7月03日21:00:33</p>
          <div class="article otherOne-content">
            <div class="article-img">
              <img src="http://upload-images.jianshu.io/upload_images/1988937-35f99f7190f401ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="">
            </div>
            <div class="article-content">
              <div class="article-title">七彩梦</div>
              <div class="article-summary">近二年部分国画作品 光是色彩的灵魂，愿色彩温柔我们的时光，净化我们的心灵…… “光而不耀、方而不割”……</div>
              <div class="article-tag">
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag>标签三</Tag>
                <Tag>标签四</Tag>
              </div>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2017年9月11日21:00:33</p>
          <div class="article">
            <div class="article-img">
            </div>
            <div class="article-content">
              <div class="article-title">考研世界里的六种人</div>
              <div class="article-summary">2017年12月2日 夜 凌晨四点半 没有星星 考研世界里的六种人，时间不会辜负每一个有心人，愿你们都能岁月静好，心如止水。 我仔细想了…</div>
              <div class="article-tag">
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag>标签三</Tag>
                <Tag>标签四</Tag>
              </div>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2017年12月02日21:00:33</p>
          <div class="article">
            <div class="article-img">
              <img src="http://upload-images.jianshu.io/upload_images/5102503-c16b0fdffecd0518.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="">
            </div>
            <div class="article-content">
              <div class="article-title">旅行四年，我告诉你中国必去</div>
              <div class="article-summary">我对腾冲一点都不陌生，尤其是和顺古镇。但我只去过哪里一次。 然而第一次却没有陌生感，只有一种隐隐约约再相见时的感觉...</div>
              <div class="article-tag">
                <Tag>标签一</Tag>
                <Tag>标签二</Tag>
                <Tag>标签三</Tag>
                <Tag>标签四</Tag>
              </div>
            </div>
          </div>
        </TimelineItem>
      </Timeline>
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
    gotoArticle () {
      this.$router.push('article')
    }
  }
}
</script>

