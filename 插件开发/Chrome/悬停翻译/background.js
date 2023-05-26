// setInterval(() => {
//     alert('长得帅')
// }, 5000)

$.ajax({
    url: "https://www.douban.com/j/search",
    type: "GET",
    data: {
        q: '电影',
        start: 10,
        cat: 1002,
    },
    success: function(res) {
        console.log(res)
    },
    error: function(e) {
        console.log(e.responseText)
    }
})

/*只要当我点击插件的时候，才会执行插件的某些操作，
不点击的话不会执行，但是某些需求是，不点击的时候也要执行我插件的某些操作*/
//background.js
//接收消息
chrome.runtime.onMessage.addListener(async(req, sender, sendResponse) => {
        console.log('我是background,我接收了来自 content.js的消息:', req.info)
        sendResponse('哈哈哈')
        const tabId = await getCurrentTabId()
            // 在背景页面发送消息，需要当前 tabID
        chrome.tabs.sendMessage(tabId, '我是background,我在发送消息', function(res) {
            console.log('background:', res)
        });
    })
    /**
     * 获取当前 tab ID
     */
function getCurrentTabId() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            resolve(tabs.length ? tabs[0].id : null)
        });
    })
}
/*在background中: chrome.extension.getViews() 获取当前插件内每个运行页面的窗口数组([window, window])
在右上角弹出框中：chrome.extension.getBackgroundPage() 获取背景页面的窗口对象(window)
*/
//background.js
/**
 * 通信函数
 */
function backFun() {
    console.log('arguments:', arguments)
    const allViews = chrome.extension.getViews()
    console.log('chrome.extension.getViews():', allViews)
}