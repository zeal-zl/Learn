/** 
 * 模拟实现 apply
 * 
 * 思路
 * 与call相同
 * 
 * 注意点
 * apply 的第二个参数是数组
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

action.apply(obj, ['zl', 23])
let res = action2.apply(obj, ['zl', 23])
console.log(res)





// 实现

console.log('-------------------------- oldEs --------------------------')


Function.prototype.MyApplyOldEs = function (context, arr) {
  var context = context || window
  context.fn = this

  if (!arr) {
    var res = context.fn()
  } else {
    var params = []
    for (var i = 0, len = arr.length; i < len; i++) {
      params.push('arr[' + i + ']')
    }
    var res = eval('context.fn(' + params + ')')
  }

  delete context.fn
  return res
}
action.MyApplyOldEs(obj, ['zl', 23])






console.log('-------------------------- Es6 --------------------------')


Function.prototype.MyApplyEs6 = function (context, arr) {
  context = context || window
  context.fn = this

  let res = context.fn(...arr || [])                     // 因为被 shift 给改变了原数组
  delete context.fn
  return res
}

action.MyApplyEs6(obj)
// let res = action2.MyApplyEs6(obj, ['zl', 23])
