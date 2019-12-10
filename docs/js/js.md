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
    }, 1000);     const d = setTimeout(() => {
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

### promise
``` js
    // 定义
    "use strict";
    var fs = require("fs");
    function File() {
        this.promise = Promise.resolve();
    }
    // Static method for File.prototype.read
    File.read = function (filePath) {
        var file = new File();
        return file.read(filePath);
    };
    File.prototype.then = function (onFulfilled, onRejected) {
        this.promise = this.promise.then(onFulfilled, onRejected);
        return this;
    };
    File.prototype["catch"] = function (onRejected) {
        this.promise = this.promise.catch(onRejected);
        return this;
    };
    File.prototype.read = function (filePath) {
        return this.then(function () {
        return fs.readFileSync(filePath, "utf-8");
    });
    };
    File.prototype.transform = function (fn) {
        return this.then(fn);
    };
    File.prototype.write = function (filePath) {
        return this.then(function (data) {
            return fs.writeFileSync(filePath, data)
        });
    };
    module.exports = File;

    // 使用
    var File = require("./fs-promise-chain");
    var inputFilePath = "input.txt",
    outputFilePath = "output.txt";

    File.read(inputFilePath)
        .transform(function (content) {
        return ">>" + content;
    })
    .write(outputFilePath);
    // => 处理流程类似以下的伪代码
    promise.then(function read(){
        return fs.readFileSync(filePath, "utf-8");
    }).then(function transform(content) {
        return ">>" + content;
    }).then(function write(){
        return fs.writeFileSync(filePath, data);
    });

    // 若是使用stream的话
    readableStream.pipe(transformStream).pipe(writableStream);
```

array

``` js
"use strict";

function ArrayAsPromise(array) {
    this.array = array;
    this.promise = Promise.resolve();
}
ArrayAsPromise.prototype.then = function (onFulfilled, onRejected) {
    this.promise = this.promise.then(onFulfilled, onRejected);
    return this;
};
ArrayAsPromise.prototype["catch"] = function (onRejected) {
    this.promise = this.promise.catch(onRejected);
    return this;
};
Object.getOwnPropertyNames(Array.prototype).forEach(function (methodName) {
    // Don't overwrite
    if (typeof ArrayAsPromise[methodName] !== "undefined") {
        return;
    }
    var arrayMethod = Array.prototype[methodName];
    if (typeof arrayMethod !== "function") {
        return;
    }
    ArrayAsPromise.prototype[methodName] = function () {
        var that = this;
        var args = arguments;
        this.promise = this.promise.then(function () {
            that.array = Array.prototype[methodName].apply(that.array, args);
            return that.array;
        });
        return this;
    };
});
module.exports = ArrayAsPromise;
module.exports.array = function newArrayAsPromise(array) {
    return new ArrayAsPromise(array);
};
// test
"use strict";
var assert = require("power-assert");
var ArrayAsPromise = require("../src/promise-chain/array-promise-chain");
describe("array-promise-chain", function () {
    function isEven(value) {
        return value % 2 === 0;
    }

    function double(value) {
        return value * 2;
    }
    beforeEach(function () {
        this.array = [1, 2, 3, 4, 5];
    });
    describe("Native array", function () {
        it("can method chain", function () {
            var result = this.array.filter(isEven).map(double);
            assert.deepEqual(result, [4, 8]);
        });
    });
    describe("ArrayAsPromise", function () {
        it("can promise chain", function (done) {
            var array = new ArrayAsPromise(this.array);
            array.filter(isEven).map(double).then(function (value) {
                assert.deepEqual(value, [4, 8]);
            }).then(done, done);
        });
    });
});

// reduce获取结果
// 顺序执行
function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var request = {
    comment: function getComment() {
        return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse);
    },
    people: function getPeople() {
        return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse);
    }
};

function main() {
    function recordValue(results, value) {
        results.push(value);
        return results;
    }
    var pushValue = recordValue.bind(null, []);
    var tasks = [request.comment, request.people];
    return tasks.reduce(function (promise, task) {
        return promise.then(task).then(pushValue);
    }, Promise.resolve());
}
// 运行示例
main().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.error(error);
});
```