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
        <van-col :span="footerTabCol" v-for="(item,index) in $router.options.routes" :key="index" v-if="!item.hidden">
          <div @click="tabClick(item)">{{item.name}}</div>
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
      this.headerData.title = route.name
      this.$router.push(route.path)
    },
    headerClickLeft () {
      this.$router.go(-1)
    },
    headerClickRight () {
      console.log('header right click')
    }
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
@import './common/stylus/base.styl';
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
  .content
    width:100%
    height:100%
    padding-interior()
    padding-top:42px
</style>
