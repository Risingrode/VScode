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
    });
});