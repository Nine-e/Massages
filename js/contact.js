/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-26 21:21:37
 * @version $Id$
 */
$(initPage);

function initPage(){

	$.getJSON("../json/common.json",function(data){

		menuData = data.menu;
		var menuHtml = $.templates("#menuTmpl").render(menuData)
		$(".contact").append(menuHtml);

		headData = data.head;
		var headHtml = $.templates("#headTmpl").render(headData)
		$(".contact").append(headHtml);

        showMenu();
        hideMenu();

	}); 

	$.getJSON("../json/contact.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".contact").append(cntHtml);

	});

	$.getJSON("../json/common.json",function(data){

		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".contact").append(footHtml);

	});


}
