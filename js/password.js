window.onload = function () {

    var userName = document.getElementById('user');
    var oPassword = document.getElementById('password');
    var oPasswordAgain = document.getElementById('passwordAgain');
    var oP1 = document.getElementById('p1');
    var oP2 = document.getElementById('p2');
    var oP3 = document.getElementById('p3');


    fn1(userName,oP1,/^[0-9A-Za-z\u4e00-\u9fa5]{4,8}$/);
    fn1(oPassword,oP2,/^[0-9A-Za-z]{4,8}$/);
    fn1(oPasswordAgain,oP3,/^[0-9A-Za-z]{4,8}$/);

    function fn1(obj,p,zz) {
        obj.onfocus = function () {
            p.innerHTML = '请输入4-8位中文英文数字组成的字符';
            obj.style.borderColor = '';
            if(zz.test(obj.value)){
                obj.style.borderColor = 'green';
            }
        };
        obj.onblur = function () {
            if(!zz.test(obj.value)){
                obj.style.borderColor = 'red';
                p.innerHTML = '输入格式错误！';
                p.style.color = 'red'
            }else{
                obj.style.borderColor = 'green';
                p.innerHTML = '输入格式正确！';
                p.style.color = 'green';
            }
        };
    }
    $('#submit').click(function () {
        if( /^[0-9A-Za-z\u4e00-\u9fa5]{4,8}$/.test(userName.value)&&/^[0-9A-Za-z\u4e00-\u9fa5]{4,8}$/.test(oPassword.value)&&/^[0-9A-Za-z\u4e00-\u9fa5]{4,8}$/.test(oPasswordAgain.value)&&oPassword.value == oPasswordAgain.value){
            alert('设置成功！');
            var username = $('#user').val();
            var password = $('#password').val();
            store.update('keyUsername',username);
            store.update('keyPassword',password);
            console.log(username);
            console.log(password);
        }else{
            alert('提交失败！');
            oP3.style.borderColor = 'green';
            oP3.innerHTML='输入密码有误'
            oP3.style.color = 'red'
            return false;
        }
    })
    
};