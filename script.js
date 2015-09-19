


$(document).ready(function(){

});

var divPos = {};
var offset = $("#div1").offset();
var divXpos;
var divYpos;
var scaleSize=1;
$(document).mousemove(function(e){
    divPos = {
        left: e.pageX - offset.left,
        top: e.pageY - offset.top
    };
    if(divPos.left<400 && divPos.top<400){

    	if(divPos.left>0 && divPos.top>0){
    		if(divPos.top>200){
    			//divXpos = (-divPos.top-200)/150;
    			divXpos = (divPos.top-200)/20;
    			divYpos = -(divPos.left-200)/20;
    		}else{
    			//divXpos = 4-divPos.top/50;
    			divXpos = -(200-divPos.top)/20;
    			divYpos = (200-divPos.left)/20;
    		}
    		
    		//var scaleSize = ((Math.abs(divXpos)+Math.abs(divYpos)))/20;
    		if(scaleSize<1){
    			//scaleSize=1;
    		}else if(scaleSize>1.05){
    			//scaleSize=1.05;
    		}


    		$('#div2').css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg) scale('+scaleSize+')'});
    		$('.cursor-location').html("Y = "+divYpos+" X = "+divXpos+" scale = "+scaleSize);
    	}else{
    		$('.cursor-location').html("Cursor out of box");
    		$('#div2').css({'transform':'rotateY(0deg) rotateX(0deg)'});
    	}
    }else{
    	$('.cursor-location').html("Cursor out of box");
    	$('#div2').css({'transform':'rotateY(0deg) rotateX(0deg)'});
    }
});