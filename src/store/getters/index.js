// getters功能相当于应用中的computed方法
export default {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
