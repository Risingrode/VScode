document.onmouseup = function() {
    document.onmousemove = null
    document.onmouseup = null
}

//js间的消息通讯
// 接收消息：chrome.runtime.onMessage.addListener
// 发送消息：chrome.runtime.sendMessage
//contentJs/index.js
const but2 = $('<button id="cj_but2">向background发送消息</button>')
    // 添加一个 button 按钮
page.append(but2)
$('body').append(page)
    // 点击事件
$('#cj_but2').click(function(e) {
        // 点击按钮发送消息
        chrome.runtime.sendMessage({
            info: "我是 content.js, 我在发送消息"
        }, res => {
            console.log('我是 content.js ,我收到消息：', res)
        })
    })
    // 接收消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse)
    sendResponse('我收到了你的消息！');
});

// index.js
const background = chrome.extension.getBackgroundPage();
console.log(background)
plugin_search_but.onclick = function() {
    // alert('plugin_search_inp的值为：' + plugin_search_inp.value.trim())
    background.backFun('这个是参数1', '这个是参数2')
}

/*右上角弹出框和content_scripts之间的通信
右上角弹出框：chrome.tabs.connect，链接content_scripts的脚本通信
content_scripts：chrome.runtime.onConnect*/
// `contentJs/index.js`
chrome.runtime.onConnect.addListener((res) => {
    console.log('contentjs中的 chrome.runtime.onConnect:', res)
    if (res.name === 'myConnect') {
        res.onMessage.addListener(mess => {
            console.log('contentjs中的 res.onMessage.addListener:', mess)
            res.postMessage('哈哈哈,我是contentjs')
        })
    }
})