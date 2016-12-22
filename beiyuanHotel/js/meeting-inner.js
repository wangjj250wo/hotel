/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    //请求json数据
    var url=window.location.search;
    var id=url.substr(url.indexOf("=")+1);
    console.log(id);
    var rDate=null;
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"json/meeting-inner.json",
        async:true,
        success:function(data){
            rDate=data[id];
            console.log(rDate);
            for(var i=0;i<rDate.length;i++){
                (function(i){
                    var item=
                        '<div class="swiper-slide"  style="height: 7.4rem;width: 5.3rem;background: #fff !important;">'+
                        '<div class="top">'+
                        '<h3>'+rDate[i].name+'</h3>'+
                        '<p class="title">面积：'+rDate[i].area+'</p>'+
                        '<p class="title">'+rDate[i].spec+'</p>'+
                        '<p class="content" style="margin-top: 0.12rem">'+rDate[i].one+'</p>'+
                        '<p class="content">'+rDate[i].two+'</p>'+
                        '<p class="content">'+rDate[i].three+'</p>'+
                        '</div>'+
                        '<div class="bot">'+
                        '<img src='+rDate[i].imgsrc+'>'+
                        '<div class="circle"></div>'+
                        '</div>'+
                        '</div>';
                    $("#swiperthree").append(item)
                })(i)
            }

            var swiperV = new Swiper('.swiper-container-v', {
                effect : 'coverflow',
                slidesPerView: 1.35,
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                coverflow:{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows : true
                }
            })

        },
        error:function(xhr){
            console.log("没有GET到数据")
        }
    });
});
