
function initPage(){
    $.getJSON("../json/commonfoot.json",function(data){
        footData = data.foot;
        var footHtml = $.templates("#footTmpl").render(footData)
        $(".commonfoot").append(footHtml);
   	});  
}
	/* Act on the event */

