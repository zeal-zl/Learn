/** 
 * 模拟实现 call  ==> MyCall
 * 
 * 思路
 * 1、将要函数作为对象的属性
 * 2、执行对象函数
 * 3、删除对象函数属性
 * 
 * 注意
 * 需要将模拟的 MyCall 挂载到 Function 的原型上 Function.prototype.MyCall = MyCall
 * call 的 this参数可以传 null,  这时 this 指向默认为 window
 * call 可以给执行函数传指定的参数 
 * 函数可以有返回值 return
 * 
 */

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


action.call(obj, 'zl', '18')
let res = action2.call(obj, 'zl', '18')
console.log(res)



console.log('-------------------------- oldEs --------------------------')


Function.prototype.MyCallEs3 = MyCallEs3
function MyCallEs3 (context) {
  var context = context || window
  context.fn = this

  var params = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    params.push('arguments[' + i + ']')
  }

  var res = eval('context.fn(' + params + ')')                            // 使用自执行函数 eval()

  delete context.fn

  return res
}


action.MyCallEs3(obj, 'zl', '18')



console.log('-------------------------- Es6 --------------------------')


function MyCallEs6 (...arg) {
  const context = arg.shift() || window             // 拿到传进来的 this 指向对象
  context.fn = this                                 // 这里的 this 指的是调用MyCall 的 action 函数 所以这里是 将 action 函数作为对象的属性 fn 的值
  const res = context.fn(...arg)                    // 执行对象 fn 函数
  delete context.fn                                 // 最后删除 对象的 fn 属性
  return res                                        // 返回函数的返回值 没有就是 undefined
}

Function.prototype.MyCallEs6 = MyCallEs6

action.MyCallEs6(obj, 'zl', '18')
