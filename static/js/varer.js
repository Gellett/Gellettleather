$(function(){

    antal = 1;
    vare_list = [];

	$(".billede").on('click',function(){

		txt = this.id;
		var numb = txt.match(/\d/g);
		numb = numb.join("");
		varenummer = numb;

		len = txt.length;
		varetype = txt.slice(20,len-4);


		window.location = varetype;
	});

	$(".buy").on('click', function () {
		var billede = $(".billede").attr("id");
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
    });

});