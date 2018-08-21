$(function(){

    $(window).on('load', function(){
        x = document.getElementsByTagName("Div")[28];

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

});