/** 
 * 模拟实现 new
 * 
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 * 
 * new 是关键字 不能被覆盖 用 Lyle 代替
 * 
 * Lyle(Ctor) 的第一个参数是构造函数 ( 原 new 关键字后的 函数 )
 * 使用 shift() 截取第一个参数
 */


// new 主要实现的功能
function newFun () {
  const obj = {}                     // 先创建一个空的对象 obj
  obj.__proto__ = newFun.prototype   // 将 obj 的 __proto__ 指向 构造函数的原型 prototype
  Lyle.call(obj)                     // 改变 this 的指向
  return obj                         // 返回对象 obj
}



console.log('-------------------------- V1 --------------------------')

// 模拟实现 new 
// version 1

function Lyle (...arg) {
  const Ctor = arg.shift()          // 获取构造函数
  const obj = {}                    // 创建一个空对象 
  obj.__proto__ = Ctor.prototype    // 改变对象 obj 的 __proto__ 的指向 
  // Ctor.call(obj, ...arg)         // 改变 Ctor 的 this 指向 并传参
  Ctor.apply(obj, arg)
  return obj                        // 返回对象
}


function Obj (name, age) {
  this.name = name
  this.age = age
}

Obj.prototype.walk = function () {
  console.log(this.name + ' walk')
}

let lyle1 = Lyle(Obj, 'Lyle-zl', 18)
let new1 = new Obj('new-zl', 18)


console.log('lyle1 ==>', lyle1)
console.log('lyle1 name ==>', lyle1.name)
console.log('lyle1 age ==>', lyle1.age)
lyle1.walk()

console.log('-------------------------- 分隔符 --------------------------')

console.log('new1 ==>', new1)
console.log('new1 name ==>', new1.name)
console.log('new1 age ==>', new1.age)
new1.walk()




console.log('-------------------------- V2 --------------------------')

// version 2
// 返回值 排断返回值
// 排断返回值是否是 对象 如果是对象就返回 这个对象 否则 就原样返回

function Obj2 (name, age) {
  this.name = name
  this.age = age
  return {
    name: name,
    action: 'walk'
  }
}

function Obj3 (name, age) {
  this.name = name
  this.age = age
  return 'walk'
}

let new2 = new Obj2('new-zl2', 23)
console.log('new2 ==>', new2)
console.log('new2 name==>', new2.name)
console.log('new2 age==>', new2.age)
console.log('new2 action==>', new2.action)

console.log('-------------------------- 分隔符 --------------------------')

let new3 = new Obj3('new-zl3', 23)
console.log('new3 ==>', new3)
console.log('new3 name==>', new3.name)
console.log('new3 age==>', new3.age)
console.log('new3 action==>', new3.action)



function Lyle2 (...arg) {
  const Ctor = arg.shift()
  const obj = {}
  obj.__proto__ = Ctor.prototype
  const res = Ctor.apply(obj, arg)
  return typeof res === 'object' ? res : obj
}


console.log('-------------------------- 分隔符 --------------------------')


let lyle2 = new Obj2('new-zl3', 23)
console.log('lyle2 ==>', lyle2)
console.log('lyle2 name==>', lyle2.name)
console.log('lyle2 age==>', lyle2.age)
console.log('lyle2 action==>', lyle2.action)


console.log('-------------------------- 分隔符 --------------------------')


let lyle3 = new Obj3('new-zl3', 23)
console.log('lyle3 ==>', lyle3)
console.log('lyle3 name==>', lyle3.name)
console.log('lyle3 age==>', lyle3.age)
console.log('lyle3 action==>', lyle3.action)
