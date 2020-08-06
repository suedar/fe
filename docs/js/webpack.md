# Tree-shaking

Tree-shaking的本质是消除无用的js代码。

Dead Code 一般具有以下几个特征

•代码不会被执行，不可到达

•代码执行的结果不会被用到

•代码只会影响死变量（只写不读）


tree-shaking的消除原理是依赖于ES6的模块特性

ES6 module 特点：

只能作为模块顶层的语句出现
import 的模块名只能是字符串常量
import binding 是 immutable的