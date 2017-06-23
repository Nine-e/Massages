/*$(initPage);

function initPage(){

	$.getJSON("index.json",function(data){

		menuData = data.menu;
		var menuHtml = $.templates("#menuTmpl").render(menuData)
		$(".massages").append(menuHtml);

		headData = data.head;
		var headHtml = $.templates("#headTmpl").render(headData)
		$(".massages").append(headHtml);

		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".massages").append(footHtml);

        showMenu();
        hideMenu();

	}); 
}
*/
function showMenu(){
    $('#showMenu').click(function() {
	    $(".menu").show();
	    $('.massagesHide').show();
	    $("body").css("overflow-y","hidden");
	});
}

function hideMenu(){
	$('#hideMenu').click(function() {
	    $(".menu").hide();
	    $('.massagesHide').hide();
	    $("body").css("overflow-y","scroll");
	});
}