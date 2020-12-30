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
      //tabs里的eventBus只影响tabs上下文 非全局      
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>
<style scoped>

</style>