
### 什么是BFC，作用有哪些？哪些情况下会触发BFC？

完整答案：
BFC（块级格式化上下文），是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:
（1）可以阻止元素被浮动元素覆盖。
（2）可以包含浮动元素。
（3）可以阻止margin重叠。

满足下列条件之一就可触发BFC：
【1】根元素，即HTML元素
【2】float的值不为none
【3】overflow的值不为visible
【4】display的值为inline-block、table-cell、table-caption
【5】position的值为absolute或fixed