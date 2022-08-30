/**
 * 提供一套表格组件
 * 作者: LinWInCloud
 * 前端框架: LinUIJS
 */
var Table = function(w,h,x=0,y=0,border="1",Class="")
{
    /**
     * 参数说明
     * w: 宽
     * h: 高
     * x: x坐标
     * y: y坐标
     * border: 边框宽度
     * Class: 样式类名，默认为false就是使用默认样式
     */
    try
    {
        var Table = document.createElement("table");
        Table.className = Class;
        Table.style.width = w;
        Table.style.height = h;
        Table.style.position = "absolute";
        //判断是否启用class
        
            //默认样式
            Table.style.width = w + "px";
            Table.style.height= h + "px";
            Table.style.left = x + "px";
            Table.style.top = y + "px";
            Table.style.borderWidth = border + "px";
            Table.style.boxShadow = "0px 0px "+border+"px black";
            return Table;
    }
    catch (e)
    {
        console.log("[ERR]JSTable Error: "+e);
    }
}
var TableItem_Y = function TableItem_X(Text,Border="1",Class="false")
{
    /**
     * 只是一个表格的列，主要用于表格的排版，不能直接使用，需要嵌入Table使用
     * 
     */
    var TableItem = document.createElement("tr");
    TableItem.innerHTML = Text;
    if (Class == "false")
    { 
        TableItem.style.border = Border+"px solid black";
        return TableItem;
    }
    else
    {
        TableItem.className = Class;
        return TableItem;
    }
}
function TableItem_X(Text,Width="auto",Border="1",Class="false")
{
    /**
     * 用于表格的行，主要用于表格的排版，不能直接使用，需要嵌入Table来使用
     */
    var TableItem = document.createElement("td");
    TableItem.innerHTML = Text;
    if (Class == "false")
    {
        TableItem.style.border = "solid "+Border+"px black";
        TableItem.style.width = Width +"px";
        return TableItem;
    }
    else
    {
        TableItem.className = Class;
        return TableItem;
    }
}