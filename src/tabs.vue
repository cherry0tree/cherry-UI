<template>
<div class="tabs">
  <slot></slot>
</div>
</template>

<script>
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
  }
}
</script>
<style scoped>

</style>