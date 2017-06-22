/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 16:21:13
 * @version $Id$
 */
$(initPage);

var num=1;

function initPage(){
	$.getJSON("booking.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".booking").append(cntHtml);

		ctrlNum();
		Continue();
	});
	
}
function Continue(){
	$(".continue-button").click(function(){
		num++;
		console.log(num);
		/*if(num == 0){
			$(".cnt-num").css("font-size","20px");
			$(".cnt-num-first").css("font-size","30px");
			num++;
		}
		console.log(num);
		if(num == 1){
			$(".cnt-num").css("font-size","20px");
			$(".cnt-num-second").css("font-size","30px");
			num++;
		}
		console.log(num);*/

	
	ctrlNum();
});
}

function ctrlNum(){
	console.log(num);
	if(num == 1){
			$(".cnt-num-first").siblings().css("font-size","20px");
			$(".cnt-num-first").css("font-size","30px");
		}
	if(num == 2){
			$(".cnt-num-second").siblings().css("font-size","20px");
			$(".cnt-num-second").css("font-size","30px");
		}
	if(num == 3){
			$(".cnt-num-third").siblings().css("font-size","20px");
			$(".cnt-num-third").css("font-size","30px");
		}
	if(num == 4){
			$(".cnt-num-fourth").siblings().css("font-size","20px");
			$(".cnt-num-fourth").css("font-size","30px");
		}
    
}