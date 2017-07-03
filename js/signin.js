
function load()
{   
	$.getJSON("../json/signin.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".signin").append(betHtml);
    });
}
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
function ToSignUp()
{
    var email=$('.emailin').val(),
        password=$('.passwordin').val();
    if(email&&password)
    {
        $.ajax(
            {
                type: "GET", //提交方式  
                url: "http://localhost:8080/phpbin/log.php", //路径  
                data: {
                    "email":email,
                    "password":password
                },
                datatype:"string",
                 //数据，这里使用的是Json格式进行传输  
                success: function(result) { //返回数据根据结果进行相应的处理
                    var s=result,l;
                        l=s.length;
                    var ans=s.search(email)
                    if (ans>=0) {
                       //alert("yeah");
                       window.location.href="../index.html"
                    } else {
						alertMessage();
                    }
                }

            }
        );
    }

}
$('body').delegate('.signipbtn','click', ToSignUp);