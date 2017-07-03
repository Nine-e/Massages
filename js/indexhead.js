$.getJSON("json/commonhead.json",function(data){

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
                     $(".sign-in a").attr('href','html/signin.html');
               }
           })
          });
});});
function Tocheck()
{
    $.ajax(
            {
                type: "GET", //提交方式  
                url: "http://localhost:8080/phpbin/test.php", //路径  
                success: function(result) {
                 //返回数据根据结果进行相应的处理 
                    $(".sign-in a").html(result);
                    $(".sign-in a").attr('href','#');
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
    $(".menu-bar a:eq(0)").attr("href","index.html");
    $(".menu-bar a:eq(1)").attr("href","html/booking.html");
    $(".menu-bar a:eq(2)").attr("href","html/therapists.html");
    $(".menu-bar a:eq(3)").attr("href","html/styles.html");
    $(".menu-bar a:eq(4)").attr("href","html/price.html");
    $(".menu-bar a:eq(5)").attr("href","html/faq.html");
    $(".menu-bar a:eq(6)").attr("href","html/contact.html");
    $(".menu-bar a:eq(7)").attr("href","html/signin.html");
}*/