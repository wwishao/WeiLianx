$(function () {

    setTimeout(() => {
        $(".Mytext").css("border-right", "0");
    }, 2500);

    $(".next").click(function (e) {
    $("#nav_about")[0].click()
    });

    // 设置导航的状态
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $(".about")[0].offsetTop - 5) {
        // $(".bg ").css("background","#fff");
            $(".nav").addClass("sticky");
        } else if ($(this).scrollTop() <= $(".about")[0].offsetTop) {
        // $(".bg ").css("background","url(../images/bg2.png)  no-repeat").css("background-size","cover");

            $(".nav").removeClass("sticky");
        }
    });


    // 设置span的过渡
    $(".for_me span").mouseover(function () {
        $(this).css("transition", "all .4s");
    });



    // 页面的动画
    window.onload = function () {
        ScrollReveal().reveal('.dh', {
            reset: true, // 滚动鼠标时，动画开关
            origin: 'top', // 动画开始的方向
            duration: 2000, // 动画持续时间
            delay: 0, // 延迟
            distance: '100px',
            rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
            opacity: 0, // 初始透明度
            scale: 0.5, //缩放
            easing: 'cubic-bezier(0.6, 0.2, 0.2, 1)', // 缓动'ease', 'ease-in-out'，'linear'...
            // 回调函数

        });
        ScrollReveal().reveal('.dd', {
            reset: true, // 滚动鼠标时，动画开关
            origin: 'bottom', // 动画开始的方向
            duration: 2000, // 动画持续时间
            delay: 0, // 延迟
            distance: '100px',
            rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
            opacity: 0, // 初始透明度
            scale: 0, //缩放
            easing: 'cubic-bezier(0.6, 0.2, 0.2, 1)', // 缓动'ease', 'ease-in-out'，'linear'...
            // 回调函数

        });

    }

$(".card2").hover(function () {
        // over
        $(".card").css("transform","scale(0.9)",).css("left","-10%");
    }, function () {
        // out
        $(".card").css("transform","scale(1.2)").css("left","-20%");
    }
);
   
// menuBox的点击
$(".menuBox").click(function (e) { 
    e.preventDefault();
    $(".menu_nav").css("right",0);
    $(".mask").addClass("show");
});

// menu_nav_Btn点击
$("#menu_nav_Btn").click(function (e) { 
    e.preventDefault();
    $(".menu_nav").css("right","-70vw");
    $(".mask").removeClass("show");
});
// show点击
$(".mask").click(function (e) { 
    e.preventDefault();
    $("#menu_nav_Btn")[0].click()
});




})