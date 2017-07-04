function load() 
{ 

	$.getJSON("../json/contact.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".contact").append(cntHtml);
        $(".send-button").mousedown(function(){

            /*layui.use(['layer', 'form'], function(){
                var layer = layui.layer
                    ,form = layui.form();

                layer.open({
                    type: 1,
                    area: ['300px', '150px'],
                    shadeClose: true, //点击遮罩关闭
                    content: '\<\div style="padding:20px;">发送成功！！\<\/div>'
                });
            });*/
            swal({
            	title:"Mail Send!",
            	type:'success',
            	confirmButtonColor:"#64D2A3"
            });
            
            /*重新加载页面*/
            $(".confirm").click(function(event) {
            	$(".mybet").find("input").val("");
            	$(".mybet").find("textarea").val("");
            });
        });

	});

}

