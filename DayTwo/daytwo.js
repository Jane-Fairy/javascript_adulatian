/*
 * @Description: The code you write is not your code
 * @Author: noah jin
 * @Date: 2023-08-28 22:17:12
 * @LastEditTime: 2023-08-28 22:42:05
 * @LastEditors: ntian jin
 * @Reference: 
 */
//1、声明一个名为challenge的变量并将其分配给初始值“30 Days Of JavaScript”。
let challenge = '30 Days Of JavaScript'


//使用console.log()在浏览器控制台上打印字符串
console.log(challenge)

//使用console.log()在浏览器控制台上打印字符串的长度
console.log(challenge.length)
//使用toUpperCase()方法将所有字符串字符更改为大写字母
console.log(challenge.toUpperCase(challenge));

//使用toLowerCase()方法将所有字符串字符更改为小写字母
console.log(challenge.toLowerCase(challenge));

//使用substr()或substring()方法剪切（切片）字符串的第一个单词
console.log(challenge.substr(3,17));
//从30 Days Of JavaScript中删除短语Days Of JavaScript 。
console.log(challenge.substring(0,3));
//使用includes()方法检查字符串是否包含单词脚本
console.log(challenge.includes('java'))     // true

//使用split()方法将字符串拆分为数组
console.log(challenge.split())
//使用split()方法在空格处拆分字符串 30 Days Of JavaScript
console.log(challenge.split(' '))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'在逗号处拆分字符串并将其更改为数组。
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(' '))
//使用replace()方法将 30 Days Of JavaScript 更改为 30 Days Of Python 。
console.log(challenge.replace('JavaScript' , 'Python'))
//“30 Days Of JavaScript”字符串中索引 15 处的字符是什么？使用charAt()方法。
console.log(challenge.charAt(15))
//使用charCodeAt()在“30 Days Of JavaScript”字符串中 J 的字符代码是什么
console.log(challenge.charCodeAt(challenge.charAt(15)))
//使用indexOf确定30 Days Of JavaScript中a第一次出现的位置
console.log(challenge.indexOf('a'))
//使用lastIndexOf确定a在30 Days Of JavaScript 中最后一次出现的位置。
console.log(challenge.lastIndexOf('a'))
//使用indexOf查找以下句子中该单词第一次出现的位置：“你不能用because结尾一个句子，因为because是一个连词”

//使用lastIndexOf查找以下句子中最后一次出现单词because的位置： “你不能用because 来结束句子，因为because 是一个连词”
//使用搜索查找以下句子中该词第一次出现的位置：“你不能用because结尾一个句子，因为because是一个连词”
//使用trim()删除字符串开头和结尾处的任何尾随空格。例如“30 Days Of JavaScript”。
//使用带有字符串30 Days Of JavaScript 的startsWith()方法并使结果为 true
//使用带有字符串30 Days Of JavaScript 的endsWith()方法并使结果为 true
//使用match()方法查找30 Days Of JavaScript 中的所有a
//使用concat()并将“30 Days of”和“JavaScript”合并为单个字符串“30 Days Of JavaScript”
//使用repeat()方法打印30天的JavaScript 2次