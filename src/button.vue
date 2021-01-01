<template>
    <button class="g-button" 
            :class="{[`icon-${iconPosition}`]: true}" 
            @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
    </button>
</template>
<script>
  //解决博客icon bug
  import Icon from './icon.vue'
  export default {
    components: {'g-icon': Icon},
    props:{
      icon:{},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition:{
        type:String,
        default:'left',
        valid(value){
          return value === 'left' || value === 'right'
        }
      }        
    }
  }
</script>
<style lang="scss" scoped>
@import "helper";

@keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.g-button{
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    vertical-align: bottom;
    align-items: center;
    
    > .content{order: 2; line-height: $font-size}
    > .icon{order: 1;margin-right: .1em;}

    &.icon-right{
        >.content{order: 1;}
        >.icon{order:2;margin-right: 0;margin-left: .1em}
    }    
    &:hover{
        border-color: $border-color-hover;
    }
    &:active{
        background-color: $button-active-bg;
    }
    &:focus{
        outline: none;
    }
    .loading{
        animation: spin 1.5s linear infinite;
    }    
}
</style>