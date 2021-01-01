<template>
<div class="tabs">
  <slot></slot>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'tabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizonal',
      validator(value) {
        return ['horizonal','vertical'].includes(value);
      }
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      //tabs里的eventBus只影响tabs上下文 非全局  若不使用provide注入 在全局定义bus    
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.checkChild()
    this.selectTab()
  },
  methods: {
    selectTab() {
      this.$children.forEach((vm) => {
        if(vm.$options.name === 'tabs-head') {
          vm.$children.forEach((childVm) => {
            if(childVm.$options.name === 'tabs-item' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })      
    },
    checkChild() {
      if(this.$children.length === 0) {
        console.warn('tabs需要子组件作为插槽')
      }
    }
  }
}
</script>
<style scoped>

</style>