

// 将所有函数处理为待处理的promise array
export function flattenFnArray(appOrParcel, lifecycle) {
    let fns = appOrParcel[lifecycle] || [];
    fns = Array.isArray(fns) ? fns : [fns];
    if (fns.length === 0) {
        fns = [() => Promise.resolve()];
    }

    const type = objectType(appOrParcel);
    const name = toName(appOrParcel);

    return function (props) {
        return fns.reduce((resultPromise, fn, index) => {
            return resultPromise.then(() => {
                const thisPromise = fn(props);
                return smellsLikeAPromise(thisPromise) ?
                    thisPromise :
                    Promise.reject(
                        formatErrorMessage(
                            15,
                            __DEV__ &&
                            `Within ${type} ${name}, the lifecycle function ${lifecycle} at array index ${index} did not return a promise`,
                            type,
                            name,
                            lifecycle,
                            index
                        )
                    );
            });
        }, Promise.resolve());
    };
}

export function smellsLikeAPromise(promise) {
    return (
        promise &&
        typeof promise.then === "function" &&
        typeof promise.catch === "function"
    );
}