$(function(){


	localStorage.setItem("antal_varekurv", "0");

    antal = 1;
    vare_list = [];

	$(".billede").on('click',function(){

		txt = this.id;
		var numb = txt.match(/\d/g);
		numb = numb.join("");
		varenummer = numb;

		len = txt.length;

		varetype = txt.slice(20,len-4);

		if (txt.slice(20,len-9) == "/tilbehoer") {
			varetype = "ekstra"+varetype;
		}

		window.location = varetype;
	});

	$(".buy_btn").on('click', function () {

		if (parseInt(localStorage.getItem('newAntal')) > 1){
			localStorage.setItem('fragt_pris', '59');
		}

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

		var nummer = this.id;
		var billede = $(".billede_"+nummer).attr("id");
		var beskrivelse = $(".kategori_"+nummer).text() +" - "+ $(".vare_nr_"+nummer).attr("id");
		var pris = $(".product_text_"+nummer).text();


		slags = $(".billede").attr('id');
		slags = slags.split('/');
		slags = slags[4];

		if (slags == "tasker"){
			localStorage.setItem('fragt_pris', '59');
		}
		else if (slags == "rejseserien"){
			localStorage.setItem('fragt_pris', '59');
		}
		else {
			localStorage.setItem('fragt_pris', '29');
		}


		if (localStorage.getItem('nummer') == undefined) {
			localStorage.setItem('nummer', '0');
			localStorage.setItem('nummer', parseInt(localStorage.getItem('nummer')) + 1);
		}
		else {
			localStorage.setItem('nummer', parseInt(localStorage.getItem('nummer')) + 1);
		}

		if (parseInt(localStorage.getItem('newAntal')) > 1){
			localStorage.setItem('fragt_pris', '59');
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

		var nummer1 = billede.slice(-8).slice(0,-4)+" ";

		if (localStorage.getItem('ordertext') == undefined) {
			localStorage.setItem('ordertext', '');
			localStorage.setItem('ordertext', localStorage.getItem('ordertext') + nummer1);
		}
		else {
			localStorage.setItem('ordertext', localStorage.getItem('ordertext') + nummer1);
		}
    });

	$(".info_btn").on('click', function () {
		$(this).parents("div#info_button").parents("div.buy").siblings("div.billede").click();
	});
});