$(function(){

            $(window).on('load', function(){
               $("#modal").show();
               $("#overlay").show();
            });

            $("#checkbox1").change(function() {
                if(this.checked) {
                    $("#modal").hide();
                    $("#overlay").hide();
                }
            });


});