<template>
  <div class="flex-wrap">
    <FlexC :putData="flexData" :tit="'骰子'" :cont="'flex-content'" :itemClass="'item'" :tabsVan="'flex-wrap'"></FlexC>
    <FlexC :putData="gridData" :tit="'网格'" :itemClass="'grid-cell'" :tabsVan="'grid-wrap'" :cont="'grid-content'"></FlexC>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      flexData: [
        {
          tit: '单项',
          cont: [
            {
              index: 1,
              item: 1
            }, {
              index: 2,
              item: 1
            }, {
              index: 3,
              item: 1
            }, {
              index: 4,
              item: 1
            }, {
              index: 5,
              item: 1
            }, {
              index: 6,
              item: 1
            }, {
              index: 7,
              item: 1
            }, {
              index: 8,
              item: 1
            }, {
              index: 9,
              item: 1
            }
          ]
        },
        {
          tit: '双项',
          cont: [
            {
              index: 21,
              item: 2
            }, {
              index: 22,
              item: 2
            }, {
              index: 23,
              item: 2
            }, {
              index: 24,
              item: 2
            }, {
              index: 25,
              item: 2
            }, {
              index: 26,
              item: 2
            }
          ]
        },
        {
          tit: '三项目',
          cont: [
            {
              index: 31,
              item: 3
            }
          ]
        },
        {
          tit: '四项目',
          cont: [
            {
              index: 41,
              item: 4
            }, {
              index: 42,
              item: 2,
              itemm1: 2,
              itemm2: 2,
              itemm3: 0
            }
          ]
        },
        {
          tit: '六项目',
          cont: [
            {
              index: 61,
              item: 6
            }, {
              index: 62,
              item: 6
            }, {
              index: 63,
              item: 3,
              itemm1: 3,
              itemm2: 1,
              itemm3: 2
            }
          ]
        },
        {
          tit: '九项目',
          cont: [
            {
              index: 91,
              item: 9
            }
          ]
        }
      ],
      gridData: [
        {
          tit: '基本网格',
          cont: [
            {
              index: 1,
              item: 3
            }
          ]
        },
        {
          tit: '百分比',
          cont: [
            {
              index: 2,
              item: 1,
              itemm1: 3
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.box2
  justify-content:center
.box3
  justify-content:flex-end
.box4
  align-items:center
.box5
  justify-content:center
  align-items:center
.box6
  justify-content:flex-end
  align-items:center
.box7
  align-items:flex-end
.box8
  justify-content:center
  align-items:flex-end
.box9
  justify-content:flex-end
  align-items:flex-end
.box21
  justify-content:space-between
.box22
  flex-direction:column
  justify-content:space-between
.box23
  flex-direction:column
  justify-content:space-between
  align-items:center
.box24
  flex-direction:column
  justify-content:space-between
  align-items:flex-end
.box25
  .item:nth-child(2)
    align-self:center
.box26
  justify-content:space-between
  .item:nth-child(2)
    align-self:flex-end
.box31
  justify-content:space-between
  .item:nth-child(2)
    align-self:center
  .item:nth-child(3)
    align-self:flex-end
.box41
  flex-wrap:wrap
  justify-content:flex-end
  align-content:space-between
.box42
  flex-wrap:wrap
  align-content:space-between
  .item
    width:auto
    height:auto
    margin:0
    background-color:#fff
    flex-basis:100%
    display:flex
    justify-content:space-between
    .itemm
      width:18px
      height:18px
      margin:5px
      border-radius:50%
      background-color:#999
.box61
  flex-wrap:wrap
  align-content:space-between
.box62
  flex-direction:column
  flex-wrap:wrap
  align-content:space-between
.box63
  flex-wrap:wrap
  .item
    width:auto
    height:auto
    margin:0
    background-color:#fff
    flex-basis:100%
    display:flex
    .itemm
      width:18px
      height:18px
      margin:5px
      border-radius:50%
      background-color:#999
  .item:nth-child(2)
    justify-content:center
  .item:nth-child(3)
    justify-content:space-between
.box91
  flex-wrap:wrap
.grid-wrap
  .grid-content
    .grid.grid2
      width:100%
      .grid-cell
        display:flex
        margin:0
        background-color: #fff
        .itemm
          height:30px
          margin:0px 5px
          flex:1
          background-color:#999
        .itemm:nth-child(2)
          flex: 0 0 33%;
        .itemm:nth-child(3)
          flex: 0 0 50%;
</style>
