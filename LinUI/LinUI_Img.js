/**
 * Img组件
 * 用于显示图像
 */
var ImgView = function(w,h,Image,x=0,y=0,Class="",style="false")
{ 
    /**
     * 参数说明
     * x: 设置X左偏移量
     * y: 设置y上偏移量
     * h: 高
     * w: 宽
     * Class: 自定义的样式类名称
     */
    var ImgView = document.createElement('img');
    ImgView.className = Class;
        //使用默认类型
        ImgView.style.position = "absolute";
        ImgView.style.width = w + "px";
        ImgView.style.height = h + "px";
        ImgView.style.left = x + "px";
        ImgView.style.top = y + "px";
        //设置图像
        ImgView.src = Image;
        //检查是否启用style
        if (style == "false")
        {
            //使用默认style
            ImgView.style.backgroundColor = "rgb(0,0,0,0)";
            ImgView.style.color = "black";
            ImgView.style.fontSize = "20px";
            ImgView.style.fontFamily = "微软雅黑";
            ImgView.style.textAlign = "center";
            return ImgView;
        }
        else
        {
            //启用内部已经定义的样式
            if (style == "Shadows")
            {
                //阴影样式
                ImgView.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
                return ImgView;
            }
            else if (style == "Blur")
            {
                //模糊样式
                ImgView.style.filter = "blur(10px)";
                return ImgView;
            }
            else if (style == "Grayscale")
            {
                //灰度样式
                ImgView.style.filter = "grayscale(100%)";
                return ImgView;
                }
        }
    return ImgView;
}