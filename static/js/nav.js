$(function(){

    $(".kurv_img").on('click', function(){
        window.location = "/indkoebsvogn"
    });

    if (sessionStorage.getItem('antal_kurv') == undefined) {
			sessionStorage.setItem('antal_kurv', '0');
			document.getElementById("vare_antal").value = parseInt(sessionStorage.getItem(("antal_kurv")));
		}
    document.getElementById("vare_antal").value = parseInt(sessionStorage.getItem('antal_kurv'));

});