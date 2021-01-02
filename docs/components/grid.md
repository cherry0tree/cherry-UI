---
title: Grid 栅格
---
# 24 Grid 栅格

### 布局一

#### 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 示例代码

```vue
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
</g-layout>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-layout>
      <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </g-sider>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
</g-layout>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-layout>
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
</g-layout>
```