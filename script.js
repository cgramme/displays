
$(document).ready(function(){

    function listIn (list, index, interval) {
    if(index < list.length) {
    $(list[index++]).addClass('fall-in').css({'opacity':'1'}).delay(2000).queue(function(next){
            $(this).removeClass('fall-in');
            next();
        });;
    setTimeout(function () {
        listIn(list, index, interval);
        }, interval);
      }
    }

    $('li').on('click', function(){
        $('.child-3d').addClass('fade-out');
    });

    listIn($('li .child-3d'), 0, 1000);

});

var boxSize = 200;
var divPos = {};
var parent3d;
var offset;
var divXpos;
var divYpos;
var scaleSize=1;
$(document).mousemove(function(e){
    offset = $(e.target).parent().offset();
    if($(e.target).parent().attr('class') == "parent-3d"){

         divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };
        if(divPos.left<boxSize && divPos.top<boxSize){
        if(divPos.left>0 && divPos.top>0){
            if(divPos.top>boxSize/2){
                divXpos = (divPos.top-boxSize/2)/(boxSize/20);
                divYpos = -(divPos.left-boxSize/2)/(boxSize/20);
            }else{
                divXpos = -((boxSize/2)-divPos.top)/(boxSize/20);
                divYpos = ((boxSize/2)-divPos.left)/(boxSize/20);
            }
            $('h1').html("X = "+divXpos+" Y = "+divYpos);
            $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
            $(e.target).parents('li').css({'z-index':'10'});
            console.log($(e.target).parents('li').attr('class')+"   "+$('li>.parent-3d').attr('class'));
            $('.child-3d').addClass('fade-out');
            $(e.target).removeClass('fade-out').css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale(1.1)','opacity':'1'});







        }else{
            $('.child-3d').addClass('fade-out');
            $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
            $('li').css({'z-index':'1'});
        }
    }else{
        $('.child-3d').addClass('fade-out');
        //console.log("X = "+divPos.left+" Y = "+divPos.top);
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
        $('li').css({'z-index':'1'});
    }





    }else{
        $('.child-3d').removeClass('fade-out');
        offset = 1;
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
        $('li').css({'z-index':'1'});
    }





    
    
});

