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

    console.log(nav_item);
   $(".list_text").each(function(){
       if (this.text === nav_item) {
           console.log(this.text);
          $(this).parent($(".dropdown_start")).css({"border-right":"2px solid black", "border-top":"2px solid black", "border-left":"2px solid black", "background-color":"black"});
          $(this).css({"color":"white"});
       }
   });

});