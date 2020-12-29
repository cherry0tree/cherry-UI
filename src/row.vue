<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'row',
  props: {
    gutter: {
      type: [
        Number,
        String
      ]
    },
    align: {
      type: String,
      validator(value){
        return ['left', 'center', 'right'].includes(value);
      }
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this; //= this.gutter
      return {marginLeft: -gutter / 2  + 'px', marginRight: -gutter / 2  + 'px'};
    },
    rowClass() {
      return [this.align && `align-${this.align}`] 
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
      console.log(vm)
    })
  }
}

</script>
<style lang="scss" scoped>
.row{
  display: flex;
  &.align-left{justify-content: flex-start;}
  &.align-right{justify-content: flex-end}
  &.align-center{justify-content: center}  
}
</style>