UX-js
介绍
适用于优信小程序开发的JavaScript库（移植到web端也没有问题）部分的代码
在web端无法运行（因为是专门为优信小程序设计的），不过基本上所有的代码都
是可以稳定的运行。ux-js使用内置编写的API和LinUI-js框架编写，方便实用，
网页描述可以使用JavaScript完成。

引入ux-js库
    <!--此处为HTML注释，ux-js只能运行于HTML文件内-->
    <!--必须将ux-js目录于页面目录放置于同一个目录-->

    <script src='./ux-js/uxjs.min.js'></script>
运行ux-js库
    <script>
        window.onload = function(){
            /* 使用window.onload可以等待所有的JavaScript加载完成 */

            //新建一个按钮对象
            //这里是部分参数，还可以根据实际确定风格和样式

            var button = new Button(100,30,"文字",200,100); 

            //在body中放置这个对象
            /* 同理来说 appendChild也可以用在其他的元素上使用 */

            document.body.appendChild(button);

            /* 添加标题栏 */
            /* 代码的参数: UX_Top(Title,height=50,FontColor="black",BGColor="white") */

            UX_Top("优信小程序");
        }
    </script>
使用帮助
参考每个文件的注释，注释大部分采用中文，写的很丰富。

## 版本发布、更新
1. v1.0.0 2022.9.1发布
2. v1.0.1 

优信小程序开发架构（同样可以应用于web端）
【！】注意：小程序虽然采用html和JavaScript以及css，但是HTML中不兼容任何套嵌页面。

    软件目录
    |-- UXApp目录
        |-- ux-js (优信小程序库目录)
        |-- HTML页面 （全部放在根目录，否则无法导入JavaScript）
        |-- js （允许引用其他js文件）
        |-- css （允许引用其他css文件）

开发团队/组织
优信团队、萤火科技、联沃云团队
