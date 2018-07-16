import Vuex from 'vuex'
// 引入定义的state
import defaultState from './state'
// 引入定义的mutations
import mutations from './mutations'
// 引入定义的getters，功能相当于应用中的computed方法
import getters from './getters'
// 引入定义的异步处理的方法actions
import actions from './actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    // 初始化的state
    state: defaultState,
    // 修改数据
    mutations,
    // 相当于computed方法
    getters,
    // 异步方法
    actions
  })
}
