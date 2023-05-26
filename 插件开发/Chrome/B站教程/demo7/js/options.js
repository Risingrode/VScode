$(function() {
    chrome.storage.sync.get('limit', function(budget) {
        $('#limit').val(budget.limit);
    })
    $('#setLimit').click(function() {
        var limit = $('#limit').val();
        if (limit) {
            chrome.storage.sync.set({ 'limit': limit }, function() {
                close(); //对该页面进行关闭
            })
        }
    });

    $('#restTotal').click(function() {
        chrome.storage.sync.set({ 'total': 0 });
        var notify = {
                //总共有四种type类型(basic,imge,simple,list)
                type: 'basic',
                title: '提示',
                iconUrl: 'img/logo.png',
                message: '您消费的总金额已超出上限'
            }
            //弹窗id   +对象
        chrome.notifications.create("id1", notify);
    });
});