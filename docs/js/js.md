这里讲述的是js的基础

js的数据类型
- Number
- String
- Boolean
- Object
- null
- undefined
- Symbol

### 事件循环机制

``` js
    let timer = new Date().getTime();
    let g;
    const a = setTimeout(() => {
        g.next('a');
    }, 1000)
    const b = setTimeout(() => {
        g.next('b')
    }, 1000)
    const c = setTimeout(() => {
        console.log(3)
    }, 1000);
    const d = setTimeout(() => {
        console.log(4)
    }, 1000);

    function* main() {
        const aa = yield a;
        const bb = yield b;
        console.log(`1.${aa}`);
        console.log(`2.${bb}`);
        console.log(new Date().getTime() - timer);
    }
    async function main1() {
        const aa = await c;
        const bb = await d;
        console.log(new Date().getTime() - timer);
    }
    g = main();
    g.next();
    main1();
```

上述代码的console结果为
``` js
    1
    1.a
    2.b
    1001
    3
    4
```


### class

可以在函数上面封装一层
<br>这里应用到链式调用 可连续调用函数
``` js
    class Container {
        constructor(value) {
            this.value = value;
        }
        of(value) {
            return new Container(value);
        }
        isNothing() {
            return (this.value === null || this.value === undefined);
        }
        map(fn) {
            return this.isNothing() ? this.of(null) : this.of(fn(this.value));
        }
    }
    let c = new Container();
    let b = c.of("string").map(x => x.toUpperCase());
    console.log(b)
```