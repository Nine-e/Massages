
function load()
{   
	$.getJSON("../json/signin.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".signin").append(betHtml);
}
