function generate() {
var html_top = `<!DOCTYPE html>
<html lang="de">

<head>
<title>Rollmaterial RhB - ${type_meta} ${numbers}</title>
<meta name="description" content="${type_meta} ${numbers}${description}">
<meta rel="canonical" href="${url}/data/${main_group}/${sub_group}/${subb_group}${id}.html">
<meta name="robots" content="index, follow, archive"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="${path}elements/style/style.css"/>
<link rel="stylesheet" type="text/css" href="${path}elements/style/navbar.css"/>
<link rel="stylesheet" type="text/css" href="${path}elements/style/table.css"/>
<link rel="stylesheet" type="text/css" href="${path}elements/style/menu_lvl3.css"/>
<link rel="icon" href="${path}elements/favicon.png">
</head>

<body>

<nav class="${main_group}"></nav>

<main>
<header id="header">
	<h1>${type}&#8199;${numbers}</h1>
	${description_html}
</header>
	
<div class="content">
	<div class="left_space">
		<input class="site_search" type="text" id="Site_Search" onkeyup="siteSearch()" placeholder="Tabelle Durchsuchen...">
		<img class="hide_mobile" src="${path}elements/pic/${main_group}/${sub_group}/${subb_group}${id}/1.jpg">
		<img class="hide_mobile" src="${path}elements/pic/${main_group}/${sub_group}/${subb_group}${id}/2.jpg">

	
	</div>

	<div class="right_space">
		<div class="data_table" id="data_table">
			<p style="display: none;" id="not_found">Keine Resultate</p>
`

var html_center = `
		</div>
	</div>
</div>
`


var html_bottom = `

</main>

<footer></footer>

<script language="javascript" type="text/javascript" src="${path}elements/javascript/site_search.js"></script>
<script language="javascript" type="text/javascript" src="${path}elements/javascript/menu_lvl3.js"></script>
<script language="javascript" type="text/javascript" src="${path}elements/javascript/nav.js"></script>

</body>
</html>
`

// #####################################################
// Get Table

var main_table = document.getElementById("main_table");
var save_table = document.getElementById("save_table");
save_table.innerHTML = main_table.innerHTML;


// Change Table
var table_tr = save_table.getElementsByTagName("tr");
for (var i = 0; i < table_tr.length; i++) {
	var table_l = table_tr[i].getElementsByClassName("table_6")[0];
	var table_r = table_tr[i].getElementsByClassName("table_r")[0];

	// Remove empty table rows
	if (table_r != undefined && (table_r.innerHTML == "" || table_r.innerHTML == "<br>") || table_tr[i].classList.contains("hidden") == true) {
		table_tr[i].classList.add("empty_tr");
	}

	// Remove marking classes
	table_l.classList.remove("only_here"); // Nur wenn vorhanden
	table_l.classList.remove("not_here"); // Nur wenn nicht vorhanden

	// Remove edit attribute
	table_l.removeAttribute("contenteditable");
	table_r.removeAttribute("contenteditable");

	// Remove always_here classes (removes only_here)
	var class_list = table_l.classList.value.match(/(\balways_here\S+\b)/ig);
	if (class_list != undefined) {
		for (var j = 0; j < class_list.length; j++) {
			table_l.classList.remove(class_list[j]);
		}
	}

	// Remove unhidden classes (removes hidden)
	var class_list = table_tr[i].classList.value.match(/(\bunhidden\S+\b)/ig);
	if (class_list != undefined) {
		for (var j = 0; j < class_list.length; j++) {
			table_tr[i].classList.remove(class_list[j]);
		}
	}
}
var empty_tr = save_table.getElementsByClassName("empty_tr");
while (empty_tr.length > 0) {
	empty_tr[0].remove();
}


// Remove empty groups
var save_group = save_table.getElementsByClassName("group");
for (var i = 0; i < save_group.length; i++) {
	if (save_group[i].getElementsByTagName("tbody")[0].childElementCount == 0) {
		save_group[i].classList.add("empty_group")
	}
}
var empty_group = save_table.getElementsByClassName("empty_group");
while (empty_group.length > 0) {
	empty_group[0].remove();
}


// Save Table
var html_table = document.getElementById("save_table").innerHTML;

// remove empty spaces
html_table = html_table.replace(/^\s*$(?:\r\n?|\n)/gm, "").replaceAll(`			<div class="group">`, `
			<div class="group">`);

// #####################################################
// Get Spoilers

var main_spoiler = document.getElementById("spoiler_box");
var save_spoiler = document.getElementById("save_spoiler");
save_spoiler.innerHTML = main_spoiler.innerHTML;


// Remove empty groups
var save_box = save_spoiler.getElementsByClassName("spoiler_box");
for (var i = 0; i < save_box.length; i++) {
	if (save_box[i].getElementsByTagName("h3")[0].innerHTML == "" || save_box[i].getElementsByTagName("h3")[0].innerHTML == "<br>") {
		save_box[i].classList.add("empty_spoiler")
	}
}
var empty_spoiler = save_spoiler.getElementsByClassName("empty_spoiler");
while (empty_spoiler.length > 0) {
	empty_spoiler[0].remove();
}


// Remove edit attribute
var remove_edit = save_spoiler.getElementsByTagName("td");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
}
var remove_edit = save_spoiler.getElementsByTagName("h3");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
}
var remove_edit = save_spoiler.getElementsByTagName("section");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
}


// Save Spoilers
var html_spoiler = document.getElementById("save_spoiler").innerHTML;

// remove empty spaces
html_spoiler = html_spoiler.replace(/^\s*$(?:\r\n?|\n)/gm, "").replaceAll(`<div class="spoiler_box">`, `

<div class="spoiler_box">`);

// #####################################################
// Generate File

var filename = "Rollmaterial-RhB.html";
if (id != "") {
	var filename = id + ".html";
}

var text = html_top + html_table + html_center + html_spoiler + html_bottom;

text = text.replaceAll("<tbody>", "").replaceAll("</tbody>", "");
text = text.replaceAll("<br></td>", "</td>");

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);

}