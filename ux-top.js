/**
 * ux top javascript
 */

function UX_Top(Title,height=50,FontColor="black",BGColor="white")
{
    /**
     * Title is show a title for the Applets,it is a must chose
     * height: you can make a height size for TOP UI.Defualt is 50px
     * FontColor: font's color , defuat is black
     * Color: chose a color for your top UI.Defuslt is white.
     * ICO: you can write a url and ico will show on the page
     */
    if (height < 50)
    {
        //when height value is low 50
        alert("UX_Top: The height value cannot be lower than 50");
        return false;
    }

    var Top = document.createElement("div"); //make new div object
    document.body.appendChild(Top);

    /* set Top's css */
    Top.style.display = "block";
    Top.style.width = "100%";
    Top.style.height = height + 'px';
    Top.style.backgroundColor = BGColor;
    Top.style.color = FontColor;
    Top.style.boxShadow = "0px 0px 5px black"

    /* set Top's title text */
    var TitleText = document.createElement("p");
    Top.appendChild(TitleText);
    TitleText.style.position = "absolute";
    TitleText.style.left = height + 'px'
    TitleText.style.top = "";
    TitleText.innerHTML = Title;

    //back button
    var back = document.createElement("button");
    back.style.width = height + 'px';
    back.style.height = height + 'px';
    back.style.border = "none";
    back.style.backgroundColor = BGColor;
    back.style.color = FontColor; 
    back.innerHTML = "<-";
    back.style.position = "absolute";
    back.style.top = "0px";
    back.style.left = "0px";
    back.style.fontSize="20px"
    back.style.outline = "none";
    back.style.borderRadius = "20px";
    Top.appendChild(back);
    //when button click
    back.onmousedown = function()
    {
        back.style.backgroundColor = "rgb(50, 255, 118)";
        back.style.boxShadow = "0px 0px 20px black";
        back.style.opacity = "0.5";
        back.style.fontSize="30px";
    }
    back.onmouseup = function()
    {
        setTimeout(function(){
            back.style.backgroundColor = BGColor;
            back.style.boxShadow = "0px 0px 0px black"
            back.style.fontSize="20px";
        } , 50)
    }
    back.onclick = function()
    {
        window.history.back();
    }

    return true;
}