$(function(){





    function get_billede(){
        $("#billede_div_" + vare_nr).append(
            $('<img src="'+ billede +'" class="varebillede '+billede+'" id="vare_img_'+vare_nr+'" width="150" height="100"/>'));
    }

    function get_text(){
        $("#text_div_" + vare_nr).append(
            $('<p id="p_'+ tekst +'"></p>').text(tekst));
    }

    function get_pris(){
        $("#pris_div_" + vare_nr).append(
            $('<p></p>').text(kroner + " DKK,-"));
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
        pris = 0;

        first = 0;
        anden = 1;
        tredje = 2;

        ialt_vare = sessionStorage.getItem('ialt_varer');

        console.log(ialt_vare);



        vare_antal = parseInt(sessionStorage.getItem('antal'));

        for (var i = 0; i < vare_antal; i++) {

            vare_nr = i;



            billede = sessionStorage.getItem('billede_'+i.toString());
            tekst = sessionStorage.getItem('beskrivelse_'+i.toString());
            kroner = sessionStorage.getItem('pris_'+i.toString());

            get_vare();

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
            $('<p id="ialt_vare_pris"></p>').text("I alt: " + pris + " DKK.-"));

    });

});