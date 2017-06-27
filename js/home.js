
function load()
{   initPage();
	$.getJSON("../json/home.json", function(data) {
        homeData = data.home;
        var homeHtml = $.templates("#homeTmpl").render(homeData);
        $(".index").append(homeHtml);
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
	/*window.onresize = function(){
        var home = document.getElementById("home");
        home.style["z-index"] = 1;
    }*/
}
