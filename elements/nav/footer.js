const footer = `
<footer>
	<div class="footer_text">
		<div class="footer_links">
			<a href="https://rollmaterial-rhb.netlify.app/info/impressum.html">Impressum</a>
			<a href="https://rollmaterial-rhb.netlify.app/info/datenschutz.html">Datenschutz</a>
			<a href="https://rollmaterial-rhb.netlify.app/info/aenderungen.html">Änderungen</a>
			<a href="https://rollmaterial-rhb.netlify.app/info/anfragen.html">Anfragen</a>
			<a href="https://rollmaterial-rhb.netlify.app/info/melden.html">Fehler melden</a>
		</div>
		<div class="footer_copyright">©<script>document.write(new Date().getFullYear());</script> by Tobias und Fabian Kaufmann</div>
	</div>
	<div style="height:20px;"></div>
	<p>Alle Bilder auf dieser Webseite sind Urheberrechtlich gesch&uuml;tzt und d&uuml;rfen ohne schriftliche Erlaubnis des Betreibers nicht weiterverwendet werden.</p>
	<p>Diese Webseite ist rein Privat und nicht mit der Rh&auml;tische Bahn verbunden.</p>
</footer>
`;

document.write(footer)

// Add title to not definitive Data
var notdef = document.getElementsByTagName("u");
for (i = 0; i < notdef.length; i++) {
    notdef[i].title = "Angabe kann Fehlerhaft sein!";
}



// fix broken images / lazy loading
var images = document.getElementsByTagName("img");
for (i = 0; i < images.length; i++) {
	images[i].onerror = function() {this.onerror=null;this.src="https://rollmaterial-rhb.netlify.app/elements/noimage.png";}
	images[i].loading = "lazy";
}
