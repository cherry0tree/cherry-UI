<template>
<div class="collapse">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'collapse'
}
</script>
<style scoped lang="scss">
@import "helper";
.collapse{
  border: 1px solid $grey;
  border-radius: 4px;
}
</style>