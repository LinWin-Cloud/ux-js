/**
 * 专门用于网页内部显示顶部提示框的组件
 */

function topalert(Text,Time=1000)
{
    //Text: 用于显示要显示的消息
    //Time: 显示的时间
    var topalert = document.createElement("div");
    topalert.style.backgroundColor = "rgb(255,255,205,0.9)";
    topalert.style.boxShadow = "0px 0px 10px black";
    topalert.style.borderRadius = "10px";
    topalert.style.position = "absolute";
    topalert.style.top = '30px';
    topalert.style.left = '5px';
    topalert.style.width = window.innerWidth - 10 + 'px';
    topalert.style.height = "100px";

    var p = document.createElement("p");
    p.innerHTML = Text;
    p.style.position = "absolute";
    p.style.top = "5px";
    p.style.left = "10px";
    p.style.width = topalert.clientWidth - 20 + 'px' ;

    var close = document.createElement("button");
    close.style.border = "none";
    close.innerHTML = "X";
    close.style.color = "white"
    close.style.width = "30px";
    close.style.height = "30px";
    close.style.float = "right";
    close.style.backgroundColor = "red";
    close.style.borderTopRightRadius = "10px";
    close.style.borderBottomLeftRadius = "10px";
    close.onclick = function(){
        document.body.removeChild(topalert);
    }

    topalert.appendChild(close);
    topalert.appendChild(p);
    //放置元素
    document.body.appendChild(topalert);
    //显示时间
    setTimeout(
        function(){
            document.body.removeChild(topalert);
        } , Time
    )
}