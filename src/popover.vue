<template>
<div class="poppover" ref="popover" @click="onClick">
  <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
  data(){
    return {
      visible: false
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
$border-color:#333;
$border-radius:4px;
.poppover{
  display: inline-block;
  position: relative;
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background: white;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    transform: translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    &::before, &::after{
      content: '';
      display: block;
      border: solid 10px transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;      
    }
    &::before{
      border-top-color: black;
      top:100%
    }
    &::after{
      border-top-color: white;
      top: calc(100% - 1px);
    }    
  }
}
</style>