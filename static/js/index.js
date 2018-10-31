$(function(){

    if (sessionStorage.getItem('cookie') == undefined) {
        $("#cookies").animate({bottom: "0px"});
    }

    $("#okay").on('click', function() {
        $("#cookies").animate({bottom: "-171px"});
        sessionStorage.setItem('cookie', '1');
    });

});