function load()
{ 
    /*initPage();*/
	$.getJSON("../json/styles.json", function(data) {
        stylesData = data.styles;
        var stylesHtml = $.templates("#stylesTmpl").render(stylesData);
        $(".style").append(stylesHtml);
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
