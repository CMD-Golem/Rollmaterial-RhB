var domain = window.location.origin;
var container_json = document.getElementById("container_json");
var container_sitemap = document.getElementById("container_sitemap");
var html_json = "", count_json, store_json = [];
var html_sitemap = "", count_sitemap, store_sitemap = [];

getSearchJson();
getSitemap();

async function getSearchJson() {
	// var res = await fetch('https://raw.githubusercontent.com/CMD-Golem/rollmaterial-rhb/master/elements/search.json');
	var res = await fetch('http://127.0.0.1:5500/elements/search.json');
	var resJson = await res.json();
	count_json = resJson.length;

	for (var i = 0; i < resJson.length; i++) {
		testUrl(resJson[i].link, i, true);
	}

}

async function getSitemap() {
	// var res = await fetch('https://raw.githubusercontent.com/CMD-Golem/rollmaterial-rhb/master/sitemap.xml');
	var res = await fetch('http://127.0.0.1:5500/sitemap.xml');
	var resXml = await res.text();

	var parser = new DOMParser();
	xml = parser.parseFromString(resXml, 'text/xml');
	var links = xml.getElementsByTagName("loc");
	count_sitemap = links.length;

	for (var i = 0; i < links.length; i++) {
		var link = links[i].innerHTML.replace("https://rollmaterial-rhb.ch", "");
		testUrl(link, i, false);
	}

}

async function testUrl(link, i, is_json) {
	var request = new XMLHttpRequest();  
	request.open('GET', domain + link, true);
	request.onreadystatechange = function(){
		if (request.status === 200) {
			request.abort();
			// compareSources(link, is_json);
		}
		else if (request.status === 404) {
			request.abort();
			showWrongUrl(link, i, is_json);
		}
	};
	request.send();
}

function showWrongUrl(link, i, is_json) {
	if (is_json) {
		html_json +=`<tr><td>https://rollmaterial-rhb.ch${link}</td><td style="width: 100px">Index: ${i + 1}</td></tr>`;
		container_json.innerHTML = html_json;

		count_json -= 1;
	}
	else {
		html_sitemap +=`<tr><td>https://rollmaterial-rhb.ch${link}</td><td style="width: 100px">Index: ${i * 5 + 11}</td></tr>`;
		container_sitemap.innerHTML = html_sitemap;

		count_sitemap -= 1;
	}
}


function compareSources(link, is_json) {
	if (is_json) {
		store_json.push(link);
		counter_json += 1;
		if (count_json == counter_json) {

		}
	}
	else {
		store_sitemap.push(link);
		counter_sitemap += 1;
		if (count_sitemap == counter_sitemap) {

		}
	}
}