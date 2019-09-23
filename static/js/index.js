$(function(){

    if (sessionStorage.getItem('cookie') == undefined) {
        $("#cookies").animate({bottom: "0px"});
    }

    $("#okay").on('click', function() {
        $("#cookies").animate({bottom: "-200px"});
        sessionStorage.setItem('cookie', '1');
    });


    $(".info_btn").on('click', function () {
		$(this).parents("div#info_button").parents("div.buy").siblings("div.billede").click();
	});
});