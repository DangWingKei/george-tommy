function isMobile() {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var mobile_flag = false;
    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    // var screen_height = window.screen.height;
    //根据屏幕分辨率判断是否是手机
    if (screen_width < 750) {
        mobile_flag = true;
    }
    return mobile_flag;
};
$(function () {
    $('.overlay, .navbar-toggle, #navbar .animate').on('click', function () {
        if ($('#navbar').hasClass('active')) {
            $('#navbar').find('.animate').addClass('animated fadeInLeft')
        } else {
            $('#navbar').find('.animate').removeClass('animated fadeInLeft')
        }
    })
});