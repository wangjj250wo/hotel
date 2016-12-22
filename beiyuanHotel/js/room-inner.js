/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    var html=document.documentElement;
    var hw=html.getBoundingClientRect().width;
    html.style.fontSize=hw/7.5+'px';

    $.ajax({
        type:"GET",dataType:"json",
        url:"json/roominner.json",
        success:function(data){
            for(var i=0;i<data.length;i++){
                (function(i){
                    var pot=
                   '<div class="swiper-slide"><img src='+data[i].img+'/></div>'
                    $('#roominner-banner').append(pot)
                })(i)
            }
            /*var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30
            })*/
        }
    });

    var url=window.location.search;
    var id=url.substr(url.indexOf("=")+1);
    console.log(id);
    var rDate=null;

    $.ajax({
        type:"GET",
        dataType:"json",
        url:"json/room.json",
        async:true,
        success:function(data){
            rDate=data[id];
            $(".room-inner-take").find("h4").html(rDate["title"]);
        },
        error:function(xhr){
            console.log("没有GET到数据")
        }
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
    })

});