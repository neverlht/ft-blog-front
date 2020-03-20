<style scoped>
  .container{
    padding: 0 25px;
  }
  .item{
    width: 50px;
    height: 50px;
    position: absolute;
  }
  .content{
    width: 100%;
    height: 300px;
    position: relative;
  }
</style>


<template>
      <div class="container">
          <Card :padding="2">
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              标签墙
            </p>
            <div class="content" ref="content">
                <!--<div class="item" v-for="tag,index in tags" :style="getRandomStyle(index)">{{tag}}</div>-->
                <Row class="item-row">
                    <i-col span="4"></i-col>
                    <i-col span="5"></i-col>
                    <i-col span="6"></i-col>
                    <i-col span="5"></i-col>
                    <i-col span="4"></i-col>
                </Row>
            </div>
          </Card>
      </div>
</template>

<script type="text/babel">
export default {
    name: 'tags',
    props:{
      tags:{
          type:Array,
          default:[]
      }
    },
    created(){
        this.genRandom();
    },
  data () {
    return {
        randomList:[],
        colors:[ '#7ec95a', '#ce4e4e','#87d9fd','#596fe3', '#8167dd','#37d5ee','#de7630', '#dfc222']
    }
  },
  methods: {
    genRandom(){
        let length = this.tags.length;
        for(let i=0;i<this.tags.length;i++){
            let random = this.getRandom(length);
            while(this.randomList.indexOf(random)>-1){
                random = this.getRandom(length);
            }
            this.randomList.push(random);
        }
    },
    getRandom(max){
        let random = Math.floor(Math.random()*max);
        return random;
    },
    randomColorAndSize(index){
      let random = this.getRandom(this.colors.length);
      let fontSize= 32-index*4;
      if(fontSize<16)
          fontSize = 16;
      return "color:"+this.colors[random]+";font-size:"+fontSize+"px;";
    },
    getRandomStyle(index){
        // let w = this.$refs['content'].offsetX;
        // let h = this.$refs['content'].offsetY;
        // console.log(w);
        // console.log(h);
        return "";
    }
  }
}
</script>

