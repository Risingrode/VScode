var menuItem = {
    "id": "bdtranslate",
    "title": "我爱翻译",
    "contexts": ["selection"]
}
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == 'bdtranslate' && clickData.selectionText) {
        var key = '3S24ZM51nfc4MieYOmLJ';
        var appid = '20220829001323164';
        var salt = (new Date).getTime();
        var query = clickData.selectionText;
        var from = 'zh';
        var to = 'en';
        var str1 = appid + query + salt + key;
        var sign = MD5(str1);
        var url = 'http://api.fanyi.baidu.com/api/trans/vip/translate';
        url += "?q=" + query;
        url += "&appid=" + appid;
        url += "&salt=" + salt;
        url += "&from=" + from;
        url += "&to=" + to;
        url += "&sign=" + sign;
        fetch(url)
            .then(reponse => reponse.text())
            .then(text => JSON.parse(text))
            .then(translateRsult => {
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, { todo: "translate", result: translateRsult.trans_result[0].dst })
                })
            })
    }
})