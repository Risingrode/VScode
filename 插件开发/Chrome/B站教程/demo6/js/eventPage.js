//1.创建选项卡
var contextMenu = {
    id: "addAmount",
    title: "添加消费",
    contexts: ["selection"]
}
chrome.contextMenus.create(contextMenu)