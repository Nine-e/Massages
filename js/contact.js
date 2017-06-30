function load() 
{ 

	$.getJSON("../json/contact.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".contact").append(cntHtml);

		if($(window).height()>=$(document.body).outerHeight())
		{
		   $('.commonfoot').css('position', 'absolute');
		   $('.commonfoot').css('width', '100%');
		   $('.commonfoot').css('bottom','0');
		}else
		{
		   $('.commonfoot').css('position', 'relative');
		} 

	});
}
