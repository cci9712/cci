var my =document.getElementById("my")
var yy=document.getElementById("yy")

yy.onclick=function(){
if(my.paused){
    my.play();
    yy.src = "/img/R-C.png";
}else{
    my.paused();
    yy.src = "/img/R-C (1).png";
}
}