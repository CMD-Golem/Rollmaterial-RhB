var data = [{test:"Test Item", max:true, min:8}];

const html_top = data.map(item => `
<!DOCTYPE html>
<html lang="de">

<head>
<title>Rollmaterial RhB - ${item.type} ${item.numbers}</title>
<meta name="description" content="${item.type} ${item.numbers} (${item.description})">
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


const html_top = data.map(item => `
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
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "hello.html";
    
    download(filename, text);
}, false);