$(function() {

    menu_clicked = false;
    tasker_clicked = false;
    punge_clicked = false;
    mapper_clicked = false;
    rejseserien_clicked = false;

    $(".dropbtn").on('click', function () {
        if (menu_clicked == false) {
            $("#overlay").css({display: "block"});
            $(".dropdown-content").css({display: "block"});
            $(".dropdown-content").animate({right: "0px"});
            menu_clicked = true;
            }
        else {
            $("#overlay").css({display: "none"});
            $(".dropdown-content").animate({right: "-200px"});
            $(".dropdown-content").css({overflow: "no-content"});
            menu_clicked = false;
        }
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

});