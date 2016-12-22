$(function(){
    var html=document.documentElement;
    var hw=html.getBoundingClientRect().width;
    html.style.fontSize=hw/7.5+'px';

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
            $("#roomList .swiper-slide").each(function(i){
                $(this).html('<img src='+rDate["imgSrc"][i]+'/>')
            });
            var roomMain=$(".room-main");
            roomMain.css("height", "7.4rem")
            roomMain.find("h4").html(rDate["title"]);
            roomMain.find("p").html(rDate["p"]);
            roomMain.find("h5").each(function(i){
                $(this).html('<i><img src='+rDate["h5Img"]+'></i>'+rDate["h5"][i]);
        });
            $(".room-main>h5:eq(7)").find("i").addClass("last2");
            $(".room-main>h5:last").find("i").addClass("last1");
            roomMain.append("<a href="+rDate["roomInnerUrl"]+">立即预定</a>")
        },
        error:function(xhr){
            console.log("没有GET到数据")
        }
    });


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30
    });
});
