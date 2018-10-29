$(function(){

    if (localStorage.getItem('cookie') == undefined) {
        $("#cookies").animate({bottom: "0px"});
    }

    $("#okay").on('click', function() {
        $("#cookies").animate({bottom: "-171px"});
        localStorage.setItem('cookie', '1');
    });

});