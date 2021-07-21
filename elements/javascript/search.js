// Source: https://www.youtube.com/watch?v=1iysNUrI3lw and https://stackoverflow.com/a/64197394/14225364


const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const explore = document.getElementById('explore');
const not_found = document.getElementById('not_found');


// Search search.json and filter it
const searchData = async searchText => {
    const res = await fetch('https://raw.githubusercontent.com/CMD-Golem/rollmaterial-rhb/master/elements/search.json');
    const resJson = await res.json();
    const regex = new RegExp(`^${searchText}`, 'gi');
    // Recursion.
    const found = data => (Array.isArray(data) ? data.find(found) : data.match(regex));
    let matches = resJson.filter(data => (found(data.searchdata)));

	if (matches.length === 0) {
		matchList.innerHTML = '';
		explore.style.display = 'flex';
	}
	if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = '';
		explore.style.display = 'flex';
	}
	else {
		explore.style.display = 'none';
	}

	outputHtml(matches);
};

// Show results in Html
const outputHtml = matches => {
	if (matches.length > 0) {
		const html = matches.map(match => `
			<div class="search_output">
				<a class="link disable_link" href="${match.link}">
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


search.addEventListener('keyup', () => searchData(search.value));
window.addEventListener('load', () => searchData(search.value));


//Open first child if user press enter
function enter() {
	var pressedKey = event.key;

	if (pressedKey == "Enter") {
		url = matchList.getElementsByClassName("link")[0].href
		window.location.href = url;
	}
}