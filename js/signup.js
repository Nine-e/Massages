$ (document).ready(function() {
    $.getJSON("../json/signup.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".signup").append(betHtml);
    });
});

