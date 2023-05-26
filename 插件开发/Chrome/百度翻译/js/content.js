//创建弹框
function popframe(msg) {
    const page = $('<div id="page"></div>')
    const h3 = $(`<h3 id="_h3">${msg}</h3>`)
    page.append(h3)
    $('body').append(page)
}

//这个是负责接收消息
chrome.runtime.onMessage.addListener(function(request, sender, response) {
    if (request.todo == "translate") {
        let res = request.result;
        popframe(res);
    }
})