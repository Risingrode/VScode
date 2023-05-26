# 第11节：HTML5新增标签

### 一、html5概述

html5是超文本标记语言（html）的第五次重大修改，可以简单的理解为是html的第五个大版本。我们平时所说的html5其实是包含了html5，css3的新特性，以及新增的JavaScript接口。

本节的主要内容是讲解html5中新增加的布局标签和媒体标签。

### 二、html5布局标签

在此前我们学习的内容中，网页布局一直都是使用div作为容器，html5新标准中，为了让容器元素有语义，让网页更具可读性，新增了

* header
* nav
* aside
* article
* section
* footer

我们使用header和nav标签来做一个简单的例子，代码如下所示。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
        }
        header{
            height:300px;
            border:1px solid red;
            width:1000px;
            margin:0 auto;
        }
        nav li {
            list-style: none;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            float: left;
            border: 1px solid blue;
        }

        a {
            text-decoration: none;
            color: #666;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="#">首頁</a>
                </li>
                <li>
                    <a href="#">游戏</a>
                </li>
                <li>
                    <a href="#">视频</a>
                </li>
                <li>
                    <a href="#">动画</a>
                </li>
                <li>
                    <a href="#">音乐</a>
                </li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

通过上面的代码可以看到，header标签和nav标签的作用与之前的div的作用完全相同，只不过标签的名字具有语义化而已。

虽然有了这么多语义化标签，但是对于初学者来说，由于对网页整体把握得不够好，会导致滥用语义化标签的情况，因此本教程中所有的布局元素仍然继续使用div标签。等大家有了一定的技能基础之后，再根据直接开发情况去应用语义化标签吧。

### 三、html5媒体标签

在html之前的版本中，如果我们需要在网页中插入音频或是视频，需要安装额外的插件，但是从html5版本之后，我们就可以直接通过一个标签来实现音频和视频的展示功能。

#### 音频标签

通过audio标签，我们可以直接在在网页中嵌入音乐播放器，audio标签的src属性可以指定音乐文件，代码如下所示：

``` html
<audio src="media/music.mp3"></audio>
```

但是上诉代码并不能直接播放音乐，为了让网页打开的时候同时播放音乐，我们可以为audio标签添加一个autoplay属性，代码如下所示。

``` html
<audio src="media/music.mp3" autoplay></audio>
```

打开上面的网页，我们就可以听到来自源文件media/music.mp3的音乐了，我们又遇到了新的问题，如何对音乐播放器做进一步的设置呢，例如停止音乐，或者设置音量。我们可以为audio标签添加一个controls属性，就可以在网页中看到这个音乐播放器的控制页面了，代码如下所示。

``` html
<audio src="media/music.mp3" autoplay controls></audio>
```

通过audio标签，我们可以很方便地在网页中嵌入音乐播放器，如果掌握了JavaScript，我们还可以利用JavaScript调用audio标签的接口，来实现我们的自定义音乐播放器。

#### 视频标签

掌握了音频标签，再来看视频标签（video）就十分简单了，我们可以在网页中添加video标签来为网页嵌入视频。代码如下所示。

``` html
<video src="media/video.mp4" controls autoplay></video>
```

通过上面的代码我们可以看到，video标签同样可以使用controls属性设置播放器的控制器，通过autoplay属性控制其自动播放。

我们还可以通过样式控制视频播器放尺寸，代码如下所示。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        video{
            width:50%;
        }
    </style>
</head>
<body>
    <video src="media/video.mp4" controls autoplay></video>
</body>
</html>
```

### 四、课后练习

完成晓舟报告视频播放页面的效果图，要求如下：

1. 布局使用html5的语义化标签
2. 打开此网页视频自动播放

最终展示效果[效果地址]()

