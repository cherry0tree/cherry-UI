<template>
<div class="poppover" @click="onClick">
  <div class="content-wrapper" v-if="visible">
    <slot name="content"></slot>
  </div>
    <slot></slot>
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
    onClick() {
      this.visible = !this.visible
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
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  
}
</style>