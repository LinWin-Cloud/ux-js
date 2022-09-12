/**
 * 文本框组件
 * 作者：优信团队
 */

var TextBox = function(w=300,h=200,x=0,y=0,Value="")
{
    /**
     * 参数说明
     * w: 宽度
     * h: 高度
     * x: x轴偏移量
     * y: y偏移量
     * Value: 文本框内默认的值
     */
    var TextBox = document.createElement("textarea");
    TextBox.style.width = w + 'px';
    TextBox.style.height = h + 'px';
    TextBox.style.position = "absolute";
    TextBox.style.left = x + 'px';
    TextBox.style.top = y + "px";
    TextBox.innerHTML = Value;
    TextBox.style.boxShadow = "0px 0px 10px black";
    
    TextBox.onmousedown = function()
    {
        //TextBox.style.border = "2px solid black"
        TextBox.style.boxShadow = "0px 0px 10px blue"
    }
    TextBox.onmouseup = function()
    {
        TextBox.style.boxShadow = "0px 0px 10px black";
    }

    return TextBox;
}