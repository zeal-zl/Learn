/**
 * *undefined 与 null 的区别
 * 
 * 
 * *undefined 
 * 用于声明了变量但未对其初始化时赋予该变量的值 或 未声明过的变量（只能用于typeof，但作为赋值目标时编译器会自动将其声明为全局变量）
 * 当函数无明确返回值时，返回的也是值 "undefined"
 * 
 * 
 * *null 
 * 用于表示尚未存在的对象（即对象为空，或对象找不到）。如果函数或方法要返回的是对象，那么找不到该对象时，返回的通常是 null
 * 
 */


let lyle

console.log(lyle)
// console.log(lyle2)  // 报错 也返回

let obj = {}
console.log(obj)

