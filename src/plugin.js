import Toast from './toast'

export default {
  //plugin规范必须传入Vue 
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      const Constructor = Vue.extend(Toast)
      console.log(Constructor)
      const toast = new Constructor({
        propsData: toastOptions
      })
      console.log(toast)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}