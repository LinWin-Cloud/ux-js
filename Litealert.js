/**
 * 前端组件: litealert
 * 用于模仿App的小消息提示（区别于顶部提示栏）
 */

function litealert(Text)
{
    /**
     * Text: 需要显示的文字
     */
    if (Text.length > 40){
        alert("超出允许范围");
        return false
    }
    var litealert = document.createElement("p");
    litealert.innerHTML=Text;
    litealert.style.position="absolute";
    litealert.style.top = window.innerHeight/1.5 + "px";
    litealert.style.backgroundColor = "rgb(0,0,0,0.8)";
    litealert.style.color = "white";
    //litealert.style.boxShadow="0px 0px 10px black";
    litealert.style.borderRadius="5px";
    litealert.style.fontSize="20px";
    var tmp = window.innerWidth/2 - litealert.clientWidth;
    console.log(tmp)
    litealert.style.left = tmp + "px";
    document.body.appendChild(litealert);
    setTimeout(
        function(){
            document.body.removeChild(litealert);
        },500
    )
}