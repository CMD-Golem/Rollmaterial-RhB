document.write('<footer><div class="footer_text"><div class="footer_links"><a href="https://rollmaterial-rhb.netlify.app/info/impressum.html">Impressum</a> <a href="https://rollmaterial-rhb.netlify.app/info/datenschutz.html">Datenschutz</a> <a href="">Anfragen</a> <a href="">Fehler melden</a></div><div class="footer_copyright">©<script>document.write(new Date().getFullYear());</script> by Tobias und Fabian Kaufmann</div></div><div style="height:20px;"></div><p>Alle Bilder auf dieser Webseite sind Urheberrechtlich gesch&uuml;tzt und d&uuml;rfen ohne schriftliche Erlaubnis des Betreibers nicht weiterverwendet werden.</p><p>Diese Webseite ist rein Privat und nicht mit der Rh&auml;tische Bahn verbunden.</p></footer>');

// Add title to not definitive Data
var notdef = document.getElementsByTagName("u");
for (i = 0; i < notdef.length; i++) {
    notdef[i].title = "Angabe ist nicht definitiv und kann ändern!";
}




// fix broken images https://stackoverflow.com/a/980951
window.onload = fixBrokenImages;


function fixBrokenImages(url) {
    var img = document.getElementsByTagName('img');
    var i=0, l=img.length;
    for(;i<l;i++){
        var t = img[i];
        if(t.naturalWidth === 0){
            //this image is broken
            t.src = "https://rollmaterial-rhb.netlify.app/elements/noimage.png";
        }
    }
}
