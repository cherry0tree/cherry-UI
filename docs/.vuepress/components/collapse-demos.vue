<template>
  <div class="wrapper">
    <div>
      <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" >hello，你好呢。</g-collapse-item>
        <g-collapse-item title="标题2" >今天是个好天气啊</g-collapse-item>
        <g-collapse-item title="标题3" >是呀!</g-collapse-item>
      </g-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  data() {
    return {
      selectedTab: '1'
    }
  },
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
}
</style>