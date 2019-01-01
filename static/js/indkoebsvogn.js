$(function () {

    rabatboks = false;

    function get_billede(){
        $("#billede_div_" + vare_nr).append(
            $('<img src="'+ billede +'" onclick="image()" class="image" id="'+billede+'" style="max-width: 120px; width: 80%; max-height: 100px"/>'));
    }

    function get_text(){
        $("#text_div_" + vare_nr).append(
            $('<p id="p_'+ tekst +'"></p>').text(tekst));
    }

    function get_pris(){
        $("#pris_div_" + vare_nr).append(
            $('<p></p>').text(kroner));
    }

    function get_vare() {

        $("#vare_container").append(
            $('<div class="vare_div" id="vare_div_'+vare_nr+'"></div>'));

        $("#vare_div_" + vare_nr).append(
            $('<div class="billede_div" id="billede_div_'+vare_nr+'"></div>'),$('<div class="text_div" id="text_div_'+vare_nr+'"></div>'),$('<div class="pris_div" id="pris_div_'+vare_nr+'"></div>'));

        get_billede();

        get_text();

        get_pris();

    }

    function load_items(){
        $("#vare_container").append(
            $('<div id="ialt"></div>'));

        $("#ialt").append(
            $('<div id="ialt_vare"></div>'));

        $("#ialt_vare").append(
            $('<p id="ialt_vare_text"></p>').text("Varer: " + ialt_vare));

        $("#ialt").append(
            $('<div id="ialt_space"></div>'));

        $("#ialt").append(
            $('<div id="ialt_pris"></div>'));

        $("#ialt_pris").append(
            $('<p id="ialt_fragt_pris"></p>').text("Fragt: "+fragt_pris + " DKK.-"),$('<p id="ialt_vare_pris"></p>').text("I alt: " + localStorage.getItem('final_pris') + " DKK.-"));
    }

    if (localStorage.getItem('newPris') == null){
        localStorage.setItem('newPris', '0');
    }

    if (localStorage.getItem('newAntal') == null){
        localStorage.setItem('newAntal', '0');
    }

    if (localStorage.getItem('fragt_pris') == null){
        localStorage.setItem('fragt_pris', '0');
    }

    localStorage.setItem('final_pris', parseInt(localStorage.getItem('newPris')) + parseInt(localStorage.getItem('fragt_pris')));

    ialt_vare = localStorage.getItem('newAntal');

    vare_antal = parseInt(ialt_vare);

    fragt_pris = localStorage.getItem('fragt_pris');


    for (var i = vare_antal; i > 0; i--) {

        vare_nr = i;
        billede = localStorage.getItem('billede_' + vare_antal);
        tekst = localStorage.getItem('beskrivelse_' + vare_antal);
        kroner = localStorage.getItem('pris_' + vare_antal);

        get_vare();

        vare_antal--;
    }

    load_items();

    $("#empty_btn").on('click', function() {
        localStorage.clear();
        location.reload();
    });

    $("#buy_btn").on('click', function() {
        if (localStorage.getItem('newAntal') == null){
            alert("Du har ingen varer i kurven!");
        }
        else {
            window.location = "/info";
        }
    });

    $("#fortryd_btn").on('click', function() {
        $("#handelsbetingelser_container").hide();
    });

    $("#rabat_btn").on('click', function () {
        if (rabatboks == false) {
            $("#rabatkode").show();
            rabatboks = true;
        }
        else if (rabatboks == true) {
            $("#rabatkode").hide();
            rabatboks = false;
        }

    });

    $("#redeem_rabatkode_btn").on('click', function() {
        var kode = $("#rabatkode_input").val();
        $.getJSON('/API/rabat', {rabatkode: kode}, function(rabat) {
            var pris = parseInt(localStorage.getItem('final_pris'));
            var rabat1 = (pris - parseInt(localStorage.getItem('fragt_pris'))) * parseInt(rabat) / 100;
            var final_pris = pris - rabat1;
            localStorage.setItem('final_pris', final_pris);
            if (rabat > 0) {
                $("#ialt_vare_pris").text("I alt: " + final_pris + " DKK.- -"+ rabat +"%");
            }
            else
                $("#ialt_vare_pris").text("I alt: " + final_pris + " DKK.-");
        });
        $("#rabatkode_input").val("");
        $("#rabatkode").hide();
        rabatboks = false;
    });

    $("#rabat_x").on('click', function () {
        $("#rabatkode").hide();
        rabatboks = false;
    });
});