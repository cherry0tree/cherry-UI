<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return{
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted() {
    console.log(this)
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'Sider'){
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>
<style scoped lang="scss">
.layout{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider{
    flex-direction: row;
  }
}
</style>