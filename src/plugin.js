import Toast from './toast'

export default {
  //plugin规范必须传入Vue 
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(Toast)
      console.log(Constructor)
      const toast = new Constructor()
      console.log(toast)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}