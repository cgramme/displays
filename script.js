$(window).load(function(){
    listIn($('li .child-3d'), 0, 500);
});

$(document).ready(function(){

    $('li').on('click', function(){
        $(this).addClass('fall-out').delay(2000).queue(function(next){
            $(this).addClass('fall-in').removeClass('fall-out');
            next();
        });
    });

    $('.main-content button').on('click', function(){
        $('.child-3d').css({'opacity':'0'});
        listIn($('li .child-3d'), 0, 500);
    });

    

});

function listIn (list, index, interval) {
    if(index < list.length) {
        $(list[index++]).addClass('fall-in').css({'opacity':'1'}).delay(2000).queue(function(next){
                $(this).removeClass('fall-in');
                next();
        });
        setTimeout(function () {
            listIn(list, index, interval);
        }, interval);
    }
}

var boxSize=200;
var scaleSize=1.15;
var scale3d=30;
$(document).mousemove(function(e){
    var divPos={};
    var offset;
    var divXpos;
    var divYpos;
    offset = $(e.target).parent().offset();
    if($(e.target).parent().attr('class') == "parent-3d"){
         divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };
        if(divPos.left<boxSize && divPos.top<boxSize){
            if(divPos.left>0 && divPos.top>0){
                if(divPos.top>boxSize/2){
                    divXpos = (divPos.top-boxSize/2)/(boxSize/30);
                    divYpos = -(divPos.left-boxSize/2)/(boxSize/30);
                }else{
                    divXpos = -((boxSize/2)-divPos.top)/(boxSize/30);
                    divYpos = ((boxSize/2)-divPos.left)/(boxSize/30);
                }
                $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
                $(e.target).parents('li').css({'z-index':'10'});
                $(e.target).css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale('+scaleSize+')','opacity':'1'});
            }else{
                $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
                $('li').css({'z-index':'1'});
            }
        }else{
            $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
            $('li').css({'z-index':'1'});
        }
    }else{
        offset = 1;
        $('.child-3d').css({'transform':'rotateY(0deg) rotateX(0deg)'});
        $('li').css({'z-index':'1'});
    }
});






