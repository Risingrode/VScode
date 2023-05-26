$(function() {

    chrome.storage.sync.get('total', function(budget) {
        $('#total').text(budget.total);
    });

    $('#add').click(function() {
        //1.从浏览器中获取存储金额
        chrome.storage.sync.get('total', function(budget) {
            var totalAmount = 0;
            if (budget.total) {
                totalAmount = parseFloat(budget.total);
            }
            //2.把本次金额加到总金额并存储   
            var amount = $('#amount').val();
            if (amount) {
                totalAmount += parseFloat(amount);
                chrome.storage.sync.set({ 'total': totalAmount });
            }
            //3.更新显示ui
            $('#total').text(totalAmount);
            $('#amount').val('');

        })
    });

})