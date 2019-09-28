``` js
    const concatAll = (array, fn) => {
        let results = {};
        for (const value of array) {
            results.push.apply(results, value);
        }
        return results;
    }

```

计算平均价格的函数式编程写法
``` js
    const map = fn => array => array.map(fn);
    const prop = key => object => object[key];
    const reduce = (fn, initial) => array => array.reduce(fn. initial);
    const add = (a, b) => a + b;
    const sum = reduce(add, 0);
    const filter = fn => array => array.filter(fn);

    const average = items => (
        items.length === 0 ? 0 : sum(items) / items.length
    );

    const flow = (...fns) => x => {
        fns.reduce((result, fn) => fn(result), x)
    };

    const calcAvgCost = (item, filterFn = () => true) => {
        flow(
            filter(filterFn),
            map(prop('price')),
            average
        )(item)
    };
```