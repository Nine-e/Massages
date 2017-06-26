var data=
    {"data":
    [
		{
			"title":"1 Therapist",
			"item":
			[
				{
					"time":"60",
					"price":"£65"
				},
				{
					"time":"90",
					"price":"£75"
				},
				{
					"time":"120",
					"price":"£95"
				}
			]
		},
		{
			"title":"2 Therapists",
			"item":
			[
				{
					"time":"60",
					"price":"£130"
				},
				{
					"time":"90",
					"price":"£150"
				},
				{
					"time":"120",
					"price":"£190"
				}
			]
		}
	]
    };

var cntHtml = $.templates("#price-inf").render(data);
$(".price").append(cntHtml);

/*$(initpages);

function initpages(){
	var cntHtml = $.templates("#price-inf").render(data);
$(".price").append(cntHtml);
}*/

