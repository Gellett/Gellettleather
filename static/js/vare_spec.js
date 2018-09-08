$(function(){

    antal = 1;
    vare_list = [];

    $(window).on('load', function(){


        x = document.getElementsByTagName("Div")[38];


        $.getJSON('/API/get_image', {image: x.id}, function(data) {
			$("#show_image").css("backgroundImage", "url("+data+")");
			image_1 = data;
			image_2 = image_1.replace(".", "-1.");
		});

        $.getJSON('/API/get_image_antal', {test: x.id}, function(data) {
            if (data == "1"){
                $(".image_1").hide();
                $(".image_2").hide();
                /*$(".image_2").css({
                    "backgroundImage": "url("+image_1+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "240px",
                    "height": "150px",
                    "border": "0.5px solid #7f7f7f",
                    "right": "50%",
                    "transform": "translate(50%)"
                });*/
            }
            else if (data == "2"){
                $(".image_1").css({
                    "backgroundImage": "url("+image_1+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "240px",
                    "height": "150px",
                    "border": "0.5px solid #7f7f7f",
                    "right": "50%",
                    "transform": "translate(0%)"
                });
                $(".image_2").css({
                    "backgroundImage": "url("+image_2+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "240px",
                    "height": "150px",
                    "border": "0.5px solid #7f7f7f",
                    "left": "50%"
                });
            }
        });
    });

    $(".image_1").on('click',function(){

		$.getJSON('/API/get_image_1', {image: image_1}, function(data) {
			$(".pic").css("backgroundImage", "url("+data+")");
		});
	});

	$(".image_2").on('click',function(){

		$.getJSON('/API/get_image_2', {image: image_2}, function(data) {
			$(".pic").css("backgroundImage", "url("+data+")");
		});
	});

	$(".box").on('click',function(){
		window.location = this.id;
    });

    $(".minus_container").on('click',function(){
        if (antal > 0) {
            antal = antal - 1;
        }
		document.getElementById("antal").value = antal;
    });

    $(".plus_container").on('click',function(){
        if (antal < 100) {
            antal = antal + 1;
        }
		document.getElementById("antal").value = antal;
    });


	$("#facebook_img").on('click',function(){
		window.open("https://www.facebook.com/gellettleather/");
    });


	$(".buy_btn_container").on('click',function(){

        hej = parseInt(document.getElementById("antal").value);

        for (var i = hej; i > 0; i = i-1)  {

            var billede = $(".pic").attr("id");
            var beskrivelse = $(".name").attr("id");
            var pris = $(".pris").attr("id");

            var newVareBillede = billede;
            var newVareBeskrivelse = beskrivelse;
            var newVarePris = pris;


            vare_list_billede = [];
            vare_list_pris = [];
            vare_list_beskrivelse = [];
            vare_list_billede.push(newVareBillede);
            vare_list_beskrivelse.push(newVareBeskrivelse);
            vare_list_pris.push(newVarePris);
            var q = JSON.stringify(vare_list_billede);
            var r = JSON.stringify(vare_list_beskrivelse);
            var s = JSON.stringify(vare_list_pris);

            $.getJSON('/API/vare', {data: q}, function(data) {});
            $.getJSON('/API/vare', {data: r}, function(data) {});
            $.getJSON('/API/vare', {data: s}, function(data) {});

            $.getJSON('/API/varer', function(data) {
                vare_list.push(data);
                sessionStorage.varer = vare_list;
                vare_list = [];
            });
        }
    });

});