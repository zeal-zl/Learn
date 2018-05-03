/** 
 * 模拟实现 Object.create 
 * 
 */

const o = {}


Object.create = function (o) {
  const F = function () { }
  F.prototype = o
  return new F()
}
