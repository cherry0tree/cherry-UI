<template>
<div class="wrapper">
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="thumbs-up">默认按钮</g-button>
    <g-button :loading="loading" @click="loading=!loading">默认按钮</g-button>
  </div>
</div>  
</template>
<script>
import Button from '../../../src/button.vue'
export default {
  components:{'g-button': Button},
  data(){
    return{
      loading:true
    }
  }
}
</script>

<style>
</style>