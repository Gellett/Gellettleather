$(function(){

    $(window).on('load', function(){

        antal = 1;

        x = document.getElementsByTagName("Div")[35];
        console.log(x);


        $.getJSON('/API/get_image', {image: x.id}, function(data) {
			$("#show_image").css("backgroundImage", "url("+data+")");
			image_1 = data;
			image_2 = image_1.replace(".", "-1.");
		});

        $.getJSON('/API/get_image_antal', {test: x.id}, function(data) {
            if (data == "1"){
                $(".image_1").hide();
                $(".image_2").hide();
            }
            else if (data == "2"){
                $(".image_1").css({
                    "backgroundImage": "url("+image_1+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "right": "50%",
                    "transform": "translate(0%)"
                });
                $(".image_2").css({
                    "backgroundImage": "url("+image_2+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "left": "50%"
                });
            }
        });
    });

    $(".image_1").on('click',function(){

		$.getJSON('/API/get_image_1', {image: image_1}, function(data) {
			$("#main_pic").attr("src", ""+data+"");
			console.log(data);
		});
	});

	$(".image_2").on('click',function(){

		$.getJSON('/API/get_image_2', {image: image_2}, function(data) {
			$("#main_pic").attr("src", ""+data+"");
			console.log(data);
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

	    for (var q = 0; q < antal; q++) {

            test = parseInt(document.getElementById("antal").value);

            sessionStorage.setItem('antal', test);


            if (sessionStorage.getItem('newAntal') == undefined) {
                sessionStorage.setItem('newAntal', '0');
                sessionStorage.setItem('newAntal', parseInt(sessionStorage.getItem('newAntal')) + 1);
            }
            else {
                sessionStorage.setItem('newAntal', parseInt(sessionStorage.getItem('newAntal')) + 1);
            }

            sessionStorage.setItem('antal_kurv', parseInt(sessionStorage.getItem("antal_kurv"))+1);
		    document.getElementById("vare_antal").value = parseInt(sessionStorage.getItem(("antal_kurv")));

            var billede = $(".pic").attr("id");
            var beskrivelse = $(".name").attr("id");
            var pris = $(".pris").attr("id");

            if (sessionStorage.getItem('nummer') == undefined) {
                sessionStorage.setItem('nummer', '0');
                sessionStorage.setItem('nummer', parseInt(sessionStorage.getItem('nummer')) + 1);
                hej = parseInt(sessionStorage.getItem('nummer'));
            }
            else {
                sessionStorage.setItem('nummer', parseInt(sessionStorage.getItem('nummer')) + 1);
                hej = parseInt(sessionStorage.getItem('nummer'));
            }


            sessionStorage.setItem('billede_' + sessionStorage.getItem('nummer'), billede);
            sessionStorage.setItem('beskrivelse_' + sessionStorage.getItem('nummer'), beskrivelse);
            sessionStorage.setItem('pris_' + sessionStorage.getItem('nummer'), pris);



            if (sessionStorage.getItem('newPris') == undefined) {
                sessionStorage.setItem('newPris', '0');
                sessionStorage.setItem('newPris', parseInt(sessionStorage.getItem('newPris')) + parseInt(pris));
            }
            else {
                sessionStorage.setItem('newPris', parseInt(sessionStorage.getItem('newPris')) + parseInt(pris));
            }

            var nummer = $("#vare_id").text().slice(-5);

            if (sessionStorage.getItem('ordertext') == undefined) {
			sessionStorage.setItem('ordertext', '');
			sessionStorage.setItem('ordertext', sessionStorage.getItem('ordertext')+nummer);
            }
            else {
                sessionStorage.setItem('ordertext',''+ sessionStorage.getItem('ordertext')+nummer);
            }

        }

    });
});