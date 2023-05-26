{
"name": "悬浮翻译-plus",
"description": "悬停翻译",
"version": "0.0.1",
"manifest_version": 2,
"icons": {
"16": "icons/icon16.png",
"48": "icons/icon48.png",
"128": "icons/icon128.png"
},
//可以对浏览器当前页面进行控制
"content_scripts": [{
"matches": ["https://www.baidu.com/*"],
"js": ["jquery-2.1.4.min.js", "baidu.js"]
}],
//对浏览器页面进行操作
"browser_action": {
"default_title": "plugin title",
"default_icon": "icons/icon128.png",
"default_popup": "index.html"
},
//对插件背景页进行操作
"background": {
"scripts": [],
"persistent": false
}

}
