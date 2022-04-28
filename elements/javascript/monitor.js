var domain = window.location.origin;
var container_url = document.getElementById("show_wrong_url");
var html = "";

checkSearchJson();

async function checkSearchJson() {
	// var res = await fetch('https://raw.githubusercontent.com/CMD-Golem/rollmaterial-rhb/master/elements/search.json');
	var res = await fetch('http://127.0.0.1:5500/elements/search.json');
	var resJson = await res.json();

	for (var i = 0; i < resJson.length; i++) {
		testUrl(resJson[i]);
	}

}

async function testUrl(object) {
	var request = new XMLHttpRequest();  
	request.open('GET', domain + object.link, true);
	request.onreadystatechange = function(){
		if (request.status === 200) {
			request.abort();
		}
		else if (request.status === 404) {
			request.abort();
			showWrongUrl(object);
		}
	};
	request.send();
}

function showWrongUrl(object) {
	html +=`
		<div class="search_output">
			<a class="link disable_link" href="${domain}${object.link}">
				<h2>${object.type}&#8199;${object.number}</h2>
				<p>${domain}${object.link}</p>
			</a>
		</div>`

	container_url.innerHTML = html;
}