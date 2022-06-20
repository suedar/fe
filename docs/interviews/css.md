### bfc 是什么
bfc 表示内部的元素不会影响到外部的一个布局 哪些元素会生成 bfc 呢 。。。 bfc 可以解决浮动的问题 也就是说 比如我们有一个父元素 两个子元素 左边的子元素为图片 右边的子元素为文字 我们将左边的 元素设置 float left 这时我们会发现假如右边元素的文字过多 会出现右边文字出现在左边下方的情况 这 时候我们要清除浮动 可以设置多一个伪元素 然后设置其的 clear:both 并且 display:block content 为空 这种设置很容易导致另外一个问题就是会出现右边上方出现一行文字 空了一大段空白 然后下方文字继 续的问题 这个问题更好的解决方法其实就是 bfc 也就是设置右边的元素 overflow hidden 这个问题就被 解决了 同时 我们的两栏布局左边定宽右边自适应 也推荐用这种方式 因为这样相比说去 margin-left 的 方式而言 要好很多。

- 根元素，即HTML元素
- float 的值不为 none
- overflow 的值不为 visible
- position 的值不为 relative 和 static
- display 的值为 table-cell, table-caption, inline-block 中的任何一个

浮动不为none，超过不为可见，位置不为相对与静态，display不为兼容

功能
自我独立，内部元素不会影响外部元素
会包含浮动元素
同一个BFC的margin重叠

### 三栏布局

``` html
<style>
  section {display: flex;}
  .left-side,
  .right-side {width: 200px;}
  .content {flex-grow: 1;}
</style>
<section>
  <div class="left-side"></div>
  <div class="content"></div>
  <div class="right-side"></div>
</section>
```


### flex

1. 水平垂直居中

2. 一边定宽，一边自适应

3. 多列等分布局

4. 圣杯布局

5. sticky footer

#### sticky footer
如果页面内容不够长的时候，footer固定在视窗底部；如果内容足够长时，footer会被内容向下推。

``` html
<div class="detail-flex">
    <div class="detail-content">detail-content</div>
    <div class="detail-footer">detail-footer</div>
</div>
```

``` stylus
.detail-flex
    display: flex
    flex-direction: column
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    .detail-content
        flex: 1 0 auto
    .detail-footer
        flex: 0 0 auto
```

### 重绘和回流

重绘比回流的代价更高

> https://juejin.cn/post/6844903569087266823

### 布局

1. 双飞翼布局

外部三个都浮动，内部 margin 宽度，外部左侧 margin 100%，外部右侧 margin 宽度 

2. 圣杯布局
外部 margin，内部浮动，左右两侧 position: relative
