/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    $.ajax({
        type:"GET",dataType:"json",
        url:"json/guest.json",
        success:function(data){
            for(var i=0;i<data.length;i++){
                (function(i){
                    var item=
                        '<a href='+data[i].href+' class="office_content" style="background:url('+data[i].imgsrc+') ">'+data[i].name+'</a>';
                    $("#office_frist").append(item)
                })(i)
            }
        }
    })


})

