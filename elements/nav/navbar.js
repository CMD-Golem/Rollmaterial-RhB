const navbar = `
<nav>
	<input type="checkbox" id="menu">
	<label for="menu" class="nav_menu nav_hover"></label>
	<a class="nav_home disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/" title="Home"><img src="https://rollmaterial-rhb.netlify.app/elements/favicon.png"><p>Rollmaterial-RhB</p></a>
	<a class="nav_search disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data.html" title="Suchen"><img src="https://rollmaterial-rhb.netlify.app/elements/nav/search.svg"></a>
	<ul class="nav_list">
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/lokomotiven.html" id="lokomotiven">Lokomotiven</a></li>
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/personenwagen.html" id="personenwagen">Personenwagen</a></li>
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/gepaeckwagen.html" id="gepaeckwagen">Gep&auml;ckwagen</a></li>
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/gueterwagen.html" id="gueterwagen">G&uuml;terwagen</a></li>
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/dienstwagen.html" id="dienstwagen">Dienstwagen</a></li>
		<li><a class="nav_link disable_link nav_hover" href="https://rollmaterial-rhb.netlify.app/data/gleisbaumaschinen.html" id="gleisbaumaschinen">Gleisbaumaschinen</a></li>
	</ul>
</nav>
`;

document.write(navbar)
