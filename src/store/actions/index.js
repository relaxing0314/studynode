/*
 * actions异步处理数据的方法，只接受两个参数
 * 第一个参数是store对象
 * 第二个参数是触发action方法时传入的数据对象
*/

export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
