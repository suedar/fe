### bfc 是什么
bfc 表示内部的元素不会影响到外部的一个布局 哪些元素会生成 bfc 呢 。。。 bfc 可以解决浮动的问题 也就是说 比如我们有一个父元素 两个子元素 左边的子元素为图片 右边的子元素为文字 我们将左边的 元素设置 float left 这时我们会发现假如右边元素的文字过多 会出现右边文字出现在左边下方的情况 这 时候我们要清除浮动 可以设置多一个伪元素 然后设置其的 clear:both 并且 display:block content 为空 这种设置很容易导致另外一个问题就是会出现右边上方出现一行文字 空了一大段空白 然后下方文字继 续的问题 这个问题更好的解决方法其实就是 bfc 也就是设置右边的元素 overflow hidden 这个问题就被 解决了 同时 我们的两栏布局左边定宽右边自适应 也推荐用这种方式 因为这样相比说去 margin-left 的 方式而言 要好很多。

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