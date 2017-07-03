
function load()
{   
	$.getJSON("../json/signin.json", function(data) {
        betData = data.bet;
        var betHtml = $.templates("#betTmpl").render(betData);
        $(".signin").append(betHtml);
    });
}
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
						swal({
                    title:"ERROR",
                    text:"Not exsit",
                    type:'error',
                    confirmButtonColor:"#64D2A3"
                    });

                    }
                }

            }
        );
    }

}
$('body').delegate('.signipbtn','click', ToSignUp);