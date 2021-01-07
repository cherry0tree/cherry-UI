---
title: Toast 文字提示
---
# Toast 文字提示
**使用方法**

### this.$toast

#### 预览

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 示例代码

```vue
  <g-button @click="$toast('点击弹出提示'), {position:'top'})">上方弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

### 设置关闭按钮

#### 预览

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <g-button @click="onClickButton">中间弹出</g-button>
    </div>
</template>
<script>
export default {
methods: {
    onClickButton () {
      this.$toast('hello world', {
        closeButton: {
          text: 'got that',
          callback: () => {
            console.log('yes')
          }
        }
      })
    }
  },
}
</script>
```

### 支持传入 HTML

#### 预览

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <g-button @click="onClickButton">中间弹出</g-button>
    </div>
</template>
<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>
```

# Attribute
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| message | 显示内容，函数第一个参数 |    String | --| --
| object | 函数接受的第二个参数 |    String | autoClose, closeButton, enableHtml, position| --
| position | 设置位置 |    String | top、middle、bottom| middle
|autoClose|是否自动关闭|Boolean|true、false|true
| closeButton | 设置关闭按钮      |  Object |--| {message:'关闭', callback:undefined}
|enableHtml|是否支持html内容|Boolean|true、false|false