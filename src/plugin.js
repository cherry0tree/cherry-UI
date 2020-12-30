import Toast from './toast'

let currentToast

export default {
  //plugin规范必须传入Vue 
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {

    function createToast({Vue, message, propsData, onClose}) {
      const Constructor    = Vue.extend(Toast)
      const toast          = new Constructor({propsData})
      toast.$slots.default = [message]
      toast.$mount()
      toast.$on('close', onClose)
      console.log('test destory when click')
      document.body.appendChild(toast.$el)
      return toast
    }
    if(currentToast) {
      //摧毁前一个dom
      currentToast.close();
    }
    currentToast = createToast({
      Vue,
      message,
      propsData: toastOptions,
      onClose: () => {
        //seems not necessary
        currentToast = null;
      }
    })
    }
  }
}