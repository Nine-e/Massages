// $ (document).ready(function() {
//     $.getJSON("../json/signup.json", function(data) {
//         betData = data.bet;
//         var betHtml = $.templates("#betTmpl").render(betData);
//         $(".signup").append(betHtml);
//     });
// });

function alertMessage(){
                           layui.use(['layer', 'form'], function(){
                              var layer = layui.layer,form = layui.form();
                              layer.open({
                                type: 1,
                                area: ['300px', '150px'],
                                shadeClose: true, //点击遮罩关闭
                                content: '\<\div style="padding:20px;">账号或者密码错误\<\/div>'
                              });
                              //layer.alert('为了不侵犯叔叔阿姨的肖像权，最后还是决定用一些食物的照片来代替头像')
                            });
};
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
                    if (ans>0) {
                       window.location.href="/signin.html"
                    } else {
                        alertMessage();
                    }
                }

            }
        );
    }else {
        alertMessage();
    }

}
$('body').delegate('.signupbtn','click', ToSignUp);

