
    $(function () {
        // $('#mylist').click(function () {
        //     $('#dingdan').attribute('display','block')
        // });
        $('#pingjia1').click(function () {
            $('#pingjia').show();
            $('#dingdan').hide();
            $('#message').hide();
            $('#address').hide();
        });
        $('#dingdan1').click(function () {
            $('#pingjia').hide();
            $('#dingdan').show();
            $('#message').hide();
            $('#address').hide();
        });
        $('#message1').click(function () {
            $('#pingjia').hide();
            $('#dingdan').hide();
            $('#message').show();
            $('#address').hide();
        });
        $('#address1').click(function () {
            $('#pingjia').hide();
            $('#dingdan').hide();
            $('#message').hide();
            $('#address').show();
        });


        var dataTime=new Date();
        var hours= dataTime.getHours();

        console.log(hours);
        if(4<=hours&&12>hours){
            $('#sayhello').text('上午好~');
        }
        else if(12<=hours && 18>hours){
            $('#sayhello').text('下午好~');
        }
        else if(18<=hours && 23>=hours || 4>hours){
            $('#sayhello').text('晚上好~');
        }
        else{
            return false;
        }
    });

        // 添加收货adress

    $(function () {


        var addresslist=store.get('USER_KEY',[]);

       // 初始化
        var html='';
        for(var i=0;i<addresslist.length;i++){
        //     html += '<div class="text-center" style="margin-top:50px;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">' +
        //         '<p id="p1">'+ addresslist[i].p1 +'</p> <p id="p2">'+ addresslist[i].p2 +'</p> <p id="p3">'+ addresslist[i].p3 +'</p> ' +
        //         '<p id="p4">'+ addresslist[i].p4 +'</p> <p id="p5">'+ addresslist[i].p5 +'</p> <p id="p6"><a href="#" id="a1">修改</a>' +
        //         '<a href="#" class="shanchu">删除</a></p> </div>';
        }
        // $('.add').append(html);

        $('#save').click(function () {
            var p1=$('#user').val();
            var p2=$('#phone').val();
            var p3=$('#add').val();
            var p4=$('#detailadd').val();
            var p5=$('#postcode').val();
            var p6=$('#additem').val();

            var address={
                "p1":p1,
                "p2":p2,
                "p3":p3,
                "p4":p4,
                "p5":p5,
                "p6":p6
            };
            addresslist.push(address);
            store.update("USER_KEY",addresslist);
            var html='';
            html += '<div class="text-center" style="margin :50px 10px 0px;width: 240px;height: 150px;border: 1px solid #e0e0e0;float: left">' +
                '<p id="p1">'+ addresslist[i].p1 +'</p> <p id="p2">'+ addresslist[i].p2 +'</p> <p id="p3">'+ addresslist[i].p3 +'</p> ' +
                '<p id="p4">'+ addresslist[i].p4 +'</p> <p id="p5">'+ addresslist[i].p5 +'</p> <p id="p6"><a href="#" id="a1">修改</a>' +
                '<a href="#" class="shanchu">删除</a></p> </div>';
            $('.add').append(html);
            $('.shanchu').click(function () {
                $(this).parent().parent().remove();
                // console.log($(this).parent());
                store.remove("USER_KEY",addresslist);
                // $('.add').remove();
            })
        });

    });




