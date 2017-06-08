/**
 * 条件运算符
 * == 是否相等
 * 比较大小
 * < > <= >=
 * 
 * && 并且表示条件都需要成立时为true
 * || 或者表示只要有一个为true结果为true
 * 
 * if 表示只要条件成立就会执行
 * 紧跟在if后面的else if 会在if不成立的时候继续判断
 *  直到最后一个else if
 * 当前面的条件都无法满足的时候会执行else中的代码
 * else if只能紧跟在if之后
 * if和else不需要成对的出现
 */
var age = 60
var gender = '女'
if(age<12){
    console.log('今天可以过儿童节')
}
else if(age<18 || gender=='女'){
    console.log('已经不再是儿童,但是依然有特权')
}
else if(age<45 || gender == '女'){
    console.log('已经是青年,但是依然有特权')
}
else{
    console.log('和你没关系')
}