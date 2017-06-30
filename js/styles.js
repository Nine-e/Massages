/**
 * Created by shadowlay on 2017/6/29.
 */

if($(window).height()>=$(document.body).outerHeight())
{
    $('.commonfoot').css('position', 'absolute');
    $('.commonfoot').css('width', '100%');
    $('.commonfoot').css('bottom','0');
}else
{
    $('.commonfoot').css('position', 'relative');
}
