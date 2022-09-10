/**
 * 嵌入外部HTML页面组件
 */

var UX_Page = function(URL,w=window.innerWidth,h=window.innerHeight-50,x=0,y=50)
{
    //嵌入页面
    /**
     * 参数说明
     * URL: 需要嵌入的URL
     * w: 宽度
     * h: 高度
     * x: x偏移量
     * y: y偏移量
     */
    try
    {
        var page = document.createElement("object");
    
        page.style.width = w +'px';
        page.style.height = h + 'px';
        page.style.position = "absolute";
        page.style.left = x + 'px';
        page.style.top = y + 'px';
    
        page.data = URL; //设置URL
    
        return page;
    }
    catch (e)
    {
        //错误
        topalert("UX-JS Error: "+e);
        return null;
    }
}