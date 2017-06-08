//字符串类型
var str1 = ''
var str2 = ""
var str3 = ``

/**
 * 实现效果在页面上展示几段文字
 * 每一段的内容为: 我是第x个p标签
 * 一般在定义字符串的时候最外层使用单引号,内层使用双引号
 * 
 * 在字符串拼接的时候 如果遇到特殊符号需要使用转义符\
 */
var strResult = ''
for(var i =0 ;i<10;i++){
    strResult += '<p style="color:red;font-size:24px;">'
                +'我是第'+(i+1)+'个p标签(￣▽￣)"'
                +'</p>'
    // strResult += "<p style='color:blue;font-size:24px;'>"
    //             + "我是第"+(i+1)+"个标签(￣▽￣)\""
    //             + "</p>"
    // strResult += `<p style="color:red;font-size:24px;">
    //                 我是第${i+1}个标签(￣▽￣)"
    //             </p>`
}
document.body.innerHTML += strResult

// += 相当于在原有的值基础之上加上一个新值
str1 = 'abc'
str1 += '123'//str1 = str1 + '123'
// console.log(str1)
//写for循环输出26个字母
var strWords = ''
//String.fromCharCode(65)//根据字符在ascii码表中的位置获取字母
for(var i=65;i<91;i++){
    //把etufo几个字母从序列中移除
    var strTemWord = String.fromCharCode(i)
    if(strTemWord == 'E' || strTemWord == 'T' || 
    strTemWord =='U' || strTemWord == 'F' || 
    strTemWord =='O'){
    }
    else{
        strWords += strTemWord
    }
}
// strWords.toLowerCase()//字符串转小写
// strWords.toUpperCase()//字符串转大写
console.log(strWords)

var strName = 'Tom'
var strAge = 13
var strAddress = '加利福尼亚'
var strData = `我的名字是${strName},我今年${strAge}岁了.我来自${strAddress}`
console.log(strData)