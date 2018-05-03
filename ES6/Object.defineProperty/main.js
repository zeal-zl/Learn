/**
 * *Object.defineProperty()
 * 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
 *  
 * *语法 Object.defineProperty(obj, prop, descriptor)
 * @param {Object} obj 要在其上定义属性的对象
 * @param {any} prop 要定义或修改的属性的名称。
 * @param {Object} descriptor 将被定义或修改的属性描述符。
 * 
 * @return {Object}  被传递给函数的对象
 * 
 * 
 * *属性描述符
 * 主要形式：数据描述符、存取描述符   ps: 描述符必须是这两种形式之一；不能同时是两者。
 * 
 * 数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。
 * 存取描述符是由getter-setter函数对描述的属性。
 * 
 * *数据描述符和存取描述符均具有以下可选键值
 * @param {Boolean} configurable 默认为 false  表示对象的属性是否可以被删除，以及除 writable 特性外的其他特性是否可以被修改。
 * true ==> 该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。
 * false ==> 反之
 * 
 * @param {Boolean} enumerable 默认为 false，定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举 
 * true ==> 该属性才能够出现在对象的枚举属性中。
 * false ==> 反之
 * 
 * 
 * *数据描述符同时具有以下可选键值
 * @param {any} value 默认为 undefined，该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）
 * 
 * @param {any} writable 默认为 false，定义了这个属性能否重新赋值
 * false ==> 该属性被称为“不可写”。它不能被重新分配
 * true ==> 反之
 * 
 * 
 * *存取描述符同时具有以下可选键值
 * @function get() 默认为 undefined，一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。
 * @function set() 默认为 undefined，一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。
 * 
 * ps:
 *    如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。
 *    如果一个描述符同时有(value 或 writable)和(get 或 set)关键字，将会产生一个异常。
 * 
 */

// 数据描述符
let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc'
}
Object.defineProperty(obj, 'd', {
  value: 'ddd',
  writable: true,      // 为true时 d才能被修改值
  enumerable: true,    // 为true时 d才能被枚举
  configurable: false   // 为false时 d不能删除  除 writable 外 所有的属性不能修改
})

/* Object.defineProperty(obj, 'd', {
  value: 'vvv',
  configurable: true   // 报错  Cannot redefine property: d  因为上面设置时configurable 为false
}) */


obj.d = 'fff'
console.log('writable 修改 ==>', obj)

for (let i in obj) { console.log('enumerable for in 枚举 ==>', i) }
console.log('enumerable Object.keys() 枚举 ==>', Object.keys(obj))

delete obj.d
console.log('configurable 删除 ==>', obj)

console.log(Object.getOwnPropertyDescriptor(obj))


// ps:
obj.f = 'fff'
// 等同于下面
Object.defineProperty(obj, 'f', {
  value: 'fff',
  writable: true,
  enumerable: true,
  configurable: true
})
// 如果使用直接赋值的方式创建对象的属性，则这个属性的 writable enumerable configurable 都为 true




// 存取描述符
let obj2 = {
  a: 111,
  b: 222,
  c: 333
}
let dValue = 444
Object.defineProperty(obj2, 'd', {
  configurable: true,
  enumerable: true,
  get () {
    console.log('获取值')
    return dValue
  },
  set (newVal) {
    console.log('设置新值 ==>', newVal)
    dValue = newVal
  }
})

console.log(obj2)
