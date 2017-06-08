var str = '我是一个字符串'
//for循环 输出一段文本内容
// for(var i=0;i<10;i++){
//     console.count('执行打印')
//     console.log(str)
// }
// console.log(i)//

//通过while执行一个循环
var i = 0
//while中的条件为true的时候会循环执行方法体中的内容
while(i<10){
    // console.count('执行打印')
    //console.log(str)
    //document.body获取body标签 通过innerHTML属性设置html的内容
    document.body.innerHTML += '<h3>'+str+'</h3>'// + '<br>'
    i++
}
//定义一个数组变量
var arr = [1,2,3,4,5,6,7,8,9]
for(var i = 8;i>-1;i--){
    //console.log(arr[i])
}
 

