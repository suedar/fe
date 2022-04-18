CMJ
1. 运用define函数
2. commonJS则需要browserfy等Node.js打包后才能运行于浏览器，同步进行
3. 一个文件一个模块
4. module.exports的方式导出值之外，还可以使用exports

AMD
1. 运用require 和 exports语句
2. 以AMD定义JS模块通过RequireJS能直接运行于浏览器,异步进行

ESM
1. 静态的import/export,方便代码依赖分析，需要依赖babel转化
2. commonjs通过esm转化为ESM在浏览器使用 


CommonsJs与ES6之间的差别
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3. CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
