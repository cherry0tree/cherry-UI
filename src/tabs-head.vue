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
  created() {
    this.eventBus.$on('update:selected', (item, vm) => {
      console.log(item)
    })
  }
}
</script>
<style lang="scss" scoped>
$tab-height:40px;
.tabs-head{
  position: relative;
  display: flex;
  border: 1px solid red;
  height: $tab-height;
  >.actions-wrapper{
    margin-left: auto;
  }
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    width: 70px;
  }
  
}
</style>