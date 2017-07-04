$.getJSON("../json/commonhead.json",function(data){

        menuData = data.menu;
        var menuHtml = $.templates("#menuTmpl").render(menuData);
        $(".commonhead").append(menuHtml);

        headData = data.head;
        var headHtml = $.templates("#headTmpl").render(headData);
        $(".commonhead").append(headHtml);
        Tocheck();
        showMenu();
        hideMenu();
       /* addMenuLink();*/
       $('.sign-in a').dblclick(function(event) {
           /* Act on the event */
           var sss=1;
           var str=$('.sign-in a').html();
           sss=str.search('@')
           if(sss>=0){
           swal({
                      title: 'Are you sure?',
                      text: "I don't want to see this website anymore!",
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#64D2A3',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, sign out!'
           });
           $('.confirm').click(function(e){
           $.ajax({
               url: 'http://localhost:8080/phpbin/logout.php?id='+7,
               success:function(result)
               {

                     $('.sign-in a').html("SignIn");
                     $(".sign-in a").attr('href','signin.html');
               }
           });
          });}});
   
});
function Tocheck()
{
    $.ajax(
            {
                type: "GET", //提交方式  
                url: "http://localhost:8080/phpbin/test.php", //路径  
                success: function(result) {
                 //返回数据根据结果进行相应的处理 
                    var sss=result;
                    var t=sss.search('@')
                    $(".sign-in a").html(result);
                    if(t>0)
                    {
                        $(".sign-in a").attr('href','#');
                    }
                }
            }
        );
}
function showMenu(){
    $('#showMenu').click(function() {
        $(".menu").show();
        $('.massagesHide').show();
        $("body").css("overflow-y","hidden");
    });
}

function hideMenu(){
    $('#hideMenu').click(function() {
        $(".menu").hide();
        $('.massagesHide').hide();
        $("body").css("overflow-y","scroll");
    });
}

/*function addMenuLink(){
    $(".menu-bar a:eq(0)").attr("href","../index.html");
    $(".menu-bar a:eq(1)").attr("href","booking.html");
    $(".menu-bar a:eq(2)").attr("href","therapists.html");
    $(".menu-bar a:eq(3)").attr("href","styles.html");
    $(".menu-bar a:eq(4)").attr("href","price.html");
    $(".menu-bar a:eq(5)").attr("href","faq.html");
    $(".menu-bar a:eq(6)").attr("href","contact.html");
    $(".menu-bar a:eq(7)").attr("href","signin.html");
}*/