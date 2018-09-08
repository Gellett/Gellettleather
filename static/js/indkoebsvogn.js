$(function(){

    function remove() {
        $(".vare").remove();
    }

    function get_billede(){
        $("#billede_div_" + vare_nr).append(
            $('<img src="'+billede_src+'" class="varebillede" id="vare_img_'+vare_nr+'" width="150" height="100"/>'));
    }

    function get_text(){
        $("#text_div_" + vare_nr).append(
            $('<p id="p_'+vare_nr+'"></p>').text(text_list[vare_nr]));
    }

    function get_pris(){
        $("#pris_div_" + vare_nr).append(
            $('<p></p>').text(pris_list[vare_nr] + " DKK,-"));
    }

    function get_vare() {
        billede_src = billede_list[vare_nr];

        $("#vare_container").append(
            $('<div class="vare_div" id="vare_div_'+vare_nr+'"></div>'));

        $("#vare_div_" + vare_nr).append(
            $('<div class="billede_div" id="billede_div_'+vare_nr+'"></div>'),$('<div class="text_div" id="text_div_'+vare_nr+'"></div>'),$('<div class="pris_div" id="pris_div_'+vare_nr+'"></div>'));

        get_billede();

        get_text();

        get_pris();


        var name = "vare_img_"+vare_nr;

        $("img[id="+name+"]").attr('src', billede_src);


    }

    $(window).on('load', function () {
        console.trace();
        pris = 0;
        var a = 0;
        var b = 1;
        var c = 2;
        q = 0;
        billede_list = [];
        text_list = [];
        pris_list = [];

        var x = sessionStorage.varer;
        var y = x.replace(/\["/g, "").replace(/"]/g, "");
        var z = y.split(',');
        var vare_antal = z.length / 3;

        remove();

        for (var i = vare_antal; i > 0; i = i - 1) {

            vare_nr = q;

            billede_list.push(z[a]);
            a = a + 3;

            text_list.push(z[b]);
            b = b + 3;

            pris_list.push(z[c]);
            addPris = parseInt(z[c]);
            c = c + 3;

            get_vare();

            q = q + 1;

            pris = pris + addPris;
        }

        $("#vare_container").append(
            $('<div id="ialt"></div>'));

        $("#ialt").append(
            $('<div id="ialt_vare"></div>'));

        $("#ialt_vare").append(
            $('<p id="ialt_vare_text"></p>').text("Varer: " + q));

        $("#ialt").append(
            $('<div id="ialt_space"></div>'));

        $("#ialt").append(
            $('<div id="ialt_pris"></div>'));

        $("#ialt_pris").append(
            $('<p id="ialt_vare_pris"></p>').text("I alt: " + pris + " DKK.-"));

    });

});