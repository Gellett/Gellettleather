$(function(){

	$(".billede").on('click',function(){

		var txt = this.id;
		var numb = txt.match(/\d/g);
		numb = numb.join("");
		varenummer = numb;

		len = txt.length;
		varetype = txt.slice(20,len-4);

		window.location = varetype;

		console.log("hej")
		/*$("#overlay").show();
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
                    "right": "50%",
					"transform": "translate(50%)"
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
                    "right": "50%",
					"transform": "translate(0%)"
                });
		        $(".show_pic_2").css({
                    "backgroundImage": "url("+image_2+")",
                    "position": "absolute",
                    "backgroundSize": "cover",
                    "width": "112.5px",
                    "height": "75px",
                    "border": "0.5px solid #7f7f7f",
                    "left": "50%"
                });
            }
        });*/
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

});