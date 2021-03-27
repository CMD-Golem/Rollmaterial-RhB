function generate() {
var data = [{main_group:"", group_color:"", sub_group:"", type:"", numbers:"", description:"", id:"", path:"", type_meta:""}];

data[0].main_group = main_group;
data[0].group_color = group_color;
data[0].sub_group = sub_group;
data[0].type = type;
data[0].numbers = numbers;
data[0].description = description;
data[0].id = id;
data[0].path = path;
data[0].type_meta = type_meta;

var html_top = data.map(item => `
<!DOCTYPE html>
<html lang="de">

<head>
<title>Rollmaterial RhB - ${item.type_meta} ${item.numbers}</title>
<meta name="description" content="${item.type_meta} ${item.numbers} (${item.description})">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="${item.path}elements/style/style.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}elements/style/navbar.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}elements/style/table.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}elements/style/menu_lvl3.css"/>
<link rel="icon" href="${item.path}elements/favicon.png">
</head>

<body>

<!--Menu-->
<script language="javascript" type="text/javascript" src="${item.path}elements/nav/navbar.js"></script>

<script type="text/javascript">
	document.getElementById("${item.main_group}").style.backgroundColor = "${item.group_color}";
	var header_img = "url('${item.path}elements/pic/${item.main_group}/${item.sub_group}/${item.id}/1.jpg')";
</script>

<!--Content-->
<main>
	<header id="header">
		<h1>${item.type}&#8199;${item.numbers}</h1>
		<h2>${item.description}</h2>
	</header>
	
	<div class="content">
		<div class="left_space">
			<input class="site_search" type="text" id="Site_Search" onkeyup="siteSearch()" placeholder="Tabelle Durchsuchen...">
			<img class="hide_mobile" src="${item.path}elements/pic/${item.main_group}/${item.sub_group}/${item.id}/1.jpg">
			<img class="hide_mobile" src="${item.path}elements/pic/${item.main_group}/${item.sub_group}/${item.id}/2.jpg">

		
		</div>

		<div class="right_space">
			<div class="data_table" id="data_table">
`)

var html_center = "</div></div></div>"


var html_bottom = data.map(item => `
<div style="height: 40px;"></div>

</main>

<!--Script-->
<script language="javascript" type="text/javascript" src="${item.path}elements/javascript/spoiler.js"></script>
<script language="javascript" type="text/javascript" src="${item.path}elements/javascript/site_search.js"></script>
<script language="javascript" type="text/javascript" src="${item.path}elements/javascript/header_img.js"></script>

<!--Footer-->
<script language="javascript" type="text/javascript" src="${item.path}elements/nav/footer.js"></script>

</body>
</html>

`)

// #####################################################
// Get Table

var main_table = document.getElementById("main_table");
var save_table = document.getElementById("save_table");
save_table.innerHTML = main_table.innerHTML;


// Remove empty table rows
var table_tr = save_table.getElementsByTagName("tr");
for (var i = 0; i < table_tr.length; i++) {
	var table_td = table_tr[i].getElementsByClassName("table_r")[0];
	if (table_td != undefined && (table_td.innerHTML == "" || table_td.innerHTML == "<br>") ) {
		table_tr[i].classList.add("empty_td");
	}
}
var empty_td = save_table.getElementsByClassName("empty_td");
while (empty_td.length > 0) {
	empty_td[0].remove();
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


// Remove edit attribute and marking class
var remove_edit = save_table.getElementsByTagName("td");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
	remove_edit[i].classList.remove("only_here");
	remove_edit[i].classList.remove("not_here");

	remove_edit[i].classList.remove("pufferplatten");
	remove_edit[i].classList.remove("fernsteuerung");
}

// only_here: Nur wenn vorhanden
// not_here: Nur wenn nicht vorhanden


html_table = document.getElementById("save_table").innerHTML;

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


// Remove edit attribute and marking class
var remove_edit = save_spoiler.getElementsByTagName("tr");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
}
var remove_edit = save_spoiler.getElementsByTagName("h3");
for (var i = 0; i < remove_edit.length; i++) {
	remove_edit[i].removeAttribute("contenteditable");
}


html_spoiler = document.getElementById("save_spoiler").innerHTML;


// #####################################################
// Generate File

var filename = "Rollmaterial-RhB.html";
if (id != "") {
	var filename = id + ".html";
}

var text = html_top + html_table + html_center + html_spoiler + html_bottom;

text = text.replaceAll("<tbody>", "").replaceAll("</tbody>", "");

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);

}