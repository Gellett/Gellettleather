$(function(){


	sessionStorage.setItem("antal_varekurv", "0");

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
		if (sessionStorage.getItem('newAntal') == undefined) {
			sessionStorage.setItem('newAntal', '0');
			sessionStorage.setItem('newAntal', parseInt(sessionStorage.getItem('newAntal')) + 1);
		}
		else {
			sessionStorage.setItem('newAntal', parseInt(sessionStorage.getItem('newAntal')) + 1);
		}


		sessionStorage.setItem('antal_kurv', parseInt(sessionStorage.getItem("antal_kurv"))+1);
		document.getElementById("vare_antal").value = parseInt(sessionStorage.getItem(("antal_kurv")));

		var nummer = this.id;
		var billede = $(".billede_"+nummer).attr("id");
		var beskrivelse = $(".kategori_"+nummer).text() +" - "+ $(".vare_nr_"+nummer).attr("id");
		var pris = $(".product_text_"+nummer).text();

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

		var nummer1 = billede.slice(-8).slice(0,-4)+" ";


		if (sessionStorage.getItem('ordertext') == undefined) {
			sessionStorage.setItem('ordertext', '');
			sessionStorage.setItem('ordertext', sessionStorage.getItem('ordertext') + nummer1);
		}
		else {
			sessionStorage.setItem('ordertext', sessionStorage.getItem('ordertext') + nummer1);
		}
		console.log(sessionStorage.getItem('ordertext'));


    });

});