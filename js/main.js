/**
 * Created by guanpf on 2017/9/2.
 */
    $(function () {
//      $('#ajaxbtn').click(function () {
//
//          $.ajax({
//              type: "GET",
//              url: "gouwuche.json",
//              dataType: "json",
//              success: function (data) {
//                  alert('123');
//                  console.log();
//                
//              },
//              error:function (data, d) {
//                  alert('sdfs5131');
//                  console.log('error',data, d);
//              }
//
//
//          });
//
//      });
//     
			
		var isLogin  = store.get('isLogin',false);
        if(isLogin==true){
            $('#myID').show();
            $('#mydingdan').show();
            $('#denglu').hide();
            $('#zhuce').hide();
        }
        else{
            $('#myID').hide();
            $('#mydingdan').hide();
            $('#denglu').show();
            $('#zhuce').show();
        }
        
		$('#reset').click(function(){
			if(isLogin==true){
				$('#myID').show();
				$('#mydingdan').show();
				$('#denglu').hide();
				$('#zhuce').hide();
			}
			else{
				$('#myID').hide();
				$('#mydingdan').hide();
				$('#denglu').show();
				$('#zhuce').show();
			}
			store.remove('isLogin');
		});			
			
		
		
        //  var timer=null;
        // var timer1=null;
        // $.ajax({
        //     type:"GET",
        //     url:"gouwuche.json",
        //     dataType:"json",
        //     success:function (data) {
        //         console.log(data);
        //         var html='';
        //         for(var i=0;i<data.length;i++){
        //             html+='<tr class="tr"><td><img src="img/mijiajiqiren.jpg" class="thumbnail" alt=""></td>'
        //         }
        //     },
        //     error:function (data, d) {
        //         console.log('error',data, d);
        //     }
        //
        // });
        // $.getJSON('test.json',{},function (data) {
        //     console.log(data);
        // })
        $('.cebianlan ul').find('li').mouseover(function () {
            $(this).css('backgroundColor','orange')
        });
        $('.cebianlan ul').find('li').mouseout(function () {
            $(this).css('backgroundColor','black')
        });
        $('.kefu24').mouseover(function () {
            $(this).css('backgroundColor','orange')
            $(this).find('a').css('color','white')
        });
        $('.kefu24').mouseout(function () {
            $(this).css('backgroundColor','white')
            $(this).find('a').css('color','orange')
        });
        
        // var phone=document.getElementById('hongmi');
        // var sphone=document.getElementById('hongmi1');
        // var tv=$('#tv');
        // var stv=$('tv1');

        // fn1(phone,sphone);
        // fn1(tv,tv1)
        // function fn1(item,str) {
        //     item.onmouseover=(function () {
        //         str.show()
        //     });
        //     item.onmouseout=(function () {
        //         str.hide()
        //     });
        // }
        var timer=null;
        $('#hongmi').mouseover(function () {
            clearTimeout(timer1);
            $('#hongmi1').show()
        });
        $('#hongmi').mouseout(function () {
            timer1=setTimeout(function () {
                $('#hongmi1').hide()
            },20);
            $('#hongmi').mouseover(function () {
                clearTimeout(timer1);
                $('#hongmi1').show()
            });
            $('#hongmi').mouseout(function () {
                $('#hongmi1').hide();
            });
        });

		var timer1=null;
        $('#tv').mouseover(function () {
            clearTimeout(timer1);
            $('#tv1').show()
        });
        $('#tv').mouseout(function () {
            timer1=setTimeout(function () {
                $('#tv1').hide()
            },350);
            $('#tv').mouseover(function () {
                clearTimeout(timer1);
                $('#tv1').show()
            });
            $('#tv').mouseout(function () {
                $('#tv1').hide();
            });
        });

		var timer1=null;
        $('#box').mouseover(function () {
            clearTimeout(timer1);
            $('#box1').show()
        });
        $('#box').mouseout(function () {
            timer1=setTimeout(function () {
                $('#box1').hide()
            },350);
            $('#box').mouseover(function () {
                clearTimeout(timer1);
                $('#box1').show()
            });
            $('#box').mouseout(function () {
                $('#box1').hide();
            });
        });

        $('#luder').mouseover(function () {
            clearTimeout(timer1);
            $('#luder1').show()
        });
        $('#luder').mouseout(function () {
            timer1=setTimeout(function () {
                $('#luder1').hide()
            },350);
            $('#luder').mouseover(function () {
                clearTimeout(timer1);
                $('#luder1').show()
            });
            $('#luder').mouseout(function () {
                $('#luder1').hide();
            });
        });

        $('#itell').mouseover(function () {
            clearTimeout(timer1);
            $('#itell1').show()
        });
        $('#itell').mouseout(function () {
            timer1=setTimeout(function () {
                $('#itell1').hide()
            },350);
            $('#itell').mouseover(function () {
                clearTimeout(timer1);
                $('#itell1').show()
            });
            $('#itell').mouseout(function () {
                $('#itell1').hide();
            });
        });



        var timer=null;
        $('#shouji').mouseover(function () {
            clearTimeout(timer);
            $('#dianhuaka').show()
        });
        $('#shouji').mouseout(function () {
            timer=setTimeout(function () {
                $('#dianhuaka').hide()
            },350);
            $('#dianhuaka').mouseover(function () {
                clearTimeout(timer);
                $('#dianhuaka').show()
            });
            $('#dianhuaka').mouseout(function () {
                $('#dianhuaka').hide();
            });
        });

    });


