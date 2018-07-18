<template>
  <div class="app">
    <div class="header-box">
      <Header :data="headerData" :onClickLeft="headerClickLeft" :onClickRight="headerClickRight"></Header>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tab">
      <van-row>
        <van-col :span="footerTabCol" v-for="(item,index) in $router.options.routes" :key="index" v-if="!item.hidden" :style="index == 0 ? {border:'none'} : {borderLeft:'1px solid #999'}">
          <span @click="tabClick(item)">{{item.name}}</span>
      </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      footerTabCol: 8,
      headerData: {
        title: '',
        leftText: '',
        rightText: '',
        leftArrow: false,
        rightIcon: ''
      }
    }
  },
  methods: {
    tabClick (route) {
      this.$router.push(route.path)
    },
    headerClickLeft () {
      this.$router.go(-1)
    },
    headerClickRight () {
      console.log('header right click')
    }
  },
  updated () {
    this.headerData.title = this.$route.name
  },
  mounted () {
    const routes = this.$router.options.routes
    let routesLen = 0
    let routeShow = []
    routes.map((v) => {
      if (!v.hidden) {
        routesLen++
        routeShow.push(v)
      }
    })
    this.footerTabCol = 24 / routesLen
    this.headerData.title = routeShow[0].name
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/base.styl'
.app
  width:100%
  height:100%
  position:relative
  .header-box
    width:100%
    height:40px !important
    position:fixed
    top:0
    left:0
    background-color:#20a0ff
    color:#fff
    z-index:100
    .header-wrap
      width:100%;
      height:100%;
      background-color:@background-color
  .content
    width:100%
    height:100%
    padding-interior()
    padding-top:42px
    padding-bottom:42px
    .flex-wrap
      padding-interior()
      padding-bottom:42px
  .tab
    width:100%
    height:40px
    position:fixed
    bottom:0
    left:0
    background-color:#20a0ff
    color:#fff
    z-index:100
    .van-row
      width:100%
      height:100%
      .van-col
        height:100%
        display:flex
        justify-content:center
        align-items:center
        cursor:pointer
</style>
