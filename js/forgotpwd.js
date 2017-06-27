// $ (document).ready(function() {
//     $.getJSON("../json/forgotpwd.json", function(data) {
//         betData = data.bet;
//         var betHtml = $.templates("#betTmpl").render(betData);
//         $(".forgotpwd").append(betHtml);
//     });
// });
function load()
{   initPage();
    $.getJSON("../json/forgotpwd.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".forgotpwd").append(betHtml);
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