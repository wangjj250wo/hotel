/**
 * Created by hxsd on 2016/12/14.
 */
window.onload=function(){
  /*  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';*/
    var html=document.documentElement;
    var hW=html.getBoundingClientRect().width;
    html.style.fontSize=hW/7.5+'px';
    //有页面导航侧滑函数*************************************************
        var toggleMenu = function() {
            swiper.slideNext();
            swiper.activeIndex =1;
        };
        var menuButton = document.getElementsByClassName('menu-button')[0];
        var swiper = new Swiper('.obb.swiper-container', {
            onInit:function(){
                menuButton.addEventListener('click', toggleMenu, false);
            },
            slidesPerView: 'auto',
            onSlideChangeEnd: function(slider) {
                if (slider.activeIndex == 1)
                    menuButton.removeEventListener('click', toggleMenu, false);
                else
                    menuButton.addEventListener('click', toggleMenu, false);
            },
            slideToClickedSlide: true
        })
};
