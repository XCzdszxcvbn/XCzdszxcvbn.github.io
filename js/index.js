var sww = 'yanghongjin'; // 设置用户名名称
var sty = 'yhj0716'; // 设置密码
do { // 使用 do while循环    先执行一次循环体，也就是下面的 用户名和密码输入框以及if分支。
    var str = prompt('请输入用户名:'); // 弹出用户名输入框
    var stt = prompt('请输入密码:'); // 弹出密码输入框

    if (str == sww && stt == sty) { // 判断用户名和密码是否输入正确
        alert('登录成功') // 正确弹这个
    } else {
        alert('您输入的用户名火密码错误，请重新输入') // 错误弹这个
    }
} while (str !== sww && stt !== sty) // 用户名密码输入正确，退出循环; 输入错误，继续循环循环体；