<template>
<div class="tabs-item" @click="xxx" :class="classes">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tabs-item',
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },  
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  },
  created(){
    //与tabs保持一致
    this.eventBus.$on('update:selected', (name) => {
      this.active = (name === this.name)
    })
  },
  methods:{
    xxx(){
      //点击切换
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{
  padding: 0 1em;
  &.active{
    background: red;
  }
}
</style>