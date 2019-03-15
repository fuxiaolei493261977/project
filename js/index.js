// 顶部导航栏js

// 顶部-左浮动导航
// 鼠标移入，显示navitem
$('.l_nav').find('.navTitle').mouseenter(function(){
    $(this).find('.navItem').fadeIn(300);
});
// 鼠标移出，隐藏navitem
$('.l_nav').find('.navTitle').mouseleave(function(){
    $(this).find('.navItem').fadeOut(300);
    // 初始化所有产品的    navitem   样式----保证每次移入到产品都是第一行“全部产品”显示
    setTimeout( function(){
        // 给第一个li添加样式，其余li清除样式
        $('.navItem .l_aside').find('li').eq(0).addClass('active')
        .siblings().removeClass('active');
        // 给第一个右侧具体产品项目items，添加显示，其余隐藏
        $('.navItem .r_items').find('.items').eq(0).addClass('itemsActive')
        .siblings().removeClass('itemsActive');
    },300);
});

// 产品----navitem----all
// 左侧侧边栏
// 鼠标移入，显示对应的右侧具体产品项目items
$('.navItem .l_aside').find('li').mouseenter(function(){
    // 当前li添加样式，其余li清除样式
    $(this).addClass('active').siblings().removeClass('active');
    // 保存当前li的索引
    var inx = $(this).index();
    // 找到与当前li对应索引位置的右侧具体产品项目items，添加显示，其余隐藏
    $('.navItem .r_items').find('.items').eq(inx).addClass('itemsActive')
    .siblings().removeClass('itemsActive');
});

// 导航栏搜索框点击事件
$('.l_searchBox').click(function(){
    $('.l_searchBox').animate({
        width:185
    },300);
    $('.l_searchText').css('display','block').animate({
        width:185
    },300);
    $('.l_searchText').focus();
});
// 导航栏搜索框失去焦点事件
$('.l_searchText').blur(function(){
    $('.l_searchBox').animate({
        width:40
    },200);
    $('.l_searchText').animate({
        width:40
    },200);
    $('.l_searchText').val('').css('display','none');
});








/* 广告图 */

// 自动轮播
var jsq;
var index = 0;
// 调用函数
move(index);
autoPlay(index);
// 动画
function move(index) {
    $('.banner_img').eq(index).stop().fadeIn().siblings().stop().fadeOut();
    // 对应的背景图移动
    $('.banner_img').eq(index).find('img').animate({
        bottom: 20,
        opacity: 1
    }, 4000, function () {
        $('.banner_img').eq(index).find('img').css({
            'bottom': -30,
            'opacity': 0
        })
    })
    // 对应小长条
    $('.scroll_bar').eq(index).animate({
        width: 40
    }, 4000, 'linear', function () {
        $('.scroll_bar').eq(index).css('width', 0)
    }).parent().siblings().find('.scroll_bar').animate({
        width: 0
    }, 0);
}
// 定时器
function autoPlay(index) {
    jsq = setInterval(function () {
        index++;
        console.log('定时的索引：' + index);
        if (index > $('.banner_img').length - 1) {
            index = 0;
        }
        move(index);
    }, 4000);
}
// 点击小长条div的宽度自增
$('.bannerBtn a').click(function () {
    clearInterval(jsq);
    // 获取当前的索引位置
    index = $(this).index();
    console.log('小长条的索引点击111：' + index)

    clear();
    move(index);
    autoPlay(index);
});
// 清除动画
function clear() {
    $('.scroll_bar').stop(true, true);
}

/* 新闻区域 */

// 鼠标点击 li 的时候添加类名 active
$('.news_nav li').click(function () {
    // 获取当前li索引位置
    var num = $(this).index();
    // 设置对应 div (tab_content_main) 的样式
    $('.tab_content_main').eq(num).css('display', 'block').siblings().css('display', 'none');
    // 设置对应索引位置的 li 的class
    $(this).addClass("active").siblings().removeClass("active");
});

// class 名为tab_content_one的底边框动画 + 鼠标进入事件
$('.tab_content_one').mouseenter(function () {
    // console.log(123)
    $(this).animate({})
});


// 鼠标进入新闻小框
$('.tab_content_one').mouseenter(function () {

    // 背景变化
    $(this).eq(index).animate({
        opacity: 1,
        boxShadow: "0 0 50 20 green"
    }, 800, 'linear')
    .siblings().animate({
        opacity:0.7
    })
    // 底边框进度条动画
    $(this).find('.jindutiao').eq(index).animate({
            width: 373,
            opacity: 1,
        }, 800, 'linear', function () {
            $(this).find('.jindutiao').eq(index).css('width', 0)
        })
        .parent().parent().siblings().find('.jindutiao').animate({
            width: 0,
        });
});
// 鼠标离开
$('.tab_content_one').mouseleave(function () {
    $(this).find('.jindutiao').eq(index).stop(true, true);
    $(this).eq(index).stop(true, true);
});


/* 滚动条 */ 

// 给window注册滚动条事件
$(window).scroll(function () {
    // 获取卷起的距离
    var v = parseInt($(window).scrollTop());
    console.log(v);
    // 判断
    if( v >= 400 ){
        $('.fixedbar #d2').css('opacity',1);
        $('.fixedbar').css('bottom',80); 
    }else{
        $('.fixedbar #d2').css('opacity',0);
        $('.fixedbar').css('bottom',44);
    }
   

})
// 回到顶部
$('.fixedbar #d2').click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});









// 底部js

// 鼠标进入小图标按钮，显示二维码，字体变色
$('.imgBtn').find('img').mouseenter(function(){
    // 保存当前的img小图标下标
    var inx = $(this).index();
    // 显示对应div二维码
    $('.cloudImg').eq(inx).show();
    // 电话号码变色
    $('.telAndOther h3').css('color','#666');
    $('.telAndOther p').css('color','#333');
});
// 鼠标离开小图标按钮，隐藏二维码
$('.imgBtn').find('img').mouseleave(function(){
    // 保存当前的img小图标下标
    var inx = $(this).index();
    // 显示对应div二维码
    $('.cloudImg').eq(inx).hide();
    // 电话号码变色
    $('.telAndOther h3').css('color','#fff');
    $('.telAndOther p').css('color','#a6a7aa');
});

