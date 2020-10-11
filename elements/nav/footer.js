document.write('<footer><div class="footer_content"><div class="footer_flex"><div style="flex: 40%"><a style="margin-right: 50px;" href="info/impressum.html">Impressum</a> <a style="margin-right: 50px;" href="info/datenschutz.html">Datenschutz</a> <a href="info/anfragen.html">Anfragen</a></div><div style="flex: 40%"><p style="font-size: 12px; text-align: right;">©<script>document.write(new Date().getFullYear());</script> by Tobias und Fabian Kaufmann</p></div></div><div style="height:20px;"></div><p style="font-size: 12px; text-align: center;">Alle Bilder auf dieser Webseite sind Urheberrechtlich gesch&uuml;tzt und d&uuml;rfen ohne ein ausdr&uuml;ckliches Erlaubnis des Betreibers nicht weiterverwendet werden.</p><p style="font-size: 12px; text-align: center;">Diese Webseite ist rein Privat und nicht mit der Rh&auml;tische Bahn verbunden.</p></div></footer>');

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
            t.src = "https://raw.githubusercontent.com/CMD-Golem/cmd-golem.github.io/master/elements/noimage.png";
        }
    }
}
