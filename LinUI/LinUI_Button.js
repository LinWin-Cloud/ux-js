/**
 * Button组件
 * 要简化原本的html代码，可以使用LinUI_Button组件
 * 作者：LinWinCloud
 * 欢迎关注作者：https://gitee.com/LinWinCloud
 */
var Button = function(w,h,Text="",x=0,y=0,Class="",style="false")
{
    /**
     * 参数说明
     * x: 设置X左偏移量
     * y: 设置y上偏移量
     * h: 高
     * w: 宽
     * Class: 自定义的样式类名称
     */
    try
    {
        var ButtonJS = document.createElement('button');
        ButtonJS.className = Class;
        //使用默认类型
        ButtonJS.style.position = "absolute";
        ButtonJS.style.width = w + "px"; 
        ButtonJS.style.height = h + "px"; 
        ButtonJS.style.left = x + "px";
        ButtonJS.style.top = y + "px";
        //设置文字
        ButtonJS.innerHTML = Text;
        //是否启动style
        if (style == "false") 
        {
            //不启动style
            ButtonJS.style.backgroundColor = "white";
            ButtonJS.style.color = "black";
            ButtonJS.style.fontSize = "16px";
            ButtonJS.style.fontFamily = "微软雅黑";
            ButtonJS.style.textAlign = "center";
            ButtonJS.style.border = "black 1px solid";
            //设置状态
            ButtonJS.onmouseover = function()
            {
                ButtonJS.style.backgroundColor = "rgb(220, 255, 220)";
                ButtonJS.style.color = "black";
            }
            ButtonJS.onmouseout = function()
            {
                ButtonJS.style.backgroundColor = "white";
                ButtonJS.style.color = "black";
            }
            return ButtonJS;
        }
        else
        {
            if (style == "black_theme")
            {
                //黑色主题
                ButtonJS.style.backgroundColor = "black";
                ButtonJS.style.color = "black";
                ButtonJS.style.fontSize = "16px";
                ButtonJS.style.fontFamily = "微软雅黑";
                ButtonJS.style.textAlign = "center";
                ButtonJS.style.border = "black 1px solid";
                //设置状态
        ButtonJS.onmouseover = function()
        {
            ButtonJS.style.backgroundColor = "gray";
            ButtonJS.style.color = "black";
        }
        ButtonJS.onmouseout = function()
        {
            ButtonJS.style.backgroundColor = "black";
            ButtonJS.style.color = "color";
        }
                return ButtonJS;
            }
            else if (style == "blue_theme")
            {
                //蓝色主题
                ButtonJS.style.backgroundColor = "rgb(0, 174, 255)";
                ButtonJS.style.border='none'
                ButtonJS.style.color = "white";
                        //设置状态
        ButtonJS.onmouseover = function()
        {
            ButtonJS.style.backgroundColor = "white";
            ButtonJS.style.color = "black";
            ButtonJS.style.boxShadow = "rgb(0, 174, 255) 0px 0px 10px";
        }
        ButtonJS.onmouseout = function()
        {
            ButtonJS.style.backgroundColor = "rgb(0, 174, 255)";
            ButtonJS.style.color = "white";
            ButtonJS.style.boxShadow = "rgb(0,0,0,0) 0px 0px 10px";
        }
                return ButtonJS;
            }
            else
            {
                ButtonJS.style.backgroundColor = "rgb(0,0,0,0)";
                ButtonJS.style.color = "black";
                ButtonJS.style.fontSize = "16px";
                ButtonJS.style.fontFamily = "微软雅黑";
                ButtonJS.style.textAlign = "center";
                ButtonJS.style.border = "black 1px solid";
                        //设置状态
        ButtonJS.onmouseover = function()
        {
            ButtonJS.style.backgroundColor = "gray";
            ButtonJS.style.color = "black";
        }
        ButtonJS.onmouseout = function()
        {
            ButtonJS.style.backgroundColor = "rgb(0,0,0,0)";
            ButtonJS.style.color = "black";
        }
                return ButtonJS;
            }
        }
    }
    catch (e)
    {
        console.log("[ERR]Error: "+e)
    }
}