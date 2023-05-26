$(function() {

    chrome.storage.sync.get(['total', 'limit'], function(budget) {
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });

    $('#add').click(function() {
        //1.从浏览器中获取存储金额
        chrome.storage.sync.get(['total', 'limit'], function(budget) {
            var totalAmount = 0;
            if (budget.total) {
                totalAmount = parseFloat(budget.total);
            }
            //2.把本次金额加到总金额并存储   
            var amount = $('#amount').val();
            if (amount) {
                totalAmount += parseFloat(amount);
                chrome.storage.sync.set({ 'total': totalAmount });
                if (totalAmount > parseFloat(budget.limit)) {
                    //写弹窗
                    var notify = {
                            //总共有四种type类型(basic,imge,simple,list)
                            type: 'basic',
                            title: '金额超出限制',
                            iconUrl: 'img/logo.png',
                            message: '您消费的总金额已超出上限'
                        }
                        //弹窗id   +对象
                    chrome.notifications.create("id", notify);
                }
            }
            //3.更新显示ui
            $('#total').text(totalAmount);
            $('#amount').val(''); //起到一个清空作用
        })
    });

})