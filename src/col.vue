<template>
<div class="col" 
     :class="colClass"
     :style="colStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    span: {
      type: [
        Number,
        String
      ]
    },
    offset: {
      type: [
        Number,
        String
      ]
    }    
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter/2 +'px',
        paddingRight: this.gutter/2 +'px'     
      }  
    },
    colClass() {
      let {span,offset} = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.col{
  $class-prefix: col-;
  height: 100px;
  background: gray;
  width: 50%;
  border: solid 1px blue;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }  
}
</style>