// Navbar
var navbar = `
<input type="checkbox" id="menu">
<label for="menu" class="nav_menu nav_hover"></label>
<a class="nav_home disable_link nav_hover" href="https://rollmaterial-rhb.ch/" title="Home"><img src="https://rollmaterial-rhb.ch/elements/favicon.png"><p>Rollmaterial-RhB</p></a>
<a class="nav_search disable_link nav_hover" href="https://rollmaterial-rhb.ch/data.html" title="Suchen"><img src="https://rollmaterial-rhb.ch/elements/images/search.svg"></a>
<ul class="nav_list">
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/lokomotiven.html" id="lokomotiven">Lokomotiven</a></li>
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/personenwagen.html" id="personenwagen">Personenwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/gepaeckwagen.html" id="gepaeckwagen">Gep&auml;ckwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/gueterwagen.html" id="gueterwagen">G&uuml;terwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/dienstwagen.html" id="dienstwagen">Dienstwagen</a></li>
	<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.ch/data/gleisbaumaschinen.html" id="gleisbaumaschinen">Gleisbaumaschinen</a></li>
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
		<a href="https://rollmaterial-rhb.ch/info/impressum.html">Impressum</a>
		<a href="https://rollmaterial-rhb.ch/info/aenderungen.html">Änderungen</a>
		<a href="https://rollmaterial-rhb.ch/info/anfragen.html">Bilder Anfragen</a>
		<a href="https://rollmaterial-rhb.ch/info/melden.html">Fehler melden</a>
	</div>
	<div class="footer_copyright">©2020 - ${year} by Tobias und Fabian Kaufmann</div>
</div>
<div style="height:20px;"></div>
<p>Alle Bilder auf dieser Webseite sind Urheberrechtlich geschützt und dürfen ohne schriftliche Erlaubnis des Betreibers nicht weiterverwendet werden.</p>
<p>Diese Webseite ist rein Privat und nicht mit der Rhätische Bahn verbunden.</p>
`;


try {
	document.getElementsByTagName("footer")[0].innerHTML = footer;
}
catch (e) {}



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
			images[i].src = "https://rollmaterial-rhb.ch/elements/images/noimage.png";
		}
	}
}

window.addEventListener("load", errorImage);

	




// Back
function backButton() {
	var url = window.location.href;
	var url_remove = url.lastIndexOf("/");
	url = url.substring(0, url_remove) + ".html"

	if (url == "https://rollmaterial-rhb.ch/data.html") {
		url = "https://rollmaterial-rhb.ch/";
	}

	window.location.href = url;
}