/**
 * alert UI
 * Auther: LinWinCloud
 */
var Body = document.body;

function alert(Text="")
{
    /**
     * Text: You want to show text
     */
    //make a new object
    var alertUI = document.createElement("div");
    //get window
    var w = window.innerWidth;
    var h = window.innerHeight;
    //css settings
    alertUI.style.width = "300px";
    alertUI.style.height = "200px";
    alertUI.style.position = "absolute";
    alertUI.style.left = w/2 - 150 + "px";
    alertUI.style.top = h/2 - 100 + "px";
    alertUI.style.backgroundColor = "white";
    alertUI.style.boxShadow = "0px 0px 10px black";
    alertUI.style.borderRadius = "10px";
    //console.log(w)
    //gray areo settings
    var gray = document.createElement("div");
    gray.style.width = "100%";
    gray.style.height = h + 'px';
    gray.style.position = "absolute"
    gray.style.backgroundColor = "rgb(0,0,0,0.5)";
    //set text
    var p = document.createElement("p");
    p.style.left = "20px";
    p.style.top  = "20px";
    p.style.position = "absolute";
    p.innerHTML = Text;
    //ok button
    var ok = document.createElement("button");
    ok.style.left = "220px";
    ok.style.borderRadius = "5px";
    ok.style.top = "150";
    ok.style.position = "absolute";
    ok.style.width = "60px";
    ok.style.height = "30px";
    ok.style.backgroundColor = "white";
    ok.style.border = "none";
    ok.style.boxShadow = "0px 0px 5px black";
    ok.innerHTML = "确定";

    ok.onclick = function()
    {
        Body.removeChild(alertUI);
        Body.removeChild(gray);
    }
    alertUI.appendChild(ok)
    alertUI.appendChild(p);
    Body.appendChild(gray);
    Body.appendChild(alertUI);
}