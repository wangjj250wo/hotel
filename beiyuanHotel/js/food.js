/**
 * Created by hxsd on 2016/12/17.
 */
$(function(){
    //初始化字体
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 +'px';

    //请求json数据
    var url=window.location.search;
    var id=url.substr(url.indexOf("=")+1);
    console.log(id);
    var rDate=null;
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"json/food.json",
        async:true,
        success:function(data){
            rDate=data[id];
            $("#foodPic .swiper-slide").each(function(i){
                $(this).html('<img src='+rDate["imgSrc"][i]+'/>')
            });
            $("h3").html(rDate["title"]);
            $("p").each(function(i){
                $(this).html(rDate["p"][i])
            });
            $("p:gt(4)").addClass("wordColor");
            $("p:eq(4)").addClass("foodPlace");
            $("p:eq(5)").addClass("foodTime");
            $(".markBtn").html(rDate["markBtn"]);
        },
        error:function(xhr){
            console.log("没有GET到数据")
        }
    });

    //图片切换
    (function(){
        var swiper = new Swiper('.foodPic.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30
        });

        //立即预定
        $(".markBtn").click(function(){
            $(".callNum").css("display","block")
        })

        //取消
        $(".remove").click(function(){
            $(".callNum").css("display","none")
        })

        //确定
        $(".phone").click(function(){
            $(".callNum").css("display","none")
        })


    })();

})