var menuItem = {
    "id": "translate",
    "title": "使用谷歌翻译",
    "contexts": ["selection"]
}
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    //clickData.menuItemId:被点击的菜单选项卡的id
    //clickData.selectionText:选中的内容
    if (clickData.menuItemId == 'translate' && clickData.selectionText) {
        //配置createData的参数
        var createData = {
            url: "https://translate.google.cn/?sl=zh-CN&tl=en&text=" + clickData.selectionText + "&op=translate",
            type: "popup",
            top: 5,
            left: 5,
            width: screen.availWidth / 2,
            height: screen.availHeight / 2
        }
        chrome.windows.create(createData);
    }
})