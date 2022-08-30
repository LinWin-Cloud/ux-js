/**
 * Panel元素用于显示一个面板
 * 可以直接JavaScript控制
 */
var Panel = function(w,h,x=0,y=0,Class="",style="false")
{
    /**
     * 
     * 参数说明
     * x:x坐标
     * y:y坐标
     * w:宽度
     * h:高度
     * style:样式，就是在默认的样式上选择
     * class:用于自定义面板的样式
     * 
     */
    try
    {
        var Panel = document.createElement("div");
        Panel.className = Class;
            Panel.style.position = "absolute";
            Panel.style.width = w + "px"; //设置div元素的宽度
            Panel.style.height = h + "px"; //设置div元素的高度
            Panel.style.left = x + "px"; //设置div元素的left值
            Panel.style.top = y + "px"; //设置div元素的top值
            //使用默认的class
            //判断是否启用style
            if(style == "false")
            {
                //使用默认样式
                Panel.style.backgroundColor = "#ffffff";
                Panel.style.border = "1px solid #000000";
                Panel.style.borderRadius = "5px";
                Panel.style.boxShadow = "0px 0px 5px #000000";
                Panel.style.padding = "0px";
                Panel.style.margin = "0px";
            }
            else
            {
                //使用其他的已经定义好的样式
                if (style == "black_theme")
                {
                    //暗黑主题
                    Panel.style.backgroundColor = "#000000";
                    Panel.style.border = "1px solid #ffffff";
                    Panel.style.borderRadius = "5px";
                    Panel.style.boxShadow = "0px 0px 5px #ffffff";
                    Panel.style.padding = "0px";
                    Panel.style.margin = "0px";
                }
                if (style == "white_theme")
                {
                    //白色主题
                    Panel.style.backgroundColor = "#ffffff";
                    Panel.style.border = "1px solid #000000";
                    Panel.style.borderRadius = "5px";
                    Panel.style.boxShadow = "0px 0px 5px #000000";
                    Panel.style.padding = "0px";
                    Panel.style.margin = "0px";
                }
                if (style == "square_theme")
                {
                    //方形主题
                    Panel.style.backgroundColor = "#ffffff";
                    Panel.style.border = "1px solid #000000";
                    Panel.style.borderRadius = "0px";
                    Panel.style.padding = "0px";
                    Panel.style.margin = "0px";
                }
            }

        return Panel;
    }
    catch (e)
    {
        console.log("[ERR]Error: "+e);
    }   
}