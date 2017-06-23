/**
 * 
 * @authors Nine-e (you@example.org)
 * @date    2017-06-22 09:43:05
 * @version $Id$
 */

$(initPage);

function initPage(){

	$.getJSON("../json/common.json",function(data){

		menuData = data.menu;
		var menuHtml = $.templates("#menuTmpl").render(menuData)
		$(".sucorder").append(menuHtml);

		headData = data.head;
		var headHtml = $.templates("#headTmpl").render(headData)
		$(".sucorder").append(headHtml);

        showMenu();
        hideMenu();

	}); 

	$.getJSON("sucorder.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".sucorder").append(cntHtml);

	});

	$.getJSON("../json/common.json",function(data){

		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".sucorder").append(footHtml);

	});


}