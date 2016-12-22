/**
 * Created by hxsd on 2016/12/17.
 */
$(function(){
    var html=document.documentElement;
    var hW=html.getBoundingClientRect().width;
    html.style.fontSize=hW/7.5+'px';
    /*酒店切换图片显示js部分********************************************/
    var psp=null
    var tItonch=$("#titongCh");
    //读取到当前页面的的ID值
     var url=window.location.search;
     var id=url.substr(url.indexOf("=")+1);
    //下面两个变量是属于切换倾斜的五张图判的变量
    var aDiv=$("#rotate_C");
    var number=0;
    //圆盘转圈
    var cHild=document.getElementById("bg");
    var oDiv=cHild.getElementsByClassName("box_yi")[0];
    var myCanvas = document.createElement("canvas");
    myCanvas.setAttribute("width", oDiv.offsetWidth);
    myCanvas.setAttribute("height", oDiv.offsetHeight);
    myCanvas.setAttribute("id", "myCanvas");
    oDiv.appendChild(myCanvas);
    var oCt=myCanvas.getContext('2d');
    //绘制小球
    var num=-40;
    var startX=oDiv.offsetWidth/2;
    var startY=20;
    var r=startX;
    var ballX=0;
    var ballY=20;
    //请求数据
    $.ajax({
        type:"GET",
        url:"json/biaopan.json",
        dataType:"json",
        async:true,
        success:function(data){
            psp=data[id];
         $(psp).each(function(index,element){
            //中间图片切换
             var swiper_slide='<div class="swiper-slide">'+
                 '<img src='+element+'>'+
                 '</div>';
             $(swiper_slide).appendTo(tItonch);
             var oLi='<li><img src='+element+'><div></div></li>';
             $(oLi).appendTo(aDiv);

         });
            //点击切换酒店的两边箭头
            var swiper = new Swiper('.box .swiper-container', {
                nextButton: '.box .swiper-button-next',
                prevButton: '.box .swiper-button-prev',
                paginationType: 'fraction'
            });
            var btn=cHild.getElementsByClassName("poSlut");
            //倾斜图片切换
            var showBox=aDiv.find("div");

            //初始化一出来就可以显示第一张图为高亮的图片函数
            baRod(0,showBox);
            //初始化一出来就可以显示第一张图为高亮的图片函数所对应的圆盘位置
            baLl(num);

            btn[0].onclick=function(){
                num+=20;
                if(num>40){
                    num=40
                };
                baLl(num);
                number++;
                if (number>=5){
                    number=4;
                }
                baRod(number,showBox)
            };
            btn[1].onclick=function(){
                num-=20;
                if(num<-40){
                    num=-40
                };
                baLl(num);
                number--;
                if (number<0)
                    number=0
                baRod(number,showBox)
            };
        },
        error:function(){
            alert("chu'cuo'le")
        }
    });
        function baLl(num){
            oCt.clearRect(0,0,myCanvas.width,myCanvas.height);
            //画一个大圆
            oCt.beginPath();
            oCt.arc(startX,startX+20,startX,0*Math.PI/180,360*Math.PI/180);
            oCt.strokeStyle="#aba49e";
            oCt.lineWidth=5;
            oCt.stroke();
            //再来一个内圆圈
            toDraw();
            /*清楚画布*/
            /*圆运动*/
            ballX=Math.sin(num*Math.PI/180)*r+startX;
            ballY=r-Math.cos(num*Math.PI/180)*r+startY;
            //运动的圆环外面的白边
            oCt.beginPath();
            oCt.fillStyle="#80766d";
            oCt.arc(ballX,ballY,15,0*Math.PI/180,360*Math.PI/180);
            oCt.closePath();
            oCt.fill();
            //运动的圆环内部的黑圈
            oCt.beginPath();
            oCt.fillStyle="#fff";
            oCt.arc(ballX,ballY,10,0*Math.PI/180,360*Math.PI/180);
            oCt.closePath();
            oCt.fill();
            //绘制一根长针
            oCt.save();
            oCt.lineWidth='2';
            oCt.strokeStyle='#fff';
            oCt.beginPath();
            oCt.moveTo(startX,startX+20);
            oCt.arc(startX,startX+20,startX-25,(-90+num)*Math.PI/180,270*Math.PI/180);
            oCt.closePath();
            oCt.stroke();
            oCt.restore();
        };
        //绘制表盘；
        function toDraw(){
            oCt.fillStyle='#6a5e55';
            oCt.beginPath();
            oCt.arc(startX,startX+20,startX-25,0*Math.PI/180,360*Math.PI/180);
            oCt.fill();
            for(var i=0;i<60;i++){
                oCt.beginPath();
                oCt.strokeStyle="#fff";
                oCt.lineWidth=2;
                oCt.moveTo(startX,startX);
                oCt.arc(startX,startX+20,startX-25,i*6*Math.PI/180,(i+1)*6*Math.PI/180);
                oCt.stroke();
            };
            oCt.fillStyle='#6a5e55';
            oCt.beginPath();
            oCt.arc(startX,startX+20,startX-45,0*Math.PI/180,360*Math.PI/180);
            oCt.fill();
        };
        //写一个方法通过传参的方式点击切换倾斜图片
        function baRod(index,aRRobj){
            aRRobj.css("background-color","rgba(0,0,0,.5)");
            aRRobj.eq(index).css("background-color","");
        };
});
