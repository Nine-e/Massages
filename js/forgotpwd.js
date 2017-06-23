$ (document).ready(function() {
    $.getJSON("../json/forgotpwd.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".forgotpwd").append(betHtml);
    });
});
