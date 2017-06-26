/**
 * Created by shadowlay on 2017/6/26.
 */
$ (document).ready(function() {
    $.getJSON("../json/therapists.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".therapists").append(betHtml);
    });
});
// $.domReady(function () {
//     $('p').hyphenate('en-us');
// });
// var Hypher = require('hypher'),
//     english = require('hyphenation.en-us'),
//     h = new Hypher(english);
//
// // returns ['hy', 'phen', 'ation']
// h.hyphenate('hyphenation');