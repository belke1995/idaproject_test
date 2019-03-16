// {event} click on menu
window.onload = function () {
	var menuLink = document.querySelectorAll("menu li");
	for (i = 0; i < menuLink.length; i++) {
		menuLink[i].onclick = addActiv;
	}
	// add css class active link
	function addActiv() {
		var activeLink = document.querySelector(".menu_active");
		activeLink.classList.remove("menu_active");
		this.classList.add("menu_active");
	}

	// {event} Сheck correctness card
	var numberCard = document.querySelectorAll('.info_card_number input');
	for (i = 0; i < numberCard.length; i++) {
		numberCard[i].onchange = function () {
			var val = this.value;
			var length = val.length;
			if (length == 4) {
				this.classList.remove("error");
			} else {
				this.classList.add("error");
			};
		}
	}
	// {event} Сheck correctness CVV2
	var cvvCard = document.querySelector(".back_site_card_cvv");
	cvvCard.onchange = function () {
		var val = this.value;
		var length = val.length;
		if (length == 3) {
			this.classList.remove("error");
		} else {
			this.classList.add("error");
		};
	}


	// {event} Сheck correctness name
	var name = document.querySelector(".info_card_owner");
	name.onchange = start;

	function start() {
		var val = this.value;
		var length = val.length;
		if (length >= 4) {
			this.classList.remove("error");
		} else {
			this.classList.add("error");
		};
	}
}
// {event} Сheck all form and submit
function submitMail() {
	// item Null
	var nullInput = document.querySelectorAll('input[type="number"] , input[type="text"]');
	for (i = 0; i < nullInput.length; i++) {
		var val = nullInput[i].value;
		var itn = nullInput[i];

		if (val == "") {
			itn.classList.add("error");
		}
	}

	// {event} Сheck correctness and send mail
	var redColor = document.querySelectorAll(".error").length;
	if (redColor == 0) {
		alert("Send mail");
	} else {
		alert("Don't send");
	}
}
