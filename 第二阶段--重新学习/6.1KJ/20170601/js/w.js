//通过id选择指定的标签元素
var txtName = document.getElementById('txtName')
var divApp = document.getElementById('app')
function saveHandle(){
    console.log(txtName.value) //通过value属性获取输入框中的值
    //if(空字符串) //false
    if(txtName.value){
        divApp.innerHTML += `<h3>${txtName.value}</h3>`
    }
    else{
        alert('请输入内容')
    }
    
}