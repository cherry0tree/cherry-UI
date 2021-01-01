<template>
<div class="poppover" ref="popover" @click="onClick">
  <div class="content-wrapper" ref="contentWrapper" v-if="visible">
    <slot name="content"></slot>
  </div>
  <span ref="triggerWrapper">
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
.poppover{
  display: inline-block;
  position: relative;
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }
}
</style>