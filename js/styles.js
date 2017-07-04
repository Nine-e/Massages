
    /*initPage();*/
	$.getJSON("../json/styles.json", function(data) {
        stylesData = data.styles;
        var stylesHtml = $.templates("#stylesTmpl").render(stylesData);
        $(".style").append(stylesHtml);
	});

