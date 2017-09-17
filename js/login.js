/**
 * Created by guanpf on 2017/9/7.
 */
$(function () {
    $('#path1').click(function () {
        $(this).css('color','orange');
        $('#path2').css('color','#666');
        $('#zhanghao').show();
        $('#saoma').hide();
        $('#smsaoma').hide()
    });
    $('#path2').click(function () {
        $(this).css('color','orange');
        $('#path1').css('color','#666');
        $('#zhanghao').hide();
        $('#smsaoma').hide();
        $('#saoma').show()
    });

    $('#path3').click(function () {
        $('#path2').css('color','orange');
        $('#path1').css('color','#666');
        $('#zhanghao').hide();
        $('#saoma').hide();
        $('#smsaoma').show()
    });

    var username = store.get('keyUsername');
    var password = store.get('keyPassword');
    username = username.replace(/^"|"$/g,"");
    password = password.replace(/^"|"$/g,"");

    console.log(username);
    console.log(password);
    $('.form').submit(function () {
        var userName=$('#user').val();
        var passWord=$('#password').val();
        if(userName ==username&& passWord ==password){
            alert('登录成功！');
            store.add('isLogin',true);
            
//             var isLogin  = store.get('isLogin',false);
            location.href = 'main.html';
        }else{
            alert('提交失败！');
            // oP2.style.borderColor = 'red';
            // oP2.innerHTML='输入密码有误';
            // oP2.style.color = 'red';
            return false;
        }
        return false;
    })
});
