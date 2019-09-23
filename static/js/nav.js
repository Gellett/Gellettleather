$(function(){

    $(".kurv_img").on('click', function(){
        window.location = "/indkoebsvogn"
    });

    if (localStorage.getItem('antal_kurv') === undefined) {
        localStorage.setItem('antal_kurv', '0');
        document.getElementById("vare_antal").value = parseInt(localStorage.getItem(("antal_kurv")));
    }
    document.getElementById("vare_antal").value = parseInt(localStorage.getItem('antal_kurv'));

    var url = window.location.href;

   var url_split = url.split("/");
   var nav_item1 = url_split[3].replace("_", " ");
   var nav_item = nav_item1.charAt(0).toUpperCase() + nav_item1.slice(1);

   if (nav_item === "Tilbehoer"){
       nav_item = "Accessories";
   }

   $(".list_text").each(function(){
       if (this.text === nav_item) {

          $(this).css({"border-bottom":"1px solid #2d3436"});
       }
   });

});