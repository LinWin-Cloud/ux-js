/**
 * 超链接组件
 * 作者：LinWinCloud 
 */
var Link = function(Size,href="",text="",x=0,y=0,w="auto",h="auto",Class="")
{
    /**
     * 参数说明 
     * w: 宽度
     * h: 高度
     * x: x偏离量
     * y: y偏离量
     * href: 超链接地址
     * text: 超链接文本
     * Class: 自定义的样式，默认不启用
     */
    try
    {
        //定义内容
        //创建一个超链接
        var Link = document.createElement('a');
        Link.href = href;
        Link.innerText = text;
        Link.className = Class;
            //定义组件
            Link.style.position="absolute";
            Link.style.left = x + "px";
            Link.style.top = y + "px";
            Link.style.width = w + "px";
            Link.style.height = h + "px";
            Link.style.fontSize = Size+'px';
            Link.style.outline="none";
            return Link;
    }
    catch (e)
    {
        console.log("[ERR]Error: "+e);
    }
}
