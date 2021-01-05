<template>
<div class="poppover" ref="popover">
  <div class="content-wrapper" 
       :class="{[`position-${position}`]: true}"
       ref="contentWrapper" 
       v-if="visible">
    <slot name="content"></slot>
  </div>
  <span ref="triggerWrapper" style="display: inline-block">
    <slot></slot>
  </span>
</div>
</template>

<script>
export default {
  name: 'popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
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
  data(){
    return {
      visible: false
    }
  },
  mounted(){
    if(this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    onClick(event) {
      if(this.$refs.triggerWrapper.contains(event.target)) {
        if(this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import "helper";
.poppover{
  display: inline-block;
  position: relative;
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background: white;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    padding: .5em 1em;
    &::before, &::after{
      content: '';
      display: block;
      border: solid 10px transparent;
      width: 0;
      height: 0;
      position: absolute;     
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before{
        border-top-color: black;
        top:100%
      }
      &::after{
        border-top-color: white;
        top: calc(100% - 1px);
      } 
    }
    &.position-bottom {
      transform: translateY(100%);
      margin-top: -10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        border-bottom-color: black;
        bottom:100%
      }
      &::after{
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }    
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-left-color: black;
        left:100%
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1px);
      }    
    }
    &.position-right{
      transform: translateX(100%);
      margin-left: -10px;
      &::before,&::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-right-color: black;
        right:100%
      }
      &::after{
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
}
</style>