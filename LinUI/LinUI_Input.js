/**
 * 输入框组件
 * 作者：LinWinCloud
 */
var Input = function(w,h,x=0,y=0,placeholder="",type="text",value="",Class="")
{
    /**
     * 参数说明
     * w: 宽度
     * h: 高度
     * x: x偏离量
     * y: y偏离量
     * placeholder: 占位提示符
     * Class: 自定义的样式，默认不启用
     */
    try
    {
        //定义内容
        //创建一个输入框
        var Input = document.createElement('input');
        Input.placeholder = placeholder;
        Input.type = type;
        Input.value = value;
        Input.className = Class;
            //定义组件
            Input.style.position="absolute";
            Input.style.left = x + "px";
            Input.style.top = y + "px";
            Input.style.width = w + "px";
            Input.style.height = h + "px";
            Input.style.border = "1px solid #ccc";
            Input.style.borderRadius = "5px";
            Input.style.padding = "5px";
            Input.style.fontSize = "16px";
            Input.style.fontFamily = "微软雅黑";
            Input.style.outline="none";
            Input.style.backgroundColor = "white";
            Input.style.boxShadow = "0px 0px 10px black";
            return Input;
    }
    catch (e)
    {
        console.log("[ERR]Error: "+e);
    }
}