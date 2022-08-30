# UX-js

#### 介绍
适用于优信小程序开发的JavaScript库（移植到web端也没有问题）部分的代码
<br />
在web端无法运行（因为是专门为优信小程序设计的），不过基本上所有的代码都
<br />
是可以稳定的运行。ux-js使用内置编写的API和LinUI-js框架编写，方便实用，
<br />
网页描述可以使用JavaScript完成。

### 引入ux-js库

    <!--此处为HTML注释，ux-js只能运行于HTML文件内-->
    <!--必须将ux-js目录于页面目录放置于同一个目录-->

    <script src='./ux-js/uxjs.min.js'></script>

### 运行ux-js库

    <script>
        setTimeout(function()
        {
            /* 使用延时可以等待ux-js加载完成，如果没有这个操作可能报错 */
            /* 下面是ux-js运行的实例 */

            //新建一个按钮对象
            //这里是部分参数，还可以根据实际确定风格和样式

            var button = new Button(100,30,"文字",200,100); 

            //在body中放置这个对象
            /* 同理来说 appendChild也可以用在其他的元素上使用 */

            document.body.appendChild(button);

            /* 添加标题栏 */
            /* 代码的参数: UX_Top(Title,height=50,FontColor="black",BGColor="white") */

            UX_Top("优信小程序");

        }, 200 );
    </script>

### 使用帮助
参考每个文件的注释，注释大部分采用中文，写的很丰富。

### 开发团队/组织
优信团队、萤火科技、联沃云团队
