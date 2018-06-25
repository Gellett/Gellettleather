$(function(){

	$(".billede").on('click',function(){
		$("#overlay").show();
		$(".show").show();
		$("#show_image").show();
		$(".show_pic_1").show();
		$(".show_pic_2").show();

		$.getJSON('/API/get_image', {image: this.id}, function(data) {
			$("#show_image").css("backgroundImage", "url("+data+")");
			image_1 = data;
			image_2 = image_1.replace(".", "-1.");
		});

		$.getJSON('/API/get_image_antal', {test: this.id}, function(data) {
		    if (data == "1"){
                $(".show_pic_2").hide();
                $(".show_pic_1").css({
                    "backgroundImage": "url("+image_1+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "112.5px",
                    "height": "75px",
                    "border": "0.5px solid #7f7f7f",
                    "right": "343.75px"
                });
            }
		    else if (data == "2"){
		        $(".show_pic_1").css({
                    "backgroundImage": "url("+image_1+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "112.5px",
                    "height": "75px",
                    "border": "0.5px solid #7f7f7f",
                    "right": "50%"
                });
		        $(".show_pic_2").css({
                    "backgroundImage": "url("+image_2+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "112.5px",
                    "height": "75px",
                    "border": "0.5px solid #7f7f7f",
                    "right": "50%"
                });
            }
        });
	});

	$(".show_pic_1").on('click',function(){

		$.getJSON('/API/get_image_1', {image: image_1}, function(data) {
			$("#show_image").css("backgroundImage", "url("+data+")");
		});
	});

	$(".show_pic_2").on('click',function(){

		$.getJSON('/API/get_image_2', {image: image_2}, function(data) {
			$("#show_image").css("backgroundImage", "url("+data+")");
		});
	});

	$("#overlay").on('click',function(){
	    $("#show_image").css("backgroundImage", "none");
		$("#overlay").hide();
		$(".show").hide();
		$("#show_image_1").hide();
		$(".show_pic_1").css("backgroundImage", "none");
		$(".show_pic_2").css("backgroundImage", "none");
	});

	$("#ex_container").on('click',function(){
	    $("#show_image").css("backgroundImage", "none");
		$("#overlay").hide();
		$(".show").hide();
		$("#show_image_1").hide();
		$(".show_pic_1").css("backgroundImage", "none");
		$(".show_pic_2").css("backgroundImage", "none");
	});

	$(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
           $("#show_image").css("backgroundImage", "none");
           $("#overlay").hide();
           $(".show").hide();
           $("#show_image_1").hide();
           $(".show_pic_1").css("backgroundImage", "none");
           $(".show_pic_2").css("backgroundImage", "none");
        }
    });

});