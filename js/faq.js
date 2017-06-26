
function load()
{   initPage();
	$.getJSON("../json/faq.json", function(data) {
        faqData = data.faq;
        var faqHtml = $.templates("#faqTmpl").render(faqData);
        $(".FAQ").append(faqHtml);
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
	window.onresize = function(){
        var faq = document.getElementById("faq");
        faq.style["z-index"] = 1;
    }
}
