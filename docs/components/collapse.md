---
title: Collapse 折叠面板
---
# Collapse 折叠面板

**使用方法**

### 基本用法

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

#### 示例代码

```vue
<g-collapse>
  <g-collapse-item title="标题1" >hello，你好呢。</g-collapse-item>
  <g-collapse-item title="标题2" >你知道我在想你吗?</g-collapse-item>
  <g-collapse-item title="标题3" >我在等你呀!</g-collapse-item>
</g-collapse>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>
```

# Attributes

### CollapseItem
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|title| 标题 | String |--|--