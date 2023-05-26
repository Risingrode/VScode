const plugin_search_but = document.getElementById("plugin_search_but");
const plugin_search_inp = document.getElementById("plugin_search_inp");

// plugin_search_but.onclick = function() {
//     alert('plugin_search_inp的值是:' + plugin_search_inp.value)
// }
// index.js
plugin_search_but.onclick = function() {
    // alert('plugin_search_inp的值为：' + plugin_search_inp.value.trim())
    // background.backFun('这个是参数1', '这个是参数2')
    mess()
}

async function mess() {
    const tabId = await getCurrentTabId()
    const connect = chrome.tabs.connect(tabId, { name: 'myConnect' });
    console.log(connect)
    connect.postMessage('这里是弹出框页面，你是谁？')
    connect.onMessage.addListener((mess) => {
        console.log(mess)
    })
}

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