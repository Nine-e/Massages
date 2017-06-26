/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 16:21:13
 * @version $Id$
 */
$(initPage);

var num=1;
var choose=1;

function initPage(){

	$.getJSON("../json/common.json",function(data){

		menuData = data.menu;
		var menuHtml = $.templates("#menuTmpl").render(menuData)
		$(".booking").append(menuHtml);

		headData = data.head;
		var headHtml = $.templates("#headTmpl").render(headData)
		$(".booking").append(headHtml);

        showMenu();
        hideMenu();
        

	}); 
	$.getJSON("../json/booking.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".booking").append(cntHtml);
        
        firstData = data.first;
		var firstHtml = $.templates("#firstTmpl").render(firstData)
		$(".cnt-cnt").append(firstHtml);

		secondData = data.second;
		var secondHtml = $.templates("#secondTmpl").render(secondData)
		$(".cnt-cnt").append(secondHtml);

		thirdData = data.third;
		var thirdHtml = $.templates("#thirdTmpl").render(thirdData)
		$(".cnt-cnt").append(thirdHtml);

		fourthData = data.fourth;
		var fourthHtml = $.templates("#fourthTmpl").render(fourthData)
		$(".cnt-cnt").append(fourthHtml);

		fifthData = data.fifth;
		var fifthHtml = $.templates("#fifthTmpl").render(fifthData)
		$(".cnt-cnt").append(fifthHtml);
        
        chooseTherapist();
        chooseDate();
        chooseTime();
		ctrlNum();
		Continue();
		Back();
		
	});


	$.getJSON("../json/signup.json", function(data) {
        betOneData = data.bet;
        var betOneHtml = $.templates("#betOneTmpl").render(betOneData);
        $(".third").append(betOneHtml);
    });

    $.getJSON("../json/signin.json", function(data) {
        betTwoData = data.bet;
        var betTwoHtml = $.templates("#betTwoTmpl").render(betTwoData);
        $(".third").append(betTwoHtml);
    });


	$.getJSON("../json/common.json",function(data){
		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".booking").append(footHtml);
		ctrlRadio();

	}); 
	
}
function Continue(){
	$(".continue-button").click(function(){
		num++;
		/*console.log(num);*/
		ctrlNum();
});
	$(".book-button").click(function(){
		num++;
		/*console.log(num);*/
		ctrlNum();
});
}

function Back(){
	$(".back-button").click(function(){
		if(num==1)
			num=1;
		else
			num--;
		/*console.log(num);*/
		ctrlNum();

	});
}

function ctrlNum(){
	console.log(num);
	if(num == 1){
			$(".cnt-num-first").siblings().css("font-size","20px");
			$(".cnt-num-first").css("font-size","30px");
			$(".cnt-num-first").siblings().css("color","#ccc");
			$(".cnt-num-first").css("color","#696969");
			$(".agreeing-text").hide();
			$(".back-button").hide();
			$(".first").show();
			$(".second").hide();
			$(".third").hide();
			$(".fourth").hide();
			$(".fifth").hide();
			$(".continue-button").show();
			$(".agreeing-text").show();
			$(".book-button").hide();
			}
	if(num == 2){
			$(".cnt-num-second").siblings().css("font-size","20px");
			$(".cnt-num-second").css("font-size","30px");
			$(".cnt-num-second").siblings().css("color","#ccc");
			$(".cnt-num-second").css("color","#696969");
			$(".agreeing-text").show();
			$(".back-button").show();
			$(".first").hide();
			$(".second").show();
			$(".third").hide();
			$(".fourth").hide();
			$(".fifth").hide();
			$(".continue-button").show();
			$(".agreeing-text").show();
			$(".book-button").hide();
		}
	if(num == 3){
			$(".cnt-num-third").siblings().css("font-size","20px");
			$(".cnt-num-third").css("font-size","30px");
			$(".cnt-num-third").siblings().css("color","#ccc");
			$(".cnt-num-third").css("color","#696969");
			$(".first").hide();
			$(".second").hide();
			$(".third").show();
			$(".fourth").hide();
			$(".fifth").hide();
			$(".continue-button").show();
			$(".agreeing-text").show();
			$(".book-button").hide();
			/*console.log("choose");
			console.log(choose);*/
			if(choose==1) {
				$("#betOneOne").show();
				$("#betTwo").hide();
			}
			if(choose==2) {
				$("#betOneOne").hide();
				$("#betTwo").show();
			}
		}
	if(num == 4){
			$(".cnt-num-fourth").siblings().css("font-size","20px");
			$(".cnt-num-fourth").css("font-size","30px");
			$(".cnt-num-fourth").siblings().css("color","#ccc");
			$(".cnt-num-fourth").css("color","#696969");
			$(".first").hide();
			$(".second").hide();
			$(".third").hide();
			$(".fourth").show();
			$(".fifth").hide();
			$(".continue-button").hide();
			$(".agreeing-text").hide();
			
			$(".book-button").show();
		}
	if(num == 5){
			$(".cnt-num-fourth").siblings().css("font-size","20px");
			$(".cnt-num-fourth").css("font-size","30px");
			$(".cnt-num-fourth").siblings().css("color","#ccc");
			$(".cnt-num-fourth").css("color","#696969");
			$(".first").hide();
			$(".second").hide();
			$(".third").hide();
			$(".fourth").hide();
			$(".fifth").show();
			$(".continue-button").hide();
			$(".agreeing-text").hide();
			$(".book-button").show();
		}
		if(num == 6) {
			location.href = "../html/sucorder.html";
		}
    
}

function ctrlRadio(){
	$(".third-choose-customer").css("background-color","rgb(217,251,234)");
	$("#customer").on("click",function(event){
		choose=1;
		$(".third-choose-customer").css("background-color","rgb(217,251,234)");
		$(".third-choose-account").css("background-color","#fff");
		$("#betOneOne").show();
		$("#betTwo").hide();
	});
	console.log("choose");
	console.log(choose);
	$("#account").on("click",function(event){
		choose=2;
		$(".third-choose-customer").css("background-color","#fff");
		$(".third-choose-account").css("background-color","rgb(217,251,234)");
		$("#betOneOne").hide();
		$("#betTwo").show();
	});
	console.log("choose");
	console.log(choose);
		
}

function chooseDate(){
	$('#dd').calendar({
        trigger: '#dt',
        zIndex: 999,
		format: 'yyyy-mm-dd',
        onSelected: function (view, date, data) {
            console.log('event: onSelected')
        },
        onClose: function (view, date, data) {
            console.log('event: onClose')
            console.log('view:' + view)
            console.log('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });
}

function chooseTime(){
	$("#di").timepicki();
}

function chooseTherapist(){

	$(".imgForEach").click(function(event) {
		$(this).find(".imgBorder").css("display","block");
		$(this).siblings().find(".imgBorder").css("display","none");
		var index = $(this).find("input").val();

		$.getJSON("../json/booking.json",function(data){

			messageData = data.message;
			var messageHtml = $.templates("#messageTmpl").render(messageData[index-1]);
			$(".messageBox").empty();
			$(".imgContainer").append(messageHtml); 
            $(".messageBox").show();
	    }); 

	});

}