// Textarea
var el_textarea = document.getElementsByTagName("textarea");
for (var i = 0; i < el_textarea.length; i++) {
	el_textarea[i].addEventListener("input", textarea);
}

function textarea(edited_textarea) {
	edited_textarea.target.style.height = "auto";
	edited_textarea.target.style.height = edited_textarea.target.scrollHeight + 10 + "px";
}


// Only one chechbox checked per section
var el_checkbox = document.getElementsByClassName("checkbox");
for (var i = 0; i < el_checkbox.length; i++) {
	el_checkbox[i].addEventListener("change", checkBox);
}

function checkBox(checkbox) {
	var section = checkbox.target.parentElement;
	var checkboxes = section.getElementsByClassName('checkbox');
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i] !== checkbox.target) {
			checkboxes[i].checked = false;
		}
	}
}


// validate Form
function validateForm() {
	var check = document.getElementsByTagName("form")[0].getElementsByClassName("form_check");
	for (i = 0; i < check.length; i++) {
		if (check[i].value == "") {
			alert("Alle Felder mit dem roten Stern müssen ausgefüllt werden");
			return false;
		}
	}
	
	var check_select = document.getElementsByTagName("form")[0].getElementsByClassName("form_check_select");
	for (var i = 0; i < check_select.length; i++) {
		var check_box = check_select[i].getElementsByClassName("checkbox");
		
		for (var i = 0; i < check_box.length; i++) {
			if (check_box[i].checked == true) {var checked_box = 1;}
		}

		if (checked_box != 1) {
			alert("Alle Felder mit dem roten Stern müssen ausgefüllt werden");
			return false;
		}
	}
}


// Prevent sending when pressing enter in input elements
var el_input = document.getElementsByTagName("input");
for (var i = 0; i < el_input.length; i++) {
	el_input[i].addEventListener("keydown", e => {
		if ((e.which == 13 || e.keyCode == 13) ) {
			e.preventDefault();
		}
	});
}

