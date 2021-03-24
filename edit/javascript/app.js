// Define variable for export
var type; // Typen Bezeichnung: Ge 4/4¹
var numbers; // Fahrzeugnummer: 601 / 601 - 605 / 601 ... 605
var description; // Andere Namen für das Fahrzeuge: Allegra / BoBo I
var path; // Braucht es ein weiteres ../
var main_group; // Main Group
var group_color; // Farbe der Main Group
var sub_group; // Sub Group
var id; // Id für Dateiname und Pfad: ge4-4_601


// Show Table after Main group selection
var sel_main_group = document.getElementById("main_group");
var already_sel;

function showMainGroup() {
	var main_table = document.getElementById("main_table");
	var value = sel_main_group.value;


	if (sel_main_group.value != "unset" && already_sel == true) {
		var confirm_msg = confirm("Wenn du eine andere Main Group auswählst, werden deine Eingaben gelöscht!");
		if (confirm_msg == true) {
			already_sel = undefined;
		}
		if (confirm_msg == false) {
			sel_main_group.value = main_group;
		}
	}
	if (sel_main_group.value != "unset" && already_sel == undefined) {
		already_sel = true;
		main_group = sel_main_group.value;
		if (sel_main_group.value == "dienstwagen") {
			document.getElementById("main_table").innerHTML = store_dienstwagen;
		}
		if (sel_main_group.value == "gepaeckwagen") {
			document.getElementById("main_table").innerHTML = store_gepaeckwagen;
		}
		if (sel_main_group.value == "gleisbaumaschinen") {
			document.getElementById("main_table").innerHTML = store_gleisbaumaschinen;
		}
		if (sel_main_group.value == "gueterwagen") {
			document.getElementById("main_table").innerHTML = store_gueterwagen;
		}
		if (sel_main_group.value == "lokomotiven") {
			document.getElementById("main_table").innerHTML = store_lokomotiven;
		}
		if (sel_main_group.value == "personenwagen") {
			document.getElementById("main_table").innerHTML = store_personenwagen;
		}
		if (sel_main_group.value == "triebwagen") {
			document.getElementById("main_table").innerHTML = store_triebwagen;
		}
	}
}

sel_main_group.addEventListener("change", showMainGroup);