1.快速排序
2.手写数据监听和收集依赖 
3.对象下划线转驼峰 
4.手写setinterval轮询请求 
5.查询对象是否含有key值  key可能为a.b这种形式 
6.根据ID查询tree节点是否有该ID的节点 
7.整数翻转 
8.小数相加
9.格式化日期

珂里化
考闭包
数组分包
股票买卖时间最佳时间
查找节点，判断对象是否有某属性
设计模式，
小数相加，
数值反转，
两数之和寻找target
时间转换(3day ago ,2 hours ago) ，
使用setTimeout模拟setInterval

快速排序和时间差函数还有整数翻转是一样的，新增的有  
实现 compose 函数
实现 groupBy 函数，
树的先序遍历


1.快速排序 

const quickSort = array => {
  if (array.length < 2) {
    return array.slice()
  }


  // 随机找到 pivot
  let pivot = array[Math.floor(Math.random() * array.length)]


  let left = []
  let middle = []
  let right = []


  for (let i = 0; i < array.length; i++) {
    var value = array[i]
    if (value < pivot) {
      left.push(value)
    }


    if (value === pivot) {
      middle.push(value)
    }


    if (value > pivot) {
      right.push(value)
    }
  }


  // 递归进行
  return quickSort(left).concat(middle, quickSort(right))
}



2.手写数据监听和收集依赖 


```js
// 观察者
class Oberver {
  constructor(obj, key) {
    this.defineReactive(obj, key, obj[key])
  }


  // 定义响应式： 遍历data中的每个数据，都要生成一个Dep容器，这个Dep容器用来收集该数据产生的依赖（即：每使用一次该数据，就会产生一个Watcher，用来update更新）
  defineReactive(obj, key, val) {
    const dep = new Dep() // 遍历data中的每一个数据，并生成相应的Dep容器
    Object.defineProperty(obj, key, {
      get() {
        // 每一次访问数据 this.title ， 都会往Dep容器的实例里面deps推入一个watcher
        if (Dep.target) { // 每次使用该数据的时候，都要创建一个依赖（即Watcher，方便未来进行数据更新）
          dep.addDep(Dep.target)
        }
        return val
      },
      set(v) {
        if (val !== v) { // 数据值改变时，给该数据赋新值，并通知（notity）该数据的所有依赖进行更新
          val = v
          // 数据重新赋值，[通知]该数据所有的依赖更新数据
          dep.notice()
        }
      }
    })
  }
}
```

// 依赖收集容器Dep：即，管理wathcer的管理者。data中的每一个数据，都要生成一个dep容器，用来收集
// Dep容器，data中的每个数据会对应一个，用来收集并存储依赖（依赖： 就是 template中的 插值表达式，v-，@等等的数据）
// Dep对象有一个静态属性target，用来存放Watcher实例---即依赖deps数组中的元素---即Dep.target
class Dep {
  constructor() {
    // 每一项数据的依赖收集在这个数组中, 每一个依赖，就是一个Watcher
    this.deps = []
  }


  addDep(dep) {
    this.deps.push(dep)
  }


  notice() {
    this.deps.forEach(dep => { // 这里的dep是一个watcher
      dep.update()
    })
  }
}

3.把对象类型的 key 值下换线转成驼峰。

let obj = {
  'ab_cd': 1,
  'bc_de': [
    {
      'cb_ef': 1
    }
  ]
}
转成
{
  'abCd': 1,
  'bcDe': [
    {
      'cbEf': 1
    }
  ]
}


function convert (data) {
  if (typeof data !== 'object' || !data) return data
  if (Array.isArray(data)) {
    return data.map(item => convert(item))
  }


  let newObj = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      let newKey = key.replace(/_([a-z])/g, res => res[1].toUpperCase())
      newObj[newKey] = convert(data[key])
    }
  }
  return newObj
}


4.手写setinterval轮询请求 


/**
 * @Description: 轮询执行方法
 * @param {func} function 需要轮询的方法
 * @param {time} number 轮询间隔,默认1s
 * @param {endTime} number 可轮询时间, 为空时一直轮询
 * @param {immedaite} boolean 第一次是否立即执行
 * @author: XuLijuan
 */
const pollingFunction = (func, time = 1000, endTime,immediate = false) => {
  immediate && func(); //是否立即执行一次，由实际决定
  const startTime = new Date().getTime();
  const pollTimer = setInterval(() => {
    const nowTime = new Date().getTime();
    if (endTime && nowTime - startTime >= endTime) {
      pollTimer && clearInterval(pollTimer);
    }
    func();
  }, time);
  return pollTimer;
};
export default pollingFunction;

5.查询对象是否含有key值  key可能为a.b这种形式 

export const dig = (obj, targetKey) => {
  if (targetKey in obj) {
    return obj[targetKey]
  } else {
    const innerArrayData = Object.values(obj)
    const finded = innerArrayData.reduce((acc, cur) => {
      if (acc !== undefined) return acc
      if (typeOfData(cur) === '[object Object]') {
        return dig(cur, targetKey)
      }
    }, undefined)
    return finded
  }
}


export const typeOfData = (data) => {
  return Object.prototype.toString.call(data)
}

const param = {
    a: {
        b: {
            c: 11111
        }
    }
}
const result1 = dig(param, 'c') // 11111
const result2 = dig(param, 'n') // undefined

6.根据ID查询tree节点是否有该ID的节点 

var data = [
    {
        id: 1, name: "办公管理", pid: 0,
        children: [
            {
                id: 2, name: "请假申请", pid: 1,
                children: [
                    { id: 4, name: "请假记录", pid: 2 }
                ],
            },
            { id: 3, name: "出差申请", pid: 1 }
        ]
    },
    {
        id: 5, name: "系统设置", pid: 0,
        children: [
            {
                id: 6, name: "权限管理", pid: 5,
                children: [
                    { id: 7, name: "用户角色", pid: 6 },
                    { id: 8, name: "菜单设置", pid: 6 }
                ]
            }
        ]
    },
];
function getChidlren(id) {
    var hasFound = false;
        // result = null;
    var fn = function (data) {
        if (Array.isArray(data) && !hasFound) {
            data.forEach(item => {
                if (item.id === id) { 
                    hasFound = true;
                    return;
                } else if (item.children) {
                    fn(item.children);
                }
            })
        }
    }
    fn(data);
    return hasFound;
}
console.log('found?', getChidlren());


7.整数翻转 

var reverse = function (x) {
    let res = '';
    let str = x + ''
    if (x > 0) {
        for (var i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
    } else {
        for (var i = str.length - 1; i > 0; i--) {
            res = res + str[i]
        }
        res = -res
    }


    if (res < Math.pow(-2, 31) || res >= Math.pow(2, 31) - 1) {
        return 0
    }
    return res * 1
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));


8.小数相加

// 小数相加

function add(num1, num2) {
    let len1 = (num1 + "").split(".")[1].length;
    let len2 = (num2 + "").split(".")[1].length;
    let maxlen = Math.max(len1, len2);
    let a = Math.pow(10, maxlen);
    return (num1 * a + num2 * a) / a;
}

// 大数相加

function add(num1, num2) {
    let maxlen = Math.max(num1.length, num2.length);
    let a = num1.padStart(maxlen, 0);
    let b = num2.padStart(maxlen, 0);
    let res = "";
    let next = 0;  //用一个变量存每一次的进位
    for (let i = maxlen - 1; i >= 0; i--) {
        let acc = Number(a[i]) + Number(b[i]) + next;
        next = Math.floor(acc / 10);
        res = acc % 10 + res;
    }
    if (next === 1)
        res = "1" + res;   //如果到最高位还有进位就再加一位
    return res;
}



9.格式化日期

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}


let date = new Date()
dateFormat("YYYY-mm-dd HH:MM", date)
>>> 2020-11-05 17:00

珂里化
设计模式
考闭包
数组分包

股票买卖时间最佳时间
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  // 7 1 5 3 6 4
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = Math.max(profit, prices[i] - min);
    } else {
      min = Math.min(min, prices[i]);
    }
  }

  return profit; // 5
};

查找节点，判断对象是否有某属性

两数之和寻找target
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};

时间转换(3day ago ,2 hours ago) ，
/**
 * @param {Object} timestamp
 */
function beautifyTime(timestamp) {
    if (!timestamp) return;
    const mistiming = (Math.round(new Date()) - timestamp) / 1000;
    const arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
    const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
    for (var i = 0; i < arrn.length; i++) {
        var inm = Math.floor(mistiming / arrn[i])
        if (inm !== 0) {
            return `${inm} ${arrr[i]} ago`
        }
    }
}


// 2022-04-19 22:16:42
console.log(beautifyTime(1650377802000)) // 1 小时 ago

使用setTimeout模拟setInterval
let timer = null;

function interval(func, wait) {
    let interv = function () {
        func.call(null);
        timer = setTimeout(interv, wait);
    };
    timer = setTimeout(interv, wait);
}

interval(() => {
    console.log(1);
}, 1000)


快速排序和时间差函数还有整数翻转是一样的，

新增的有 :
实现 compose 函数
function compose(...fns) {
    return function (x) {
        return fns.reduceRight(function(args, fn){
            return fn(arg);
        }, x)
    }
}

实现 groupBy 函数
function groupBy (array, name) {
  const groups = {}
  array.forEach(function (o) {
    const group = JSON.stringify(o[name])
    groups[group] = groups[group] || []
    groups[group].push(o)
  })
  return Object.keys(groups).map(function (group) {
    return groups[group]
  })
}

tableData = [
  {id: 1, name: '测试', number: 1, price: 0},
  {id: 2, name: '测试', number: 1, price: 0},
  {id: 3, name: '测试', number: 1, price: 0},
  {id: 4, name: '测试一', number: 1, price: 780},
  {id: 5, name: '测试一', number: 1, price: 80},
  {id: 6, name: '测试一', number: 1, price: 120},
  {id: 7, name: '测试二', number: 1, price: 0}
]

groupBy(tableData, 'name');

[测试]
[测试一]
[测试二]


树的先序遍历