---
title: Tabs 标签页
---
# Tabs 标签页

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码

```vue
data() {
    return {
      selected: '1',
    }
},

<g-tabs :selected="selected">
    <g-tabs-head>
      <g-tabs-item name="1">标题一</g-tabs-item>
      <g-tabs-item disabled name="2">标题二</g-tabs-item>
      <g-tabs-item name="3">标题三</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="1">内容1</g-tabs-pane>
      <g-tabs-pane name="2">内容2</g-tabs-pane>
      <g-tabs-pane name="3">内容3</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```
# Attributes

### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| --

### TabsHeadItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 
|disabled|设置是否禁用|Boolean|true、false|false

### TabsBodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 