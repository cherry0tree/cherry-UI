<template>
<div class="wrapper">
<svg class="g-icon">
  <use :xlink:href="`#i-${name}`"></use>
</svg>  
</div>
</template>

<script>
import './svg.js'
export default {
  name: 'icon',
  props: {
    name: String
  }
}
</script>
<style scoped>
.g-icon{
  width: 1em;
  height: 1em;
}
</style>