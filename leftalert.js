/**
 * 侧边提示组件
 */

function leftalert(text="",Time=2000)
{
    /**
     * text: 需要显示的文字
     * Time: 显示的时间,毫秒
     */
    var leftalert = document.createElement("div");
    leftalert.style.position = "absolute";
    leftalert.style.top = window.innerHeight - 100 + 'px';
    leftalert.style.left = window.innerWidth - 250 + 'px';
    leftalert.style.boxShadow = " 0px 0px 10px black";
    leftalert.style.width = "240px";
    leftalert.style.height = "90px";
    leftalert.style.borderRadius = "10px";

    var p = document.createElement("p");
    p.innerHTML = text;
    p.style.position = "absolute";
    p.style.top = "5px";
    p.style.left = "10px";
    p.style.width = "220px";

    var close = document.createElement("button");
    close.style.width = "30px";
    close.style.height = "30px";
    close.style.border = "none";
    close.style.float = "right";
    close.style.backgroundColor = "red";
    close.style.borderBottomLeftRadius = "10px"
    close.style.borderTopRightRadius = "10px";
    close.style.color = "white";
    close.innerHTML = "X";

    close.onclick = function()
    {
        document.body.removeChild(leftalert);
    }

    leftalert.appendChild(p);
    leftalert.appendChild(close);
    document.body.appendChild(leftalert);
    setTimeout(() => {
        document.body.removeChild(leftalert);
    }, Time);
}