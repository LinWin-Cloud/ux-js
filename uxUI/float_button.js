/**
 * 悬浮按钮
 * *********************************
 */

var float_button = function(Text,autoAdd=true)
{
    /**
     * 参说说明
     * autoAdd: 是否自动添加至页面，如果不自动添加，则返回这个 float_button 属性
     * Text: 要添加的文字
     * *****************************************************************
     */
    var float_button = document.createElement('button');
    float_button.style.width = "80px";
    float_button.style.height = "80px";
    float_button.style.display = 'true';

    float_button.style.position = "absolute";
    float_button.style.left = window.innerWidth - 100 + 'px' ;
    float_button.style.top = window.innerHeight - 160 + 'px' ;

    float_button.style.borderRadius = "5px";
    float_button.style.border = "none";
    float_button.style.backgroundColor = "white";
    float_button.style.boxShadow = "0px 0px 5px black";
    float_button.innerHTML = Text;

    window.onresize = function()
    {
        float_button.style.left = window.innerWidth - 100 + 'px' ;
        float_button.style.top = window.innerHeight - 160 + 'px' ;
    }
    float_button.onmousedown = function()
    {
        /**
         * 当按钮按下
         */
        float_button.style.backgroundColor = 'green';
        float_button.style.color = "white";
    }
    float_button.onmouseup = function()
    {
        setTimeout(function() {
            float_button.style.backgroundColor = 'white';
            float_button.style.color = "black";
        }, 50);
    }

    if (autoAdd == true)
    {
        document.body.appendChild(float_button);
        return true;
    }else
    {
        return float_button;
    }
}