<template>
<div class="collapseItem">
  <div class="title" @click="open=!open">
    {{title}}
  </div>
  <div class="content" v-if="open">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'collapse-item',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
<style scoped lang="scss">
@import "helper";
.collapseItem{
  .title{
    display: flex;
    border: 1px solid $grey;
    margin: -1px -1px 0 -1px;
    align-items: center;
    padding: 0 8px;
    cursor: pointer; 
  }
  > .content{
    padding: 8px;
  }    
}
</style>