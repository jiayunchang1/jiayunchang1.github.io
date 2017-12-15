/**
 * Created by lenovo on 17/12/5 005.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',

    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

//音频标签
var mp3 = document.querySelector(".mp");

//音乐按钮
var btn = document.querySelector(".btn");


btn.onclick = function () {
    if (mp3.paused) {
        //开始旋转
        btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
}