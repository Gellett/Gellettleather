$(function() {
    fornavn = $("#fornavn");
    efternavn = $("#efternavn").val();
    adresse = $("#adresse").val();
    postnummer = $("#postnummer").val();
    by = $("#by").val();
    mobil = $("#nummer").val();
    email = $("#e-mail").val();

    $.getJSON('/API/orderID', function(data) {
        buy_id = parseInt(data);
        $("#form").append(
            $('<input type="hidden" name="amount" value="'+localStorage.getItem('newPris')+'00" />'),
            $('<input type="hidden" name="orderid" value="'+buy_id+'" />'),
            $('<input id="ordertext" type="hidden" name="ordertext" value="'+localStorage.getItem('ordertext')+ '" />'));
    });

    $("#over").on('click', function () {

        if ($("#e-mail").val() == ""){
            alert("Udfyld alle felter for at gå videre til betaling");
        }
        else if ($("#check").prop('checked')) {
            localStorage.setItem('fornavn', $("#fornavn").val());
            localStorage.setItem('efternavn', $("#efternavn").val());
            localStorage.setItem('adresse', $("#adresse").val());
            localStorage.setItem('postnummer', $("#postnummer").val());
            localStorage.setItem('by', $("#by").val());
            localStorage.setItem('nummer', $("#nummer").val());
            localStorage.setItem('e-mail', $("#e-mail").val());

            $("#ordertext").val(localStorage.getItem('ordertext') + "- " + localStorage.getItem('fornavn') + " " + localStorage.getItem('efternavn') + " - " + localStorage.getItem('adresse') + " - " + localStorage.getItem('postnummer') + " " + localStorage.getItem('by') + " - " + localStorage.getItem('nummer') + " - " + localStorage.getItem('e-mail'));

            $("#over").hide();
            $("#betaling_btn").css('bottom', '0');
            $("#betaling_btn").trigger('click');
        }
        else {
            alert("Accepter betingelser for at gå videre til betaling")
             }
    });

});