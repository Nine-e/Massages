/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 16:21:13
 * @version $Id$
 */

var num=1;
var choose=1;
var date,time,session,length,type,name,email,street1,street2,state,zip,parparking,user,credit,security,expiration,Billing,gift;
function load()
{ 
    /*initPage();*/
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
		ctrlRadio();
		Continue();
		Back();
		sessionSelect();
		selectLength();
		selectType();
		
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
			$(".agreeing-text").hide();
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
			date=$('#cla').val();
			time=$('#di')val();
		}
	if(num == 3){
		    session=$('.session span').html();
		    length=$('#span1').html();
		    type=$('.type span').html();
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
		    street1=$('.fourth-address1in').val();
		    street2=$('.fourth-address2in').val();
		    state=$('.fourth-provincein').val();
		    zip=$('.fourth-codein').val();
		    parking=$('.fourth-instructionsin').val();
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
			user=$('.fifth-namein').val();
			credit=$('.fifth-numin').val();
			expiration=$('.fifth-datein').val();
			Billing=$('.fifth-numin').val();
			gift=$('.fifth-giftin').val();
			/*$.ajax({
	        	url: 'http://localhost:8080/phpbin/booking.php',
	        	dataType: 'json',
	        	data: {
	        	   "date" : date,
			       "time" : time,
			       "session": session,
			       "length" :length,
			       "type" :type,
			       "name" :name,
			       "email" :email,
			       "street1": street1,
			       "street2": street2,
			       "state":state, 
			       "zip": zip
			       "parking":parking 
			       "user" :email
			       "credit": credit
			       "security": security
			       "expiration": expiration
			       "Billing":Billing
			       "gift": gift
	           },
	           success :function(result)
	           {

	           }
	        });*/
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
	Flatpickr.l10n.firstDayOfWeek = 1;
	document.getElementById("cla").flatpickr();
	var x=($('.today').index('.flatpickr-day')+1)%7;
	x=x+$('.flatpickr-day1').length;
	x=x%7;
	x--;
	if(x<0)
	{
		x=6;
	}
	$('.flatpickr-weekday').eq(x).css('border-bottom','2px solid rgb(100,210,163)')
}

function chooseTime(){
	$("#di").timepicki();
}

function chooseTherapist(){

	$(".imgForEach").click(function(event) {
		name=$(this).find("p").html();
		$(this).find(".imgBorder").css("display","block");
		$(this).siblings().find(".imgBorder").css("display","none");
		var index = $(this).find("input").val();
        
		$.getJSON("../json/booking.json",function(data){

			messageData = data.message;
			var messageHtml = $.templates("#messageTmpl").render(messageData[index-1]);
			$(".messageBox").css("padding","0px 30px");
			$(".messageBox").empty();          /*清空div中的内容*/
			$(".messageConnect").append(messageHtml); 
            $(".messageBox").show();
	    }); 

	});

}
var session = [
    "Single-1 therapist",
    "Double-2 therapist"
];
var flag = 0;
function sessionSelect(){
	$(".session").click(function(event) {
        flag=0;
		var index = $(this).find("input").val();
		if(index>=0)
        flag = index;
        console.log(flag);
		if(index > 0){
			$(this).css("display","none");
		    $(this).siblings().css("display","block");
		}
		if(flag==1)
		{
			$("#span1").html(length[0][0]);
		}else {
			$("#span1").html(length[1][0]);
		}
		if(flag==0)
			flag=0;
		else flag--;
		$("#span1").html(length[flag][0]);
        for(var i=2;i<=4;i++)
        {
        	var s="#span"+i;
        	$(s).html(length[flag][i-2]);
        }
		$(".sessionHead").find("span").text(session[index-1]);
		$(".sessionSelect").slideToggle(200);
	});

	$(".session").mouseenter(function(event) {
		$(this).css("background-color","rgb(235,235,235)");
	});

	$(".session").mouseleave(function(event) {
		$(this).css("background-color","white");
	});
}


/*2*3的二维数组*/
var length = [
    ["60 minutes-£65","90 minutes-£75","120 minutes-£95"],
    ["60 minutes-£130","90 minutes-£150","120 minutes-£190"],
];
function selectLength(){

	$(".length").click(function(event) {

		var index = $(this).find("input").val();
		
        
        if(index > 0){
		    $(this).siblings().css("display","block");
		    $(this).css("display","none");
		}
		if(index>0)
		$("#span1").html(length[flag][index-1]);
		$(".lengthSelect").slideToggle(200);
	});

	$(".length").mouseenter(function(event) {
		$(this).css("background-color","rgb(235,235,235)");
	});

	$(".length").mouseleave(function(event) {
		$(this).css("background-color","white");
	});
}

var type = [
    "Swedish Massage",
    "Deep tissue",
    "Sports",
    "Pre-natal",
    "Couples Massage",
    "Thai Massage",
    "Relaxing",
    "At work"
];
function selectType(){

	$(".type").click(function(event) {

		var index = $(this).find("input").val();
        if(index > 0){
			$(this).css("display","none");
		    $(this).siblings().css("display","block");
		}
		$(".typeHead").find("span").text(type[index-1]);

		$(".typeSelect").slideToggle(200);

	});

	$(".type").mouseenter(function(event) {
		$(this).css("background-color","rgb(235,235,235)");
	});

	$(".type").mouseleave(function(event) {
		$(this).css("background-color","white");
	});
}