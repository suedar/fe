``` js
    const concatAll = (array, fn) => {
        let results = {};
        for (const value of array) {
            results.push.apply(results, value);
        }
        return results;
    }

```