// testing
var pathname = window.location.pathname;
var domain = window.location.origin;

if (localStorage.getItem("testing") == "true") {
	testSearch();
	testSitemap();
	testHead();

	console.log('Testing deaktiviert.\nlocalStorage.removeItem("testing")')
}
else {
	console.error('Testing ist nicht aktiviert.\nlocalStorage.setItem("testing", "true")');
}

function testHead() {
	try {
		var nav = document.getElementsByTagName("nav")[0];
		if (!nav.classList.contains(pathname.split("/").replace(".html", "")[2])) {
			console.error("Nav Titel falsch");
		}
		
		var canonical = document.querySelectorAll('meta[rel="canonical"]')
		if (canonical[0].getAttribute("href") != "https://rollmaterial-rhb.ch" + pathname) {
			console.error("Cononical falsch");
		}
	}
	catch (e) {}
}

async function testSearch() {
	var res = await fetch('/elements/search.json');
	var resJson = await res.json();
	var in_search = false;

	for (var i = 0; i < resJson.length; i++) {
		if (resJson[i].link == pathname) {
			in_search = true;
		}
	}
	if (in_search == false) {
		console.error("Nicht in Suche (Ok wenn Seite nicht gefunden werden muss)");
	}
}

async function testSitemap() {
	var res = await fetch('/sitemap.xml');
	var resXml = await res.text();

	var parser = new DOMParser();
	xml = parser.parseFromString(resXml, 'text/xml');
	var links = xml.getElementsByTagName("loc");
	var in_search = false;

	for (var i = 0; i < links.length; i++) {
		var link = links[i].innerHTML.replace("https://rollmaterial-rhb.ch", "");
		if (link == pathname) {
			in_search = true;
		}
	}
	if (in_search == false) {
		console.error("Nicht in Sitemap");
	}
}

// #################################################################################################
// Navbar
var navbar = `
<input type="checkbox" id="menu">
<label for="menu" class="nav_menu nav_hover"></label>
<a class="nav_home disable_link nav_hover" href="/" title="Home"><img src="/elements/favicon.png"><p>Rollmaterial-RhB</p></a>
<a class="nav_search disable_link nav_hover" href="/data.html" title="Suchen"><img src="/elements/images/search.svg"></a>
<ul class="nav_list">
	<li><a class="nav_link disable_link nav_hover" href="/data/lokomotiven.html" id="lokomotiven">Lokomotiven</a></li>
	<li><a class="nav_link disable_link nav_hover" href="/data/personenwagen.html" id="personenwagen">Personenwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="/data/gepaeckwagen.html" id="gepaeckwagen">Gep&auml;ckwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="/data/gueterwagen.html" id="gueterwagen">G&uuml;terwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="/data/dienstwagen.html" id="dienstwagen">Dienstwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="/data/gleisbaumaschinen.html" id="gleisbaumaschinen">Gleisbaumaschinen</a></li>
</ul>
`;

try {
	var el_navbar = document.getElementsByTagName("nav")[0];
	el_navbar.innerHTML = navbar;

	var nav_back_button = document.createElement("div");
	nav_back_button.classList.add("nav_back_button_container");
	nav_back_button.innerHTML = '<button id="nav_back_button" title="Klicke um ins übergeordnete Verzeichnis zu kommen" onclick="backButton()">< Zurück</button>';

	el_navbar.parentNode.insertBefore(nav_back_button, el_navbar.nextSibling);
	
}
catch (e) {}

// Footer
var year = new Date().getFullYear();

var footer = `
<div class="footer_text">
	<div class="footer_links">
		<a href="/info/impressum.html">Impressum</a>
		<a href="/info/aenderungen.html">Änderungen</a>
		<a href="/info/anfragen.html">Bilder Anfragen</a>
		<a href="/info/melden.html">Fehler melden</a>
	</div>
	<div class="footer_copyright">©2020 - ${year} by Tobias und Fabian Kaufmann</div>
</div>
<div style="height:20px;"></div>
<p>Alle Bilder auf dieser Webseite sind Urheberrechtlich geschützt und dürfen ohne schriftliche Erlaubnis des Betreibers nicht weiterverwendet werden.</p>
<p>Diese Webseite ist rein Privat und nicht mit der Rhätische Bahn verbunden.</p>
`;


try {
	var footer_el = document.getElementsByTagName("footer")[0];
	footer_el.innerHTML = footer;

	var print_footer = document.createElement("p");
	print_footer.classList.add("print_footer");
	print_footer.innerHTML = "© Tobias Kaufmann <span>rollmaterial-rhb.ch</span>";
	footer_el.parentNode.insertBefore(print_footer, footer_el.nextSibling);
}
catch (e) {}


// #################################################################################################
// Add title to not definitive Data
var notdef = document.getElementsByTagName("u");
for (var i = 0; i < notdef.length; i++) {
	notdef[i].title = "Angabe kann Fehlerhaft sein!";
}

// fix broken images / lazy loading
function errorImage() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].loading = "lazy";
		if (images[i].complete == true && images[i].naturalHeight == 0) {
			images[i].src = "/elements/images/noimage.png";
		}
	}
}

window.addEventListener("load", errorImage);

// Back
function backButton() {
	var url = window.location.href;
	var url_remove = url.lastIndexOf("/");
	url = url.substring(0, url_remove) + ".html"

	if (url == domain + "/data.html") {
		url = domain;
	}

	window.location.href = url;
}