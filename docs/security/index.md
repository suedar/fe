# 前端安全相关

## xss


在处理输入时，以下内容都不可信：

- 来自用户的 UGC 信息
- 来自第三方的链接
- URL 参数
- POST 参数
- Referer （可能来自不可信的来源）
- Cookie （可能来自其他子域注入）

## 分类

XSS 分类
根据攻击的来源，XSS 攻击，跨站脚本攻击（`Cross Site Scripting`)，可分为存储型、反射型和 DOM 型三种。

| 类型 | 存储区 | 插入点|
|---|---|---|
|存储型 XSS|后端数据库|HTML|
|反射型 XSS|URL|HTML|
|DOM 型 XSS|后端数据库/前端存储/URL|前端 JavaScript|

存储区：恶意代码存放的位置。
插入点：由谁取得恶意代码，并插入到网页上。
### 存储型 XSS

存储型 XSS 的攻击步骤：

1. 攻击者将恶意代码提交到目标网站的数据库中。
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。

### 反射型 XSS

反射型 XSS 的攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。

由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。

POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。

### DOM 型 XSS
DOM 型 XSS 的攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL。
3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

### 防御

1. 不信任用户输入
对空格，单引号，双引号进行转义

2. 限制资源来源

- 内容安全策略（Content Security Policy，简称CSP）是一种以可信白名单作机制，来限制网站中是否可以包含某来源内容。默认配置下不允许执行内联代码（`<script>`块内容，内联事件，内联样式），以及禁止执行`eval()` , `newFunction()` , `setTimeout([string], ...)` 和`setInterval([string]`, ...) 。

示例:

- 只允许本站资源

`Content-Security-Policy: default-src ‘self’`

- 允许本站的资源以及任意位置的图片以及 https://segmentfault.com 下的脚本。

`Content-Security-Policy: default-src ‘self’; img-src *; script-src https://segmentfault.com`

- 配置元数据
`sec-fetch-site` 和 `sec-fetch-mode`

3. 保护窗口不被其他网站滥用

设置`Cross-Origin-Opener-Policy: same-origin`


即
- 利用模板引擎 开启模板引擎自带的 HTML 转义功能。例如： 在 ejs 中，尽量使用 <%= data %> 而不是 <%- data %>； 在 doT.js 中，尽量使用 {{! data } 而不是 {{= data }； 在 FreeMarker 中，确保引擎版本高于 2.3.24，并且选择正确的 freemarker.core.OutputFormat。
- 避免内联事件 尽量不要使用 onLoad="onload('{{data}}')"、onClick="go('{{action}}')" 这种拼接内联事件的写法。在 JavaScript 中通过 .addEventlistener() 事件绑定会更安全。
- 避免拼接 HTML 前端采用拼接 HTML 的方法比较危险，如果框架允许，使用 createElement、setAttribute 之类的方法实现。或者采用比较成熟的渲染框架，如 Vue/React 等。
- 时刻保持警惕 在插入位置为 DOM 属性、链接等位置时，要打起精神，严加防范。
- 增加攻击难度，降低攻击后果 通过 CSP、输入长度配置、接口安全措施等方法，增加攻击的难度，降低攻击的后果。
- 主动检测和发现 可使用 XSS 攻击字符串和自动扫描工具寻找潜在的 XSS 漏洞。

![](https://randomm.cdn.bcebos.com/s1.png)
![](https://randomm.cdn.bcebos.com/s2.png)

> https://segmentfault.com/a/1190000013315450
> https://www.youtube.com/watch?v=CjjcglAnx68&t=1515s
> https://tech.meituan.com/2018/09/27/fe-security.html