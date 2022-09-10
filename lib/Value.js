/**
 * 用于提供一些ux js在应用中需要获取的参数
 */

/**
 * 获取当前页面一些值，主要是使得开发不需要去写更多的代码去获取值
 */
class WindowValue{
    GetWidth(){
        //获取页面宽度
        return window.innerWidth;
    }
    GetHeight(){
        //获取页面高
        return window.innerHeight;
    }
    GetWindowURL(){
        //获取当前窗体URL
        return window.location.href;
    }
}

/**
 * 获取一些可以应用的参数
 */
var winValue = new WindowValue();
class ValueAPP{
    GetDouble(){
        //返回窗体的一半
        return winValue.GetWidth/2;
    }
    GetItemCenter(w){
        //得到组件的的中间位置
        /**
         * w参数是用于获取组件的长度
         */
        return winValue.GetWidth/2-w/2;
    }
}