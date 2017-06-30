
function load()
{  

	$.getJSON("json/home.json", function(data) {
        homeData = data.home;
        var homeHtml = $.templates("#homeTmpl").render(homeData);
        $(".index").append(homeHtml);
        
        bookData = data.book;
        var bookHtml = $.templates("#bookTmpl").render(bookData);
        $(".index").append(bookHtml);

        introduceData = data.introduce;
        var introduceHtml = $.templates("#introduceTmpl").render(introduceData);
        $(".index").append(introduceHtml);

        therapistsData = data.therapists;
        var therapistsHtml = $.templates("#therapistsTmpl").render(therapistsData);
        $(".index").append(therapistsHtml);

        faqData = data.faq;
        var faqHtml = $.templates("#faqTmpl").render(faqData);
        $(".index").append(faqHtml);

        contactData = data.contact;
        var contactHtml = $.templates("#contactTmpl").render(contactData);
        $(".index").append(contactHtml);

        if($(window).height()>=$(document.body).outerHeight())
		{
		   $('.commonfoot').css('position', 'absolute');
		   $('.commonfoot').css('width', '100%');
		   $('.commonfoot').css('bottom','0');
		}else
		{
		   $('.commonfoot').css('position', 'relative');
		}
        
        chooseDate();
        chooseTime();

    });	    
}

/*function faqMobile() {
	$('.answer').show();
	if($(window).width()<=750 ){
		$('.answer').hide();
		console.log("1");
	}
	console.log("2");
}*/
/*&& (window.orientation==180||window.orientation==0)*/

function chooseDate(){
	Flatpickr.l10n.firstDayOfWeek = 1;
	document.getElementById("cla").flatpickr();
	var x=($('.today').index('.flatpickr-day')+1)%7;
	x=x+$('.flatpickr-day1').length;
	x=x%7;
	x--;
	if(x<0)
	{
		x=6;
	}
	$('.flatpickr-weekday').eq(x).css('border-bottom','2px solid rgb(100,210,163)')
}

function chooseTime(){
	$("#di").timepicki();
}