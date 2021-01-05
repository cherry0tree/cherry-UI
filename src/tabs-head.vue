<template>
<div class="tabs-head">
  <slot></slot>
  <div class="line" ref="line"></div>
  <div class="actions-wrapper">
    <slot name="actions"></slot>
  </div>

</div>
</template>

<script>
export default {
  name: 'tabs-head',
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      console.log(vm.$el.getBoundingClientRect())
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      //设置width和left即可定位在上一个dom元素下面line的位置
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left  = `${vm.$el.offsetLeft}px`
    })
  }
}
</script>
<style lang="scss" scoped>
@import "helper";
.tabs-head{
  position: relative;
  display: flex;
  height: $tab-height;
  >.actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 350ms;
  }
  
}
</style>