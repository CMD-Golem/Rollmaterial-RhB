function goBack() {
	var history_length = history.length;
	if (history_length >= 2) window.history.go(-1);
	else window.location.href = "/";
}

// Textarea
var el_textarea = document.getElementsByTagName("textarea");
for (var i = 0; i < el_textarea.length; i++) {
	el_textarea[i].addEventListener("input", textarea);
}

function textarea(edited_textarea) {
	edited_textarea.target.style.height = "auto";
	edited_textarea.target.style.height = edited_textarea.target.scrollHeight + 10 + "px";
}


// send Form
var el_mains = document.getElementsByTagName("main");

async function sendForm(request_form) {
	var check = document.querySelector("form").querySelectorAll("form_check");
	for (i = 0; i < check.length; i++) {
		if (check[i].value == "") {
			return alert("Alle Felder mit dem roten Stern müssen ausgefüllt werden");
		}
	}

	if (request_form) {
		var commercial_use = document.getElementById("commercial_use").checked;
		var no_commercial_use = document.getElementById("no_commercial_use").checked;
		
		if (commercial_use) var commercial = "Kommerzielle Nutzung";
		else if (no_commercial_use) var commercial = "Keine Kommerzielle Nutzung";
		else return alert("Alle Felder mit dem roten Stern müssen ausgefüllt werden");

		var additional_text = `
			<p>Nummer: ${document.getElementById("number").value}</p>
			<p>Nutzen: ${document.getElementById("use_case").value}</p>
			<p>${commercial}</p>`;
	}
	else var additional_text = "";

	var form_body = {
		subject: `Rollmaterial-RhB Bilderanfrage`,
		body: `
			<p>Email: ${document.getElementById("email").value}</p>
			<p>Link: ${document.getElementById("link").value}</p>
			${additional_text}
			<p>Bemerkungen:<br>${document.getElementById("comments").value}</p>`
	};

	var response = await fetch("https://api.tabq.ch/forms-fg/mail", {
		method: "POST",
		body: JSON.stringify(form_body),
	});

	if (response.ok) {
		el_mains[0].style.display = "none";
		el_mains[1].style.display = "block";
	}
	else {
		var error = await response.text();
		console.error(error);
		alert("Es ist ein Fehler aufgetreten: " + error);
	}
}