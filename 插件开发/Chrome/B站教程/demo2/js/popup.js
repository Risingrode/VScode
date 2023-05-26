$(function() {
    $("#input1").keyup(function() {
        $('#message').text('你好' + $('#input1').val());
    })
})