$(function(){

        antal = 1;

        x = document.getElementsByTagName("Div")[35];


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
                    "backgroundSize": "contain",
                    "right": "50%",
                    "transform": "translate(0%)"
                });

                $(".image_2").css({
                    "backgroundImage": "url("+image_2+")",
                    "position": "absolute",
                    "backgroundSize": "contain",
                    "left": "50%"
                });
            }
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

            localStorage.setItem('antal', test);


            if (localStorage.getItem('newAntal') == undefined) {
                localStorage.setItem('newAntal', '0');
                localStorage.setItem('newAntal', parseInt(localStorage.getItem('newAntal')) + 1);
            }
            else {
                localStorage.setItem('newAntal', parseInt(localStorage.getItem('newAntal')) + 1);
            }

            localStorage.setItem('antal_kurv', parseInt(localStorage.getItem("antal_kurv"))+1);
		    document.getElementById("vare_antal").value = parseInt(localStorage.getItem(("antal_kurv")));
		    document.getElementById("vare_antal_header").value = parseInt(localStorage.getItem(("antal_kurv")));

            var billede = $(".pic").attr("id");
            var beskrivelse = $(".name").attr("id");
            var pris = $(".pris").attr("id");

            if (localStorage.getItem('nummer') == undefined) {
                localStorage.setItem('nummer', '0');
                localStorage.setItem('nummer', parseInt(localStorage.getItem('nummer')) + 1);
                hej = parseInt(localStorage.getItem('nummer'));
            }
            else {
                localStorage.setItem('nummer', parseInt(localStorage.getItem('nummer')) + 1);
                hej = parseInt(localStorage.getItem('nummer'));
            }


            localStorage.setItem('billede_' + localStorage.getItem('nummer'), billede);
            localStorage.setItem('beskrivelse_' + localStorage.getItem('nummer'), beskrivelse);
            localStorage.setItem('pris_' + localStorage.getItem('nummer'), pris);



            if (localStorage.getItem('newPris') == undefined) {
                localStorage.setItem('newPris', '0');
                localStorage.setItem('newPris', parseInt(localStorage.getItem('newPris')) + parseInt(pris));
            }
            else {
                localStorage.setItem('newPris', parseInt(localStorage.getItem('newPris')) + parseInt(pris));
            }

            var nummer = $("#vare_id").text().slice(-5);

            if (localStorage.getItem('ordertext') == undefined) {
			localStorage.setItem('ordertext', '');
			localStorage.setItem('ordertext', localStorage.getItem('ordertext')+nummer);
            }
            else {
                localStorage.setItem('ordertext',''+ localStorage.getItem('ordertext')+nummer);
            }

        }

    });
});