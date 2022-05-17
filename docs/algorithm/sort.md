### 冒泡排序

``` js

const sort = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let temp = 0;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

优化：
1. 排序提前完成的情况下，判断是否已为有序数列，在内层循环的移位中加一层判断。
2. 若是升序排列，前半部分元素无序，后半部分元素按升序排列，并且后半部分元素的最小值也大于前半部分元素的最大值，则可略去后面已排序好的元素。（更新最后交换位置）
3. 大部分元素有序条件下可用，鸡尾酒排序，如摆钟，先进行从左到右的排序，在进行从右到左的排序。（进行奇数轮排序，在进行偶数轮排序）

### 归并排序

``` js
function merge(leftArr, rightArr){  
    var result = [];  
    while (leftArr.length > 0 && rightArr.length > 0){  
      if (leftArr[0] < rightArr[0])  
        result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
      else   
        result.push(rightArr.shift());  
    }   
    return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序了  
}

function mergeSort(array){  
    if (array.length == 1) return array;  
    var middle = Math.floor(array.length / 2);       //求出中点  
    var left = array.slice(0, middle);               //分割数组  
    var right = array.slice(middle);  
    return merge(mergeSort(left), mergeSort(right)); //递归合并与排序  
}
```
> 最优 nlog(n) 平均 nlog(n) 最差 nlog(n)

## 快排

``` js
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}

　　return quickSort(left).concat([pivot], quickSort(right));

};
```

> 最优 nlog(n) 平均 nlog(n) 最差 n2