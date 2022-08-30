/**
 * Lable组件
 * 用于显示文字
 * 作者: LinWinCloud
 */
var Lable = function(w,h,Text,x=0,y=0,Class="")
{   
    /**
     * 参数说明
     * x: 设置X左偏移量
     * y: 设置y上偏移量
     * h: 高
     * w: 宽
     * Class: 自定义的样式类名称 
     */
    var LableJS = document.createElement('p');
    //设置文字
    LableJS.innerHTML = Text;
        //使用默认类型
        LableJS.style.position = "absolute";
        LableJS.style.width = w + "px"; 
        LableJS.style.height = h + "px"; 
        LableJS.style.left = x + "px";
        LableJS.style.top = y + "px";
        LableJS.style.backgroundColor = "rgb(0,0,0,0)";
        LableJS.style.color = "black";
        LableJS.style.fontSize = "20px";
        LableJS.style.fontFamily = "微软雅黑";
        LableJS.style.textAlign = "center";
        LableJS.className = Class;
        return LableJS;
}
