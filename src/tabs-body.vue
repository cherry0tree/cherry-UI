<template>
<div class="tabs-body">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tabs-body',
  inject:['eventBus']
}
</script>
<style scoped>

</style>