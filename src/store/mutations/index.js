/*
 * mutations同步处理数据的方法,只接受两个参数
 * 第一个参数是store中的state
 * 第二个参数是payload对象
*/
export default {
  // 添加方法
  updateCount (state, num) {
    state.count = num
  }
}
