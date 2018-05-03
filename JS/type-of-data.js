/**
 * *排断数据类型的方法
 * 
 * typeof 
 * instanceof
 * Object.prototype.toString
 */

const str = ''
const newStr = new String()

const num = 0
const newNum = new Number(0)

const boo = true
const newboo = new Boolean(true)

const math = Math.round

const arr = []
const newArr = new Array()

const obj = {}
const newObj = new Object()

const fun = function () { }
const newFun = new function () { }

const date = new Date()

const set = new Set()
const ws = new WeakSet()

const map = new Map()
const wm = new WeakMap()

let Undefined
const Null = null


console.log('---------------------- typeof start ----------------------')

/**
 * typeof 运算符 
 * 是一个一元运算符，放在一个运算数之前。
 * 
 * 返回一个用来表示表达式的数据类型的字符串。
 * 
 */

function conTypeof () {
  console.log('typeof str ==>', typeof str)
  console.log('typeof newStr ==>', typeof newStr)
  console.log('typeof num ==>', typeof num)
  console.log('typeof newNum ==>', typeof newNum)
  console.log('typeof boo ==>', typeof boo)
  console.log('typeof newboo ==>', typeof newboo)
  console.log('typeof math ==>', typeof math)
  console.log('typeof arr ==>', typeof arr)
  console.log('typeof newArr ==>', typeof newArr)
  console.log('typeof obj ==>', typeof obj)
  console.log('typeof newObj ==>', typeof newObj)
  console.log('typeof fun ==>', typeof fun)
  console.log('typeof newFun ==>', typeof newFun)
  console.log('typeof date ==>', typeof date)
  console.log('typeof set ==>', typeof set)
  console.log('typeof ws ==>', typeof ws)
  console.log('typeof map ==>', typeof map)
  console.log('typeof wm ==>', typeof wm)
  console.log('typeof Undefined ==>', typeof Undefined)
  console.log('typeof Null ==>', typeof Null)
}
// conTypeof()

/**
 * *typeof 总结
 * 
 * typeof 运算符把类型信息当作字符串返回
 * 一般只能返回如下几个结果： number、boolean、string、function、object、undefined
 * 用 new 创建的类型 返回的都是 Object
 * 引用类型（ 除function ） 返回的都是 Object
 * typeof 运算符对于 null 值会返回 "Object"
 * 
 * typeof 可以准确的判断除 null 以外的基础数据类型，但不能区分object类型的具体类型，比如 Array 、Date 以及自定义类。
 */


console.log('----------------------- typeof end -----------------------')


console.log('-------------------- instanceof start --------------------')

/**
 * instanceof 运算符
 * 是一个二元运算符。
 * 
 * 运算符可以用来判断某个构造函数的prototype属性所指向的對象是否存在于另外一个要检测对象的原型链上，
 * 
 * 返回一个 Boolean 值，指出对象是否是特定类的一个实例。
 * 
 */

function conInstanceof () {
  console.log('instanceof str ==>', str instanceof String, '， isObject==>', str instanceof Object)
  console.log('instanceof newStr ==>', newStr instanceof String, '， isObject==>', newStr instanceof Object)
  console.log('instanceof num ==>', num instanceof Number, '， isObject==>', num instanceof Object)
  console.log('instanceof newNum ==>', newNum instanceof Number, '， isObject==>', newNum instanceof Object)
  console.log('instanceof boo ==>', boo instanceof Boolean, '， isObject==>', boo instanceof Object)
  console.log('instanceof newboo ==>', newboo instanceof Boolean, '， isObject==>', newboo instanceof Object)
  console.log('instanceof math ==>', math instanceof Object, '， isObject==>', math instanceof Object)
  console.log('instanceof arr', arr instanceof Array, '， isObject==>', arr instanceof Object)
  console.log('instanceof newArr ==>', newArr instanceof Array, '， isObject==>', newArr instanceof Object)
  console.log('instanceof obj ==>', obj instanceof Object, '， isObject==>', obj instanceof Object)
  console.log('instanceof newObj ==>', newObj instanceof Object, '， isObject==>', newObj instanceof Object)
  console.log('instanceof fun ==>', fun instanceof Function, '， isObject==>', fun instanceof Object)
  console.log('instanceof newFun ==>', newFun instanceof Function, '， isObject==>', newFun instanceof Object)
  console.log('instanceof date ==>', date instanceof Date, '， isObject==>', date instanceof Object)
  console.log('instanceof set ==>', set instanceof Set, '， isObject==>', set instanceof Object)
  console.log('instanceof ws ==>', ws instanceof WeakSet, '， isObject==>', ws instanceof Object)
  console.log('instanceof map ==>', map instanceof Map, '， isObject==>', map instanceof Object)
  console.log('instanceof wm ==>', wm instanceof WeakMap, '， isObject==>', wm instanceof Object)
  console.log('instanceof Undefined ==>', Undefined instanceof String, '， isObject==>', Undefined instanceof Object)
  console.log('instanceof Null ==>', Null instanceof Object, '， isObject==>', Null instanceof Object)
}
// conInstanceof()

/** 
 * instanceof 总结
 * 
 * 用于识别正在处理的对象的类型
 * 用于判断一个变量是否某个对象的实例
 * 
 * instanceof 方法要求开发者明确地确认对象为某特定类型  str instanceof String
 * 
 */

console.log('--------------------- instanceof end ---------------------')


/** 
 * 排断数组的方法
 * arr instanceof Array
 * Array.isArray(arr) 
 * Object.prototype.toString.call(arr)  // 可以排断所有类型  返回 "[object type]"
 */

function isType (data, type) {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}
console.log(isType('', 'String'))
console.log(isType(1, 'Number'))
console.log(isType([], 'Array'))
console.log(isType(function () { }, 'Function'))
console.log(isType(new Date(), 'Date'))
