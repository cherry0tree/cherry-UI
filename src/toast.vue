<template>
<div class="wrapper" :class="toastClasses">
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    enableHtml: {
      type: Boolean,
      default: false
    },
    autoClose:{
      type: Boolean,
      default: false      
    },
    autoCloseDelay:{
      type:Number,
      default:5
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text: '关闭',
          callback: undefined
        }
      }
    },
    position: {
      type: String,
      default: 'middle',
      validator(value){
        return ['top','middle','bottom'].indexOf(value) >= 0
      }
    }   
  },
  computed: {
    toastClasses(){
      return {
        [`position-${this.position}`] : true
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    close(){
      //删除自己
      this.$emit('close')
      this.$el.remove()
      //结束本实例生命周期
      this.$destroy()
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if(this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this);
      }
    },
    log(){
      console.log('回调执行')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "helper";

@keyframes slide-up {
  0%{opacity: 0;transform:translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{opacity: 0;transform:translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes fade-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}

.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration:300ms;
  &.position-top{
    top: 0;
    .toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade-in $animation-duration;
    }
  }
  &.position-bottom{
    bottom: 0;
    .toast{
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.toast {
  font-size: $font-size;
  color: #fff;
  height: $toast-height;
  line-height: 1.8;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5); 
}
.message{
  padding: 8px 0;
}
.close{
  cursor: pointer;
  padding-left: 16px;
}
.line{
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>