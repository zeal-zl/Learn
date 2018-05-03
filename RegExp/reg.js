/** 
 * RegExp
 * 
 * 实例
 * const reg = new RegExp(/\{\{(.*?)\}\}/,'g')
 * const regs = //\{\{(.*?)\}\}/
 * 
 * const str = 'hello world {{Lyle}}hello world {{Lyle}}'
 * 
 * 
 * *模式修饰符
 * g ==> 全局模式，应用于所有字符串
 * i ==> 区分大小写模式，没有 i 就不区分大小写
 * m ==> 多行匹配模式
 * 
 * Es6 新加模式 
 * u ==> Unicode 模式 
 * 用来正确处理大于\uFFFF的 Unicode 字符
 * 
 * y ==> 粘连修饰符 
 * y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始
 * 
 * s ==> dotAll 模式
 * ES2018 引入s修饰符，使得 . 可以匹配任意单个字符
 * 
 * 
 * *实例属性
 * global 检测是否设置 g 标记
 * reg.global ==> true
 * @return {Boolean}
 * 
 * ignoreCase 检测是否设置 i 标记
 * reg.ignoreCase ==> false
 * @return {Boolean}
 * 
 * multiline 检测是否设置 m 标记
 * reg.multiline ==> false
 * @return {Boolean}
 * 
 * lastIndex 正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引
 * reg.lastIndex ==> 20
 * @return {Number}  
 * ps: 只有在 g 或 y 模式中才有用
 * 
 * source 返回正则表达式的字符串表示
 * reg.source ==> '\{\{(.*?)\}\}'
 * @return {String} 不包含两个反斜杠('/'...'/') 和 匹配模式(i、g、m ...)
 * 
 * Es6 新加属性
 * flags 返回正则表达式的修饰符
 * reg.flages ==> 'g'
 * 标志排序(从左到右，即"g i m u y")
 * @return {string}
 * 
 * sticky 检测是否设置 y 修饰符。
 * reg.sticky ==> false
 * @return {Boolean}
 * 
 * 
 * dotAll 检测该正则表达式是否处在dotAll模式
 * reg.dotAll ==> false
 * @return {Boolean}
 * 
 * 
 * *实例方法
 * reg.exec(str)
 * @return {array}
 * @param {String} arr[0] 返回数组的第一项 ==> 匹配的全部字符串
 * @param {String} arr[1 - n] 返回数组的第二项起 到 最后一项 ==> 括号中的分组捕获 (正则中括号分组)
 * @param {Number} index 匹配到的字符位于原始字符串的基于0的索引值
 * @param {String} input 原始字符串
 * ps: 还可以获取正则实例上的属性 reg.lastIndex 等等
 * [
 *  '{{Lyle}}',
 *  'Lyle',
 *  index: 32,
 *  input: 'hello world {{Lyle}}hello world {{Lyle}}hello world {{Lyle}}hello world {{Lyle}}'
 * ]
 * 
 * reg.test(str) 用来查看正则表达式与指定的字符串是否匹配
 * @return {Boolean}
 * 
 * 
 * *字符串方法
 * @return {array}
 * str.match(regs)
 * 如果正则表达式不包含 g 标志，则 str.match(regs) 会返回和 regs.exec(str) 相同的结果。
 * 而且返回的 Array 拥有一个额外的 input 属性，该属性包含被解析的原始字符串。另外，还拥有一个 index 属性，该属性表示匹配结果在原字符串中的索引（以0开始）
 * 
 * str.match(reg)
 * 如果正则表达式包含 g 标志，则该方法返回一个 Array ，它包含所有匹配的 子字符串 而不是匹配 对象。捕获组不会被返回(即不返回index属性和input属性)。如果没有匹配到，则返回  null 
 * 
 * 
 * str.search(reg)
 * @param {RegExp} 正则表达式， 
 * 如果传入一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
 * 
 * @return {Number} 索引
 * 类似 reg.test(str) 
 * 区别 在于 reg.test(str)返回一个布尔值，而 str.search(reg) 返回索引（ 如果找到 ）或者-1（ 如果没找到 ）
 * 
 * 
 * str.replace()
 * @param {RegExp|String} 正则规则 或 字符串
 * @param {String|Function} 用于替换掉第一个参数在原字符串中的匹配部分的字符串 或 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果
 * @return {String} 一个部分或全部匹配由替代模式所取代的新的字符串
 * 
 * 如果replace的第二个参数是函数 Function() 则有以下参数
 * @param {String} 第一个参数 ==> 匹配的全部字符串
 * @param {String} 第二个参数 到 倒数第三参数 ==> 括号中的分组捕获 (正则中括号分组)
 * @param {Number} 倒数第二个参数 匹配到的字符位于原始字符串的基于0的索引值
 * @param {String} 倒数第一个参数 原始字符串
 * 
 * 
 * str.split()
 * 使用指定的 分隔符字符串 将一个 String对象 分割成 字符串数组* 
 * 
 * ps: 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割
 * 
 */

console.log('----------------------------- 分隔符 -----------------------------')

// 测试参数
const reg = new RegExp(/\{\{(.*?)\}\}/, 'g')
const regs = /\{\{(.*?)\}\}/
const hw = 'hello world'
let str = 'hello world {{Lyle}}'
let strs = 'hello world {{Lyle}}'.repeat(2)



console.log('----------------------------- exec -----------------------------')

while (match = reg.exec(strs)) {
  console.log(match)
}
// ==> [ '{{Lyle}}', 'Lyle', index: 12, input: 'hello world {{Lyle}}' ]




console.log('----------------------------- match -----------------------------')

// 不加 g 与 exec 返回结果一样
console.log(str.match(regs)) // ==> [ '{{Lyle}}', 'Lyle', index: 12, input: 'hello world {{Lyle}}' ]

// 全局匹配 (加 g)
console.log(strs.match(reg)) // ==> [ '{{Lyle}}', '{{Lyle}}', '{{Lyle}}', '{{Lyle}}' ]




console.log('----------------------------- match -----------------------------')

str.search()





console.log('----------------------------- replace -----------------------------')

const reReg = /\{\{(.*?)\}\}(hello)/
console.log(str.replace(reg, 'love lyle '))  // ==> hello world love lyle hello world love lyle


console.log(strs.replace(reReg, (...arg) => {
  console.log(arg)
}))
// ==> [ '{{Lyle}}hello','Lyle',  'hello',  12,  'hello world {{Lyle}}hello world {{Lyle}}' ]




console.log('----------------------------- split -----------------------------')

console.log(hw.split('').join(' '))
// ==> h e l l o   w o r l d
