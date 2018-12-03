$(function() {

    email = localStorage.getItem('e-mail');
    console.log(email);
    $.getJSON('/API/send_conf_email', {data: email}, function(data) {});

});