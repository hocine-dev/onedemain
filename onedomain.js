<script type='text/javascript'>
//<![CDATA[
function destory() {
    $('html')['html']('عفواً ، لن يمكنك إستخدام الموقع .. هذا التوقف يحدث تلقائياً بعد العبث بحقوق ملكية التصميم ');
    setTimeout(function () {
        window['location']['assign']('https://khamsat.com/user/ghilass')
    }, 30000)
}
function redirect() {
    $('html')['html']('نأسف ولكن لا تملك رخصة إستخدام هذا القالب تواصل ما صاحب القالب <a href=\https://khamsat.com/user/ghilass?r=1071057\>من هنا</a> للحصول على تفعيل القالب');
    setTimeout(function () {
        window['location']['assign']('https://khamsat.com/user/ghilass?r=1071057')
    }, 2000e3)
}
var Loct = window['location']['hostname']['toLowerCase']();
var Link = window['location']['href']['toLowerCase']();
var Cont = '';
var Cont2 = '';
  Cont += '<a href=\'https://khamsat.com/user/ghilass?r=1071057\' target=\'_blank\'>تصميم وتطوير |ghilass</a>';
if ($('#powered')['length'] !== 0) {
    if (Loct['indexOf']('xfost') != -1) {
        $('#powered')['addClass']('impo')['append'](Cont2)
    } else {
        $('#powered')['addClass']('impo')['append'](Cont)
    };
    $('footer')['addClass']('impo');
    setInterval(function () {
        $('.impo')['each'](function () {
           
        })
    }, 5000)
} else {
    destory()
};
if (Link['indexOf']('post-preview') == -1 && Link['indexOf']('www.blogger') == -1 && Link['indexOf']('b/preview') == -1 && Link['indexOf']('template-editor') == -1 && Loct['indexOf']('marocston.info/') == -1 && Loct['indexOf']('marocston.info/') == -1 && Loct['indexOf']('marocston.info/') == -1) {
    redirect()
}
//]]>
</script>






