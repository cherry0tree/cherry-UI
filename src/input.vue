<template>
<div class="wrapper" :class="{error}">
  <!-- input自己订阅input事件 -->
  <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
         :placeholder="placeholder"
         @input="$emit('input', $event.target.value)">
  <template v-if="error">
    <icon name="error" class="icon-error"></icon>
    <span class="errorMessage">{{ error }}</span>
  </template>
</div>
</template>

<script>
import Icon from './icon.vue'
export default {
  name: 'Input',
  components: {
    Icon
  },
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
@import "helper";
.wrapper {
  font-size: $input-font-size;
  display: inline-flex;
  align-items: center;
  //除了span都margin right
  > :not(:last-child) {margin-right: .5em;}
  > input {
    height: $height;
    border: solid 1px $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {border-color: $border-color-hover}
    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color; outline: none}
    // &[disabled], &[readonly] {border-color: #bbb;cursor: not-allowed}
    &[disabled], &[readonly] {border-color: #bbb; cursor: not-allowed}
  }
  &.error {
    > input {border-color: $red}
  }
  .icon-error {fill: $red;}
  .errorMessage {color: $red;}
}
</style>