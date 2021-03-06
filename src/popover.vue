<template>
<div class="popover" ref="popover">
  <div ref="contentWrapper" class="content-wrapper" :class="contentClass" v-if="visible">
    <slot name="content"></slot>
  </div>
  <span ref="triggerWrapper" style="display: inline-block" >
    <slot></slot>
  </span>
</div>
</template>

<script>
export default {
  name: 'popover',
  props:{
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','right','bottom','left'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    contentClass(){
      return [`position-${this.position}`]
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    if(this.trigger === 'click') {
      //显示的节点也能click显示与隐藏 onClickDocument return来解决
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)      
    }
  },
  methods: {
    onClick(){
      if (this.visible === true) {
          this.close()
      } else {
          this.open()
      }
    },
    open(){
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
      })      
    },
    close(){
      this.visible = false
    },
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      console.log(contentWrapper.getBoundingClientRect())
      const {height: height2} = contentWrapper.getBoundingClientRect()
      console.log(window)
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'
    }   
  }
}
</script>
<style scoped lang="scss">
@import "helper";

.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.content-wrapper {
  position: absolute;
  border: solid 1px $popover-border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  z-index: 30 !important;
  &::before, &::after{
    content: '';
    display: block;
    position: absolute;
    border: solid 10px transparent;
    width: 0;
    height: 0;
  }
  &.position-top{
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      left: 10px;
    }      
    &::before {
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
    }      
  }
  &.position-bottom{
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }      
  }
  &.position-left{
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right: none;
      border-left-color: black;
      left: 100%
    }
    &::after {
      border-right: none;
      border-left-color: white;
      left: calc(100% - 1px);
    }      
  }
  &.position-right{
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left: none;
      border-right-color: black;
      right: 100%
    }
    &::after {
      border-left: none;
      border-right-color: white;
      right: calc(100% - 1px);
    }      
  }            
}  

</style>