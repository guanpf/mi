/**
 * Created by guanpf on 2017/9/8.
 */
$(function () {
    // var code = Math.floor(Math.random()*9000)+1000;
    // alert(code);
   $('.dropdown-menu li').click(function () {
        // console.log(this);
       $('#country').val($(this).find('a').text())
    })



});
