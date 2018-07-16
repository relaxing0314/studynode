<template>
  <van-nav-bar class="header-wrap"
    :title="data.title"
    :left-text="data.leftText"
    :right-text="data.rightText"
    :left-arrow="data.leftArrow"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <van-icon v-if="data.rightIcon" :name="data.rightIcon" slot="right" />
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: '',
          leftText: '',
          rightText: '',
          leftArrow: false,
          rightIcon: ''
        }
      }
    },
    onClickLeft: {
      type: Function
    },
    onClickRight: {
      type: Function
    }
  }
}
</script>
