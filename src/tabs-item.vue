<template>
<div class="tabs-item" @click="onClick" :class="classes">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tabs-item',
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
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },  
  computed: {
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created(){
    //与tabs保持一致
    this.eventBus.$on('update:selected', (name) => {
      //点击切换
      this.active = (name === this.name)
    })
  },
  methods:{
    onClick(){
      console.log(this.name)
      if(this.disabled) {
        return 
      }      
      this.eventBus.$emit('update:selected',this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "helper";

.tabs-item{
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active{
    color: blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disable-text-color;
    cursor: not-allowed;
  }
}
</style>