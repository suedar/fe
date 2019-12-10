
#### getOwnPropertyDescriptors函数，对象自身属性描述符有哪些？

该函数返回指定对象（参数）的所有自身属性描述符。所谓自身属性描述符就是在对象自身内定义，不是通过原型链继承来的属性。
属性描述符：configurable、enumerable、value、writable、get、set。
configurable：当该值为true时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable：当且仅当该属性的 enumerable 为 true时，该属性才能够出现在对象的枚举属性中。默认为 false。