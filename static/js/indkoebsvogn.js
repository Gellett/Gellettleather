$(function(){


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

    $(window).on('load', function () {

        ialt_vare = sessionStorage.getItem('newAntal');

        if (ialt_vare == undefined){
            ialt_vare = "0";
        }

        vare_antal = parseInt(ialt_vare);

        for (var i = vare_antal; i > 0; i--) {

            vare_nr = i;
            billede = sessionStorage.getItem('billede_' + vare_antal);
            tekst = sessionStorage.getItem('beskrivelse_' + vare_antal);
            kroner = sessionStorage.getItem('pris_' + vare_antal);


            get_vare();

            vare_antal--;
        }

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
            $('<p id="ialt_vare_pris"></p>').text("I alt: " + sessionStorage.getItem('newPris') + " DKK.-"));

    });

    $("#empty_btn").on('click', function() {
        sessionStorage.clear();
        location.reload();
    });

    $("#buy_btn").on('click', function() {
        if (sessionStorage.getItem('newAntal') == null){
            alert("Du har ingen varer i kurven!");
        }
        else {
            $.getJSON('/API/orderID', function(data) {
                buy_id = parseInt(data);
                console.log(buy_id);
                $("#form").append(
                    $('<input type="hidden" name="amount" value="'+sessionStorage.getItem('newPris')+'00" />'),
                    $('<input type="hidden" name="orderid" value="'+buy_id+'" />'),
                    $('<input type="hidden" name="ordertext" value="'+sessionStorage.getItem('ordertext')+'" />'));
            });
            $("#handelsbetingelser_container").show();
            
        }
    });

    $("#fortryd_btn").on('click', function() {
        $("#handelsbetingelser_container").hide();
    });

    $.getJSON('/API/kost', {pris: sessionStorage.getItem('newPris')}, function(data) {});

    if (sessionStorage.getItem('newPris') == null){
        sessionStorage.setItem('newPris', parseInt('0'));
    }
});