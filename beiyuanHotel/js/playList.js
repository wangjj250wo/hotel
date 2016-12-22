/*//!**
* Created by hxsd on 2016/12/13.
*!/*/
window.onload=function() {
    //初始化字体大小
    var html = document.documentElement;
    var hW = html.getBoundingClientRect().width;
    html.style.fontSize = hW / 7.5 + "px";

    $.ajax({
        type:"GET",dataType:"json",
        url:"json/playList.json",
        success:function(data){
            console.log(data)
            for(var i=0;i<data.length;i++){
                (function(i){
                    var item=
                        '<a href='+data[i].href+' class="office_content" style="background:url('+data[i].images+') ">'+data[i].name+'</a>';
                    $("#office_frist").append(item)
                })(i)
            }
        }
    });

    var toggleMenu = function() {
        swiper.slideNext();
        swiper.activeIndex =1;
    };
    var menuButton = document.getElementsByClassName('menu-button')[0];
    var swiper = new Swiper('.coc_2.swiper-container', {
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
    });
};
