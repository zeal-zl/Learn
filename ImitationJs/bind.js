/**  
 * 模拟实现bind
 * 
 * bind() 方法
 * 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
 * 
 * 特点
 * 返回一个函数
 * 可以传入参数
 * 
 * 
 * 思路
 * 可以使用 apply 或 call 实现调用
 * 参数 通过拼接 bind时传的参 和 调用时传的参
 * 实现构造函数的效果  也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。
 */

// bind()
const obj = {
  name: 'Lyle',
  age: 23
}

function action (a, b) {
  console.log(this.name, this.age, a, b)
}

function action2 (a, b) {
  return {
    name: this.name,
    age: this.age,
    a,
    b
  }
}

const bindFun = action.bind(obj)
bindFun('zl')





// 实现
console.log('-------------------------- Es6 --------------------------')


Function.prototype.MyBind = function (...arg) {

  // 如果调用不是函数就报错
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }

  // 获取bind 的 this 指向的对象
  const context = arg.shift() || window
  // 这里的 this 指的是 action函数
  const self = this

  // 创建空函数 作为中转函数
  const transferFun = function () { }

  // 定义返回函数
  const backFun = function (...args) {
    // 这里的 this 指的是调用函数的对象 
    // 排断是不是作为构造函数 如果是 this 的指向就是实例对象 否则就是 传进来的对象
    // 合并两次传进来的参数
    return self.apply(this instanceof transferFun ? this : context, [...arg, ...args])
  }

  // 将中转函数的原型指向当前this的指向 (action)
  transferFun.prototype = self.prototype

  // 将 返回函数的原型 指向  通过 中转函数 构造的 实例对象
  backFun.prototype = new transferFun()

  // 返回 返回函数
  return backFun
}


const myBindFun = action.MyBind(obj, 23)
myBindFun('zl')

let ll = new myBindFun('ooo')
console.log(ll)
