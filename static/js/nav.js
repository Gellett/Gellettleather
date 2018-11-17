$(function(){

    $(".kurv_img").on('click', function(){
        window.location = "/indkoebsvogn"
    });

    if (localStorage.getItem('antal_kurv') == undefined) {
            localStorage.setItem('antal_kurv', '0');
            document.getElementById("vare_antal").value = parseInt(localStorage.getItem(("antal_kurv")));
        }
    document.getElementById("vare_antal").value = parseInt(localStorage.getItem('antal_kurv'));

});