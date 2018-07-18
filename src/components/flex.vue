<template>
  <div class="flex-box-wrap">
    <h2 class="flex-tit">{{tit}}</h2>
    <van-tabs :class="tabsVan">
      <van-tab v-for="(data,dataI) in putData" :key="dataI" :title="data.tit">
        <div :class="cont">
          <div v-for="(box,boxI) in data.cont" :key="boxI" :class="setClass(box.index,tit)">
            <div :class="itemClass" v-for="(item,itemI) in box.item" :key="itemI">
              <div v-if="itemI === 0" class="itemm" v-for="(itemm,itemmI) in box.itemm1" :key="itemmI"></div>
              <div v-if="itemI === 1" class="itemm" v-for="(itemm,itemmI) in box.itemm2" :key="itemmI"></div>
              <div v-if="itemI === 2" class="itemm" v-for="(itemm,itemmI) in box.itemm3" :key="itemmI"></div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    tit: {
      type: String,
      default: ''
    },
    putData: {
      type: Array,
      defalut: [
        {
          tit: '单项',
          cont: [
            {
              index: 1,
              item: 1
            }
          ]
        }
      ]
    },
    tabsVan: {
      type: String,
      default: ''
    },
    cont: {
      type: String,
      default: ''
    },
    itemClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    setClass (index, tit) {
      if (tit === '骰子') {
        return this.boxClass(index)
      } else if (tit === '网格') {
        return this.gridClass(index)
      }
    },
    boxClass (index) {
      return index ? `box box${index}` : 'box'
    },
    gridClass (index) {
      return index ? `grid grid${index}` : 'grid'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
.flex-tit
  margin:20px 10px 10px
.flex-content
  width:100%
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  .box
    width:84px
    height:84px
    border:1px solid #666
    margin:10px
    flex: 0 0 84px;
    display:flex
    .item
      width:18px
      height:18px
      margin:5px
      border-radius:50%
      background-color:#999
.grid-wrap
  .grid-content
    width:100%
    height:40px
    margin-bottom:10px
    .grid
      height:100%
      display:flex
      .grid-cell
        height:30px
        margin:5px
        flex:1
        background-color:#999
</style>
