<template>
<div class="g-button-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'button-group',
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCaes()
      if(name != 'button') {
        console.warn(`请注意你写的组件是${name},子组件必须是 g-button`)
      }
    }
  }
}
</script>
<style lang="scss">
.g-button-group {
  display: inline-flex;
  > .g-button{
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-child {
      border-radius: 0 var(--border-radius) var(--border-radius) 0
    }
    &:hover {
      position: relative;
      z-index: 1;
    } 
  }
}
</style>