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
        firstname.trim();
        lastname.trim();
        email.trim();
        mobile.trim();
        password.trim();
        var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
        var tt=false;
        if(re.test(email))
        {
            tt=true;
        }
    if(firstname&&lastname&&email&&mobile&&password&&tt)
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
                success: function(result) {
                 //返回数据根据结果进行相应的处理 
                    var ans=result.search(email) 
                    if (ans>=0) {
                       window.location.href="signin.html"
                    } else {
                        swal({
                        title:"WARNING",
                        text:"This account already exists",
                        type:'warning',
                        confirmButtonColor:"#64D2A3"
                         });
                    }
                }

            }
        );
    }else {
       swal({
                title:"ERROR",
                text:"Format error & Empty data",
                type:'error',
                confirmButtonColor:"#64D2A3"
       });

    }

}
$('body').delegate('.signupbtn','click', ToSignUp);

