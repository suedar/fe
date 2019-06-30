``` js
function curry(fn) {
    if (fn === undefined) {
        // throw error
    }
    return curriedFu(...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }
        return fn.appay(null, args);
    }
}
```

``` js
function partial(...partArguments) {
    let args = partArguments;
    return functin (...fullArguments) {
        let arg = 0;
        for (let i = 0; i < args.length, args.length < fullArguments; i++) {
            if (args[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    }
}
```
