/** 
 * DOM nodeType
 * 
 * 共有12种
 * 其中 2、4、5、6、12、已经被废弃了
 * 
 *  1 ==> 元素节点 ( Element )
 *  3 ==> 文本节点 ( Text )
 *  7 ==> 处理指令、一个用于XML文档的，例如 <?xml-stylesheet ... ?> 指令声明。
 *  8 ==> 注释节点 ( Comment )
 *  9 ==> 整个文档 ( Document )
 * 10 ==> 文档类型 ( DocumentType )  <!DOCTYPE html>  就是用于 HTML5 的
 * 11 ==> 表示邻接节点和它们的子树 ( DocumentFragment )
 * 
 * 
 * *DOM.nodeType 返回节点类型 
 * document.body.nodeType  ==> 1
 * 
 * 
 * *空格也算是 文本节点 ( 3 )
 * 
 * 
 * ps:
 * LINK: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
 */
