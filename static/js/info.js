$(function() {
    fornavn = $("#fornavn");
    efternavn = $("#efternavn").val();
    adresse = $("#adresse").val();
    postnummer = $("#postnummer").val();
    by = $("#by").val();

    $.getJSON('/API/orderID', function(data) {
        buy_id = parseInt(data);
        $("#form").append(
            $('<input type="hidden" name="amount" value="'+sessionStorage.getItem('newPris')+'00" />'),
            $('<input type="hidden" name="orderid" value="'+buy_id+'" />'),
            $('<input id="ordertext" type="hidden" name="ordertext" value="'+sessionStorage.getItem('ordertext')+ '" />'));
    });

    $("#over").on('click', function () {

        if (fornavn.val() == ""){
            alert("Udfyld alle felter for at gå videre til betaling")
        }
        else if ($("#check").prop('checked')) {

            sessionStorage.setItem('fornavn', $("#fornavn").val());
            sessionStorage.setItem('efternavn', $("#efternavn").val());
            sessionStorage.setItem('adresse', $("#adresse").val());
            sessionStorage.setItem('postnummer', $("#postnummer").val());
            sessionStorage.setItem('by', $("#by").val());

            $("#ordertext").val(sessionStorage.getItem('ordertext') + "- " + sessionStorage.getItem('fornavn') + " " + sessionStorage.getItem('efternavn') + " - " + sessionStorage.getItem('adresse') + " - " + sessionStorage.getItem('postnummer') + " " + sessionStorage.getItem('by'));

            $("#over").hide();
            $("#betaling_btn").css('bottom', '0');
            $("#betaling_btn").trigger('click');
        }
        else {
            alert("Accepter betingelser for at gå videre til betaling")
             }


    });

    $(".target").on('keypress', function () {

    });

});