/**
 * Created by hxsd on 2016/12/17.
 */
$(function(){
    //酒店办公详情页
    function yuYi(){
        var swiper = new Swiper('.Business.swiper-container', {
            paginationClickable: true,
            direction: 'vertical'
        });
    };
//jQuery*部分**********************利用阿贾克斯请求静态的数据文件,也封装成一个函数避免作用域的问题
    var oSlid=$("#slid_tex");
    //利用阿贾克斯请求静态数据通过遍历循环操作数据
    var url="json/jdXq_y.json";
    $.getJSON(url,function(data){
        //得到所有的数据
        var aRymoud=data.exclude;
        $.each(aRymoud,function(prop,val){
            var swiper_slide='<div class="swiper-slide"><a href='+val.hRef+'>'+
                '<div class="rong_BOX">'+
                '<img src='+val.images+'>'+
                '</div>'+
                '<p>'+val.text+'</p>'+
                '</a></div>';
            $(swiper_slide).appendTo(oSlid);
        });
        var slideStyle=oSlid.find(".swiper-slide");
        slideStyle.css({
            "text-align": "center",
            "background": "#fff",
            "width": "6.24rem",
            "height": "9.3rem"
        });
        yuYi();
    });




});
