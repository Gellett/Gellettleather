$(function() {

    menu_clicked = false;
    tasker_clicked = false;
    punge_clicked = false;
    mapper_clicked = false;
    rejseserien_clicked = false;

    if (localStorage.getItem('antal_kurv') == undefined) {
            localStorage.setItem('antal_kurv', '0');
            document.getElementById("vare_antal_header").value = parseInt(localStorage.getItem(("antal_kurv")));
        }
        document.getElementById("vare_antal_header").value = parseInt(localStorage.getItem('antal_kurv'));

    $(".dropbtn").on('click', function () {
            $(".dropdown-content").css({display: "block"});
            $(".dropdown-content").animate({right: "0px"});
            $(".dropdown").css({height: "100vh"});
            $(".dropdown").css({width: "220px"});
            $(".dropdown").animate({right: "0px"});
    });

    $(".dropdown_content_tasker").on('click', function () {
        if (tasker_clicked == false) {
            $(".dropdown_content_2_tasker").css({display: "block"});
            tasker_clicked = true;
        }
        else {
            $(".dropdown_content_2_tasker").css({display: "none"});
            tasker_clicked = false;
        }
    });

    $(".dropdown_content_punge").on('click', function () {
        if (punge_clicked == false) {
            $(".dropdown_content_2_punge").css({display: "block"});
            punge_clicked = true;
            }
        else {
            $(".dropdown_content_2_punge").css({display: "none"});
            punge_clicked = false;
        }
    });

    $(".dropdown_content_mapper").on('click', function () {
        if (mapper_clicked == false) {
            $(".dropdown_content_2_mapper").css({display: "block"});
            mapper_clicked = true;
            }
        else {
            $(".dropdown_content_2_mapper").css({display: "none"});
            mapper_clicked = false;
        }
    });

    $(".dropdown_content_rejseserien").on('click', function () {
        if (rejseserien_clicked == false) {
            $(".dropdown_content_2_rejseserien").css({display: "block"});
            rejseserien_clicked = true;
            }
        else {
            $(".dropdown_content_2_rejseserien").css({display: "none"});
            rejseserien_clicked = false;
        }
    });

    $("#x").on('click', function () {
        $(".dropdown-content").animate({right: "-220px"});
        $(".dropdown").css({height: "50px"});
        $(".dropdown").css({width: "50px"});
        $(".dropdown").animate({right: "-0px"});
    })

});