/**
 * 
 * @authors Nine-e (you@example.org)
 * @date    2017-06-22 09:43:05
 * @version $Id$
 */

$(initPage);

function initPage(){
	$.getJSON("sucorder.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".sucorder").append(cntHtml);

	});
}