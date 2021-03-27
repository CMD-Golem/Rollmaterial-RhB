// Define variable for export
var main_group = ""; // Main Group
var group_color = ""; // Farbe der Main Group
var sub_group = ""; // Sub Group
var type = ""; // Typen Bezeichnung: Ge 4/4¹
var numbers = ""; // Fahrzeugnummer: 601 / 601 - 605 / 601 ... 605
var description = ""; // Andere Namen für das Fahrzeuge: Allegra / BoBo I
var id = ""; // Id für Dateiname und Pfad: ge4-4_601
var path = "../../../"; // Braucht es ein weiteres ../
var type_meta = ""; // Gleich wie Type nur sup text wird ersetzt (Plain Text)


// Show Table after Main group selection
// Get Main Group and Group Color
var sel_main_group = document.getElementById("main_group");
var already_sel;

sel_main_group.addEventListener("change", showMainGroup);

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
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="dienstwagen_8xxx">Dienstwagen 8xxx</option><option value="dienstwagen_90xx">Dienstwagen 90xx</option><option value="dienstwagen_91xx">Dienstwagen 91xx</option><option value="dienstwagen_93xx">Dienstwagen 93xx</option><option value="dienstwagen_94xx">Dienstwagen 94xx</option><option value="dienstwagen_98xx">Dienstwagen 98xx</option><option value="dienstwagen_91xxx">Dienstwagen 91xxx</option><option value="dienstwagen_92xxx">Dienstwagen 92xxx</option><option value="dienstwagen_93xxx">Dienstwagen 93xxx</option><option value="dienstwagen_94xxx">Dienstwagen 94xxx</option><option value="dienstwagen_95xxx">Dienstwagen 95xxx</option><option value="dienstwagen_96xxx">Dienstwagen 96xxx</option><option value="dienstwagen_97xxx">Dienstwagen 97xxx</option><option value="dienstwagen_98xxx">Dienstwagen 98xxx</option><option value="dienstwagen_99xxx">Dienstwagen 99xxx</option><option value="privatwagen_100xx">Privatwagen 100xx</option><option value="privatwagen_101xx">Privatwagen 101xx</option>';
			group_color = "#555655";
		}
		if (sel_main_group.value == "gepaeckwagen") {
			document.getElementById("main_table").innerHTML = store_gepaeckwagen;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="gepaeckwagen">Gepäckwagen</option><option value="gepaeckwagen_zweiachsig">Gepäckwagen zweiachsig</option><option value="historische_gepaeckwagen">Historische Gepäckwagen</option>';
			group_color = "#31459C";
		}
		if (sel_main_group.value == "gleisbaumaschinen") {
			document.getElementById("main_table").innerHTML = store_gleisbaumaschinen;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="abbaubagger">Abbaubagger</option><option value="aushubbagger">Aushub- und Verladebagger</option><option value="beschickungswagen">Beschickungswagen</option><option value="gleisumbauwagen">Gleisumbauwagen</option><option value="kranwagen">Kranwagen</option><option value="materialwagen">Materialwagen</option><option value="nivelliermaschinen">Nivellier- und Stopfmaschinen</option><option value="schienenschleifmaschinen">Schienenschleifmaschinen</option><option value="schotterplaniermaschinen">Schotterplaniermaschinen</option><option value="schotterreinigungsmaschinen">Schotterreinigungsmaschinen</option><option value="tunnelelement-versetzwagen">Tunnelelement-Versetzwagen</option><option value="verdichtmaschinen">Verdicht- und Planiermaschinen</option>';
			group_color = "#906D11";
		}
		if (sel_main_group.value == "gueterwagen") {
			document.getElementById("main_table").innerHTML = store_gueterwagen;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="altschotterwagen">Altschotterwagen</option><option value="autotransportwagen">Autotransportwagen</option><option value="containerwagen">Containerwagen</option><option value="historische_gueterwagen">Historische Güterwagen</option><option value="kieswagen">Kies- und Schotterwagen</option><option value="rungenwagen">Rungenwagen</option><option value="schiebewandwagen">Schiebewandwagen</option><option value="schienentransportwagen">Schienentransportwagen</option><option value="schwertransportwagen">Schwertransportwagen</option><option value="werbewagen">Werbewagen</option><option value="zementwagen">Zementwagen</option><option value="zisternenwagen">Zisternenwagen</option>';
			group_color = "#5B493D";
		}
		if (sel_main_group.value == "lokomotiven") {
			document.getElementById("main_table").innerHTML = store_lokomotiven;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="bernina-fahrzeuge">Bernina-Fahrzeuge</option><option value="dienstfahrzeuge">Dienstfahrzeuge</option><option value="historische_fahrzeuge">Historische Fahrzeuge</option><option value="lokomotiven">Lokomotiven</option><option value="rangierlokomotiven">Rangierlokomotiven</option><option value="rangiertraktoren">Rangiertraktoren</option><option value="schneeschleudern">Schneeschleudern</option>';
			group_color = "#2F4C2B";
		}
		if (sel_main_group.value == "personenwagen") {
			document.getElementById("main_table").innerHTML = store_personenwagen;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="ab-wagen">AB-Wagen</option><option value="aussichtswagen">Aussichtswagen</option><option value="a-wagen">A-Wagen</option><option value="bd-wagen">BD-Wagen</option><option value="b-wagen">B-Wagen</option><option value="gliederzug-wagen">Gliederzug-Wagen</option><option value="historische_wagen">Historische Wagen</option><option value="panoramawagen">Panoramawagen</option><option value="sonderwagen">Sonderwagen</option><option value="speisewagen">Speisewagen</option><option value="steuerwagen">Steuerwagen</option><option value="velowagen">Velowagen</option>';
			group_color = "#803034";
		}
		if (sel_main_group.value == "triebwagen") {
			document.getElementById("main_table").innerHTML = store_triebwagen;
			document.getElementById("sub_group").innerHTML = '<option value="unset">Wähle die Sub Group</option><option value="bernina-fahrzeuge">Bernina-Fahrzeuge</option><option value="dienstfahrzeuge">Dienstfahrzeuge</option><option value="historische_fahrzeuge">Historische Fahrzeuge</option><option value="triebwagen">Triebwagen</option><option value="triebzuege">Triebzüge</option>';
			main_group = "lokomotiven";
			group_color = "#2F4C2B";
		}
		var add_edit = main_table.getElementsByTagName("td");
		for (var i = 0; i < add_edit.length; i++) {
			add_edit[i].contentEditable = "true";
			add_edit[i].addEventListener("focusout", function(){ convertit(this); });
		}
	}
}

// Get Sub Group
var sel_sub_group = document.getElementById("sub_group");
sel_sub_group.addEventListener("change", showSubGroup);

function showSubGroup() {
	sub_group = sel_sub_group.value;

	// Pufferplatten
	if (main_table.getElementsByClassName("pufferplatten").length != 0) {
		if (sel_sub_group.value == "lokomotiven" || sel_sub_group.value == "rangierlokomotiven") {
			main_table.getElementsByClassName("pufferplatten")[0].classList.remove("only_here");
		}
		else {
			main_table.getElementsByClassName("pufferplatten")[0].classList.add("only_here");
		}
	}
	
	// Funkfernsteuerung
	if (main_table.getElementsByClassName("fernsteuerung").length != 0) {
		if (sel_sub_group.value == "rangiertraktoren") {
			main_table.getElementsByClassName("fernsteuerung")[0].classList.remove("only_here");
		}
		else {
			main_table.getElementsByClassName("fernsteuerung")[0].classList.add("only_here");
		}
	}
	
}

// Get Type, Numbers and Description
var el_type = document.getElementById("type");
var el_numbers = document.getElementById("numbers");
var el_description = document.getElementById("description");

el_type.addEventListener("keyup", function(){ type = el_type.value;getId();getTypeMeta(); });
el_numbers.addEventListener("keyup", function(){ numbers = el_numbers.value;getId(); });
el_description.addEventListener("keyup", function(){ description = el_description.value;getId(); });

// Get Id
var el_id = document.getElementById("id");
el_id.addEventListener("keyup", function(){ id = el_id.value;el_id.placeholder = "Id"; });

function getId() {
	if (el_id.value == "" && type != "" && numbers != "") {
		var edit_type = type.replace(" ", "");
		var edit_type = edit_type.replace("/", "-");
		var edit_type = edit_type.toLowerCase();
		var edit_type = edit_type.split("<");


		var edit_numbers = numbers.split(" ");

		id = edit_type[0] + "_" + edit_numbers[0];

		el_id.placeholder = id;
	}
}

// Get path
var el_path = document.getElementById("path");
el_path.addEventListener("change", getPath);

function getPath() {
	if (el_path.checked == true) {
		path = "../../../../";
	}
	else {
		path = "";
	}
}

// Get type_meta
var el_type_meta = document.getElementById("type_meta");
el_type_meta.addEventListener("keyup", function(){ type_meta = el_type_meta.value;el_type_meta.placeholder = "Typen Name für Meta Tag"; });
function getTypeMeta() {
	if (el_type_meta.value == "") {
		if (type.includes("<sup>") == true) {
			var edit_type = type.split("<sup>");
			var edit_type_1 = edit_type[1].replace("</sup>", "");
			var edit_type_1 = edit_type_1.replaceAll("I", "¹");
			type_meta = edit_type[0] + edit_type_1;
		}
		else {
			type_meta = type;
		}
		el_type_meta.placeholder = type_meta;
	}
}


function showData() {
	console.log(path + main_group + "/" + sub_group + "/" + id);
	console.log("Type: " + type + " " + numbers);
	console.log("Description: " + description);
	console.log("Color: " + group_color);
	console.log("Type Meta: " + type_meta);
}



// #############################################################################
// Spoiler
var spoiler_tr = document.getElementsByClassName("spoiler_box");
for (var i = 0; i < spoiler_tr.length; i++) {
	spoiler_tr[i].addEventListener("keyup", e => {
		if (event.ctrlKey && (event.which == 13 || event.keyCode == 13) ) {
			var clone = e.target.cloneNode(true);
			if (e.target.nextSibling) {
				e.target.parentNode.insertBefore(clone, e.target.nextSibling);
			}
			else {
				e.target.parentNode.appendChild(clone);
			}
		}
		if (event.ctrlKey && (event.which == 46 || event.keyCode == 46) ) {
			if (e.target.previousSibling) {
				e.target.previousSibling.focus();
			}
			else {
				e.target.nextSibling.focus();
			}
			e.target.remove();
		}
	});
}




// #############################################################################
// Add HTML Tags when out of focus
function convertit(text) {
	var newtext = text.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	text.innerHTML = newtext;
}
