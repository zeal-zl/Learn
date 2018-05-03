/**
 * 数据和dom节点的绑定
 */

const input = document.getElementById('input')
const msg = document.getElementById('display')
const updateBtn = document.getElementById('update')

let obj = {}
const timer = 5000

Object.defineProperty(obj, 'msg', {
  __proto__: null,
  get () {
    return input.value
  },
  set (newVal) {
    msg.innerHTML = newVal
  }
})


update.onclick = function () {
  console.log('更新数据')
  obj.msg = input.value
}

// 模拟数据更新
setTimeout(() => {
  obj.msg = '更新数据啦 ~~~'
  // obj.msg = input.value
}, 5000)


// 进阶

const infoName = document.getElementById('infoName')
const infoAge = document.getElementById('infoAge')
const infoSex = document.getElementById('infoSex')
const infoSpeak = document.getElementById('infoSpeak')
const that = this

let obj2 = {
  infoName: 'Lyle',
  infoAge: '23',
  infoSex: '男',
  infoSpeak: 'hello world'
}

let obj3 = {
  infoName: 'gaoshu883',
  infoAge: '27',
  infoSex: '女',
  infoSpeak: 'hello world~~~~'
}

for (let it of Object.keys(obj2)) {
  that[it].innerHTML = obj2[it]
  Object.defineProperty(obj2, it, {
    get () {
      console.log('获取值')
      return ''
    },
    set (newVal) {
      console.log('设置值', newVal)
      that[it].innerHTML = newVal
    }
  })
}

setTimeout(() => {
  // obj2 = obj3
  obj2.infoName = obj3.infoName
  obj2.infoAge = obj3.infoAge
  obj2.infoSex = obj3.infoSex
  obj2.infoSpeak = obj3.infoSpeak
}, 5000)
