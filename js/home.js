$(initPage);

function initPage(){
	$.getJSON("../json/home.json", function(data) {
        homeData = data.home;
        var homeHtml = $.templates("#homeTmpl").render(homeData);
        $(".index").append(homeHtml);

        faqData = data.faq;
        var faqHtml = $.templates("#faqTmpl").render(faqData);
        $(".index").append(faqHtml);

        contactData = data.contact;
        var contactHtml = $.templates("#contactTmpl").render(contactData);
        $(".index").append(contactHtml);

        /*faqMobile();*/
    });
    load();
    

}

function load()
{  
	/*$.getJSON("../json/home.json", function(data) {
        homeData = data.home;
        var homeHtml = $.templates("#homeTmpl").render(homeData);
        $(".index").append(homeHtml);

        faqData = data.faq;
        var faqHtml = $.templates("#faqTmpl").render(faqData);
        $(".index").append(faqHtml);

        contactData = data.contact;
        var contactHtml = $.templates("#contactTmpl").render(contactData);
        $(".index").append(contactHtml);*/

        if($(window).height()>=$(document.body).outerHeight())
		{
		   $('.commonfoot').css('position', 'absolute');
		   $('.commonfoot').css('width', '100%');
		   $('.commonfoot').css('bottom','0');
		}else
		{
		   $('.commonfoot').css('position', 'relative');
		} 
		/*});*/
	/*window.onresize = function(){
        var home = document.getElementById("home");
        home.style["z-index"] = 1;
    }*/
}
/*function faqMobile() {
	$('.answer').show();
	if($(window).width()<=750 ){
		$('.answer').hide();
		console.log("1");
	}
	console.log("2");
}*/
/*&& (window.orientation==180||window.orientation==0)*/