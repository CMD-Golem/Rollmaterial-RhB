var search = document.getElementById('search');
var matchList = document.getElementById('match-list');
var not_found = document.getElementById('not_found');
var explore = document.getElementById('explore');
var domain = window.location.origin;

search.addEventListener('keyup', searchData);
searchData();

// Search search.json and filter it
async function searchData(search_input) {
	var res = await fetch('/elements/search.json');
	var resJson = await res.json();
	var matches = [];
	var search_input = search.value;
	
	var filter = search_input.toUpperCase().split(" ");

	if (search_input != "") {
		for (var i = 0; i < resJson.length; i++) {
			var filterwords = resJson[i].searchdata.toUpperCase().split(" ");
			var hide = false;
	
			for (var j = 0; j < filter.length; j++) {
				var prehide = true;
	
				for (var k = 0; k < filterwords.length; k++) {
					if (filterwords[k].startsWith(filter[j])) { var prehide = false; }
				}
				if (prehide == false && hide != true) { var hide = false; }
				else { var hide = true; }
			}
	
			if (hide != true) {
				matches.push(resJson[i]);
			}
		}
	}
	else {
		var matches = [];
	}

	if (matches.length == 0 || search_input.length == 0) {
		matchList.innerHTML = '';
		explore.style.display = 'flex';
	}
	else {
		explore.style.display = 'none';
	}

	outputHtml(matches);
};

// Show results in Html
function outputHtml(matches) {
	if (matches.length > 0) {
		var html = matches.map(match => `
			<div class="search_output">
				<a class="link disable_link" href="${domain}${match.link}">
					<h2>${match.type}&#8199;${match.number}</h2>
					<p>${match.description}</p>
				</a>
			</div>

			`).join('');

		not_found.style.display = "none";
		matchList.innerHTML = html;
	}
	else {
		not_found.style.display = "block";
	}
	if (search.value.length == 0) {
		not_found.style.display = "none";
	}
};

//Open first result if user press enter
function enter() {
	if (event.key == "Enter") {
		window.location.href = matchList.getElementsByClassName("link")[0].href;
	}
}