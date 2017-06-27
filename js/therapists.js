// /**
//  * Created by shadowlay on 2017/6/26.
//  */
// $ (document).ready(function() {
//     $.getJSON("../json/therapists.json", function(data) {
//         betData = data.bet;
//         var betHtml = $.templates("#betTmpl").render(betData);
//         $(".therapists").append(betHtml);
//     });
// });

function load()
{   initPage();
    $.getJSON("../json/therapists.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".therapists").append(betHtml);
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
jQuery(function ($) {
    $('message').hyphenate('en-us');
});
