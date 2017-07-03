// $ (document).ready(function() {
//     $.getJSON("../json/signup.json", function(data) {
//         betData = data.bet;
//         var betHtml = $.templates("#betTmpl").render(betData);
//         $(".signup").append(betHtml);
//     });
// });


function load()
{  
    $.getJSON("../json/signup.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".signup").append(betHtml);
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
function ToSignUp()
{
    var firstname=$('.firstnin').val(),
        lastname=$('.lastnin').val(),
        email=$('.emailin').val(),
        mobile=$('.mobilein').val(),
        password=$('.passwordin').val();
    if(firstname&&lastname&&email&&mobile&&password)
    {
        $.ajax(
            {
                type: "GET", //提交方式  
                url: "http://localhost:8080/phpbin/signup.php?id="+5, //路径  
                data: {
                    "firstname": firstname,
                    "lastname":lastname,
                    "email":email,
                    "mobile":mobile,
                    "password":password
                },
                 //数据，这里使用的是Json格式进行传输  
                success: function(result) { //返回数据根据结果进行相应的处理  
                    if (result) {
                       alert("yeah");
                    } else {
                        alert("No");
                    }
                }

            }
        );
    }

}
$('body').delegate('.signupbtn','click', ToSignUp);

