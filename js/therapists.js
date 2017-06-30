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
{ 
    $.getJSON("../json/therapists.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".therapists").append(betHtml);
        jQuery(function ($) {
            $('.message').hyphenate('en-us');
        });
    });
}

