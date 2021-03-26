function download() {
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


const html_top = data.map(item => `
<!DOCTYPE html>
<html lang="de">

<head>
<title>Rollmaterial RhB - ${item.type} ${item.numbers}</title>
<meta name="description" content="${item.type_meta} ${item.numbers} (${item.description})">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="${item.path}../../../elements/style/style.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}../../../elements/style/navbar.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}../../../elements/style/table.css"/>
<link rel="stylesheet" type="text/css" href="${item.path}../../../elements/style/menu_lvl3.css"/>
<link rel="icon" href="${item.path}../../../elements/favicon.png">
</head>

<body>

<!--Menu-->
<script language="javascript" type="text/javascript" src="${item.path}../../../elements/nav/navbar.js"></script>

<script type="text/javascript">
	document.getElementById("${item.main_group}").style.backgroundColor = "${item.group_color}";
	var header_img = "url('${item.path}../../../elements/pic/${item.main_group}/${item.sub_group}/${item.id}/1.jpg')";
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
			<img class="hide_mobile" src="${item.path}../../../elements/pic/${item.main_group}/${item.sub_group}/${item.id}/1.jpg">
			<img class="hide_mobile" src="${item.path}../../../elements/pic/${item.main_group}/${item.sub_group}/${item.id}/2.jpg">

		
		</div>

		<div class="right_space">
			<div class="data_table" id="data_table">
`)

const html_center = "</div></div></div>"


const html_bottom = data.map(item => `
<div style="height: 40px;"></div>

</main>

<!--Script-->
<script language="javascript" type="text/javascript" src="${item.path}../../../elements/javascript/spoiler.js"></script>
<script language="javascript" type="text/javascript" src="${item.path}../../../elements/javascript/site_search.js"></script>
<script language="javascript" type="text/javascript" src="${item.path}../../../elements/javascript/header_img.js"></script>

<!--Footer-->
<script language="javascript" type="text/javascript" src="${item.path}../../../elements/nav/footer.js"></script>

</body>
</html>

`)

// #####################################################
html_table = document.getElementById("main_table").innerHTML;


// #####################################################
var filename = "Rollmaterial-RhB.html"
var filename = id + ".html"
var text = html_top + html_table + html_center + html_bottom;

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);

}